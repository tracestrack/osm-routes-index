function show(data, filterby, regex, taglist) {
  let s = taglist.map(tag => {return `<td>${tag}</td>`}).join("")
  var html = filterby == '' ? '' : `Filtered by tag <code>${filterby}</code> with regex <code>${regex}</code>`;
  html += '<table class="mc-table"><tr><td></td>' + s + '</tr>';
  var tmp_arr = []
  for (var osm_id in data) {
    if (filterby != '') {
      if (!data[osm_id][filterby]) continue;
      if (!data[osm_id][filterby].match(regex)) continue;
    }
    data[osm_id].id = osm_id;
    tmp_arr.push(data[osm_id])
  }

  let coalesceInt = a => {return parseInt(a) ? parseInt(a) : a;};
  let sorted_arr = tmp_arr.sort((a, b) => {return coalesceInt(a.ref) > coalesceInt(b.ref)});

  for (var i in sorted_arr) {
    let ele = sorted_arr[i];
    let osm_id = ele['id'];
    ele['id'] = `<a target='_blank' href='https://www.openstreetmap.org/relation/${osm_id}'>${osm_id}</a> <a target=_blank href='https://www.openstreetmap.org/edit?relation=${osm_id}' title='Edit in iD'>iD</a><button onclick="fetch('http://localhost:8111/load_object?new_layer=false&relation_members=true&objects=r${osm_id}')" title='Edit in JOSM'>JOSM</a>`;
    let wikipedia = sorted_arr[i]['wikipedia'] ?? '';
    ele['wikipedia'] = `<a target='_blank' href="https://www.wikidata.org/wiki/${wikipedia}">${wikipedia}</a>`;
    let wikidata = sorted_arr[i]['wikidata'] ?? '';
    ele['wikidata'] = `<a target='_blank' href="https://www.wikidata.org/wiki/${wikidata}">${wikidata}</a>`;

    ele['colour'] = `<span style="background: ${ele['colour']}">${ele['colour'] ?? ''}</span>`;

    html +=
      `<tr><td>${i}</td>` + taglist.map(tag => {return `<td><div style='max-width: 170px;word-break: break-all;'>${ele[tag] ?? ""}</div></td>`}).join("") + `</tr>`;
  }

  html += '</table>';
  document.getElementById('main').innerHTML = html;
}
