document.getElementById("l6").addEventListener("click", task6);

var markers = L.DonutCluster(
  { chunkedLoading: true },
  {
    key: "title",
    arcColorDict: {
      Shell: "red",
      OKQ8: "green",
      Preem: "blue",
      St1: "orange",
      Circle: "purple",
      Tanka: "cyan",
      Övrigt: "gray",
    },
  },
);

fuel.features.forEach(function (feature) {
  var coords = feature.geometry.coordinates;
  var lng = coords[0];
  var lat = coords[1];

  var props = feature.properties;
  var text = (props.brand || props.operator || props.name || "").toLowerCase();

  var category = "Övrigt";
  if (text.includes("shell")) category = "Shell";
  else if (text.includes("okq8")) category = "OKQ8";
  else if (text.includes("preem")) category = "Preem";
  else if (text.includes("st1")) category = "St1";
  else if (text.includes("circle")) category = "Circle";
  else if (text.includes("tanka")) category = "Tanka";
  markers.addLayer(
    L.marker([lat, lng], { title: category }).bindPopup(
      props.name || "Okänd butik",
    ),
  );
});
function task6() {
  if (map.hasLayer(markers)) {
    map.removeLayer(markers);
  } else {
    map.flyTo([59.32701379054751, 18.068646231902903], 8);

    map.addLayer(markers);
  }
}
