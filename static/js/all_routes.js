function show(data, filterby, regex) {
  var html = '<table class="mc-table"><tr><td></td><td>ref</td><td>OSM ID</td><td>name</td><td>official_name</td><td>from</td><td>to</td><td>distance</td><td>network</td><td>note</td><td>wikipedia</td><td>wikidata</td></tr>';
  var tmp_arr = []
  for (var osm_id in data) {
    if (filterby != '') {
      if (!data[osm_id][filterby]) continue;
      if (!data[osm_id][filterby].match(regex)) continue;
    }
    data[osm_id].id = osm_id;
    tmp_arr.push(data[osm_id])
  }

  let sorted_arr = tmp_arr.sort((a, b) => {return a.ref > b.ref});

  for (var i in sorted_arr) {
    let osm_id = sorted_arr[i]['id'];
    let link = `<a target='_blank' href='https://www.openstreetmap.org/relation/${osm_id}'>${osm_id}</a> <a target=_blank href='https://www.openstreetmap.org/edit?relation=${osm_id}'>iD</a>`;
    let wikipedia = sorted_arr[i]['wikipedia'] ?? '';
    wikipedia_link = `<a target='_blank' href="https://www.wikidata.org/wiki/${wikipedia}">${wikipedia}</a>`;
    let wikidata = sorted_arr[i]['wikidata'] ?? '';
    wikidata_link = `<a target='_blank' href="https://www.wikidata.org/wiki/${wikidata}">${wikidata}</a>`;

    html +=
      `<tr><td>${i}</td><td>${sorted_arr[i]['ref']}</td><td>${link}</td><td>${sorted_arr[i]['name']}</td><td>${sorted_arr[i]['official_name'] ?? ""}</td><td>${sorted_arr[i]['from']
    ?? ''}</td><td>${sorted_arr[i]['to'] ??
    ''}</td><td>${sorted_arr[i]['distance'] ??
    ''}</td><td>${sorted_arr[i]['network'] ?? ''}</td><td>${sorted_arr[i]['note']
    ?? ''}</td><td>${wikipedia_link ??
    ''}</td><td>${wikidata_link ?? ''}</td></tr>`;
  }

  html += '</table>';
  document.getElementById('main').innerHTML = html;
}
