function applyTags(data) {
  let codes = document.getElementsByTagName("code");
  var osm_id = 0;
  var tag = '';
  for (var i in codes) {
    if (!codes[i].innerText) continue
    if (codes[i].innerText.indexOf(".") > -1) {
      let parts = codes[i].innerText.split(".")
      osm_id = parseInt(parts[0])
      tag = parts[1]
    } else {
      tag = codes[i].innerText;
    }

    if (tag == "note") {
      codes[i].parentElement.style = "max-width: 400px;"
    }

    data[osm_id]['link'] = `<a target=_blank href='https://www.openstreetmap.org/relation/${osm_id}'>${osm_id}</a> <a target=_blank href='https://www.openstreetmap.org/edit?relation=${osm_id}'>iD</a>`;
    try {
      codes[i].innerHTML = data[osm_id][tag] ?? ``;
    } catch {

    }

  }
}
