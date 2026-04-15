/*Task 2) Choose a city and show 5 locations of interest (example: retail stores, museum, school,
etc.) using points. Display information like name, location and other information using sidebar
for each location.*/

var task2 = {
  type: "FeatureCollection",
  features: [
    {
      type: "Feature",
      properties: {},
      geometry: {
        type: "Polygon",
        coordinates: [
          [
            [15.417916026183576, 60.48635643440721],
            [15.435169573490043, 60.48770531048527],
            [15.434881057844194, 60.48724343050742],
            [15.434429271164333, 60.48669028530142],
            [15.430763000000013, 60.48799900000034]
          ],
        ],
      },
    },
  ],
};

function loadTask2() {
  var marker = L.marker([60.4854225179248, 15.432960745367723]).addTo(map);
  var marker = L.marker([60.48770531048527, 15.435169573490043]).addTo(map);
  var marker = L.marker([60.48724343050742, 15.434881057844194]).addTo(map);
  var marker = L.marker([60.48669028530142, 15.434429271164333]).addTo(map);
  var marker = L.marker([60.48799900000034, 15.430763000000013]).addTo(map);
}

document.getElementById("l2").addEventListener("click", loadTask2);
