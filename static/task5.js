document.getElementById("l5").addEventListener("click", task5);

function task5() {
  map.flyTo([59.33278782836633, 18.065093563919522], 10);
  var fuelLayer = L.geoJSON(fuel, {
    onEachFeature: function (feature, layer) {
      layer.bindPopup("<p>" + feature.properties.name + "</p>");
    },
  });

  var fuelClusters = L.markerClusterGroup();
  fuelClusters.addLayer(fuelLayer);

  map.addLayer(fuelClusters);
}
