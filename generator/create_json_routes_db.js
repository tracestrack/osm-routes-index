#!/usr/bin/env node

const locator = require("country-locator");

const readline = require('readline');
const fs = require('fs');
var args = process.argv.slice(2);
let file = args[0]
let folder = args[1]

const fileStream = fs.createReadStream(`${file}`);
const rl = readline.createInterface({
  input: fileStream
});

var countryIDmap = {};

(async function() {
  for await (const line of rl) {

    //   2515 | POINT(1.2009984999999999 52.0576065991127) | "ref"=>"A1189", "type"=>"route", "route"=>"road"

    if (line.indexOf("POINT") == -1) continue;

    var id = 0
    var match = line.split(' | ');
    var coord;
    if (match && match[0]) id = parseInt(match[0]);
    if (match && match[1]) coord = match[1].split("POINT(")[1].split(")")[0].split(" ")

    let lon = parseFloat(coord[0])
    let lat = parseFloat(coord[1])
    if (!lat || !lon) {
      continue
    }

    const countryInfo = locator.findCountryByCoordinate(lat, lon); // returns array
    if (countryInfo && countryInfo['isoA2Code']) {
      let keys = match[2].slice(0, -1).replace('"', '').split('", "').reduce((acc, x) => {
        acc[x.split('"=>"')[0]] = x.split('"=>"')[1]
        return acc;
      }, {})

      if (!countryIDmap[countryInfo['isoA2Code']]) countryIDmap[countryInfo['isoA2Code']] = {}
      countryIDmap[countryInfo['isoA2Code']][id] = keys
    }
  }

  fs.mkdirSync(folder);
  for (var i in countryIDmap) {
    let data = JSON.stringify(countryIDmap[i]);
    fs.writeFileSync(`${folder}/${i}.json`, data)
  }
})();
