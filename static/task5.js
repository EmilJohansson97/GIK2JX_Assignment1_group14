document.getElementById("l5").addEventListener("click", task5);

var fuelLayer = L.geoJSON(fuel, {
  onEachFeature: function (feature, layer) {
    layer.bindPopup("<p>" + feature.properties.name + "</p>");
  },
});

var fuelClusters = L.markerClusterGroup();
fuelClusters.addLayer(fuelLayer);

function task5() {
  if (map.hasLayer(fuelClusters)) {
    map.removeLayer(fuelClusters);
  } else {
    map.flyTo([59.33278782836633, 18.065093563919522], 10);

    map.addLayer(fuelClusters);
  }
}
