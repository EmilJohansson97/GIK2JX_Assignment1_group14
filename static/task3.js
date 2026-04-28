var supermarketLayer = L.geoJSON(supermarket, {
  onEachFeature: function (feature, layer) {
    layer.bindPopup("<p>" + feature.properties.name + "</p>");
  },
});

var bufferLayer = null;
var isolatedBuffer = null;

document.getElementById("l3").addEventListener("click", task3);

function task3() {
  var buffers = turf.buffer(supermarket, 1, { units: "kilometers" });

  if (bufferLayer && map.hasLayer(bufferLayer)) {
    map.removeLayer(bufferLayer);
    map.removeLayer(supermarketLayer);
    if (isolatedBuffer) {
      map.removeLayer(isolatedBuffer);
      isolatedBuffer = null;
    }
    bufferLayer = null;
    return;
  } else {
    map.flyTo([59.856507200368725, 17.646067931577022], 8);

    supermarketLayer.addTo(map);
    bufferLayer = L.geoJSON(buffers, {
      style: {
        color: "yellow",
        dashArray: "5,5",
        fillOpacity: 0.1,
      },
    }).addTo(map);
  }
  // Lösning för att hitta isolerade buffertar genererad av ChatGPT
  var isolatedFeatures = [];

  for (var i = 0; i < buffers.features.length; i++) {
    var buffer = buffers.features[i];
    var isIsolated = true;

    for (var j = 0; j < buffers.features.length; j++) {
      if (i !== j) {
        var otherBuffer = buffers.features[j];
        if (
          !turf.booleanDisjoint(buffer, otherBuffer) ||
          turf.booleanContains(buffer, otherBuffer)
        ) {
          isIsolated = false;
          break;
        }
      }
    }

    if (isIsolated) {
      isolatedFeatures.push(buffer);
    }
  }
  isolatedBuffer = L.geoJSON(
    {
      type: "FeatureCollection",
      features: isolatedFeatures,
    },
    {
      style: {
        color: "red",
        fillColor: "red",
        fillOpacity: 0.5,
      },
    },
  ).addTo(map);
}
