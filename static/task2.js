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
            [15.417916026183576, 60.48635643440721], //Lion Bar
            [15.435169573490043, 60.48770531048527], //O´Learys
            [15.434881057844194, 60.48724343050742], //Pitchers
            [15.434429271164333, 60.48669028530142], //Lips
            [15.430763000000013, 60.48799900000034], //Hela huset
          ],
        ],
      },
    },
  ],
};

function loadTask2() {
  var lionBarMarker = L.marker([60.4854225179248, 15.432960745367723]).addTo(map);
  var olearysMarker = L.marker([60.48770531048527, 15.435169573490043]).addTo(map);
  var pitchersMarker = L.marker([60.48724343050742, 15.434881057844194]).addTo(map);
  var lipsMarker = L.marker([60.48669028530142, 15.434429271164333]).addTo(map);
  var helaHusetMarker = L.marker([60.48799900000034, 15.430763000000013]).addTo(map);

  lionBarMarker.on("click", function () {
    sidebar.setContent("<h2>Lion Bar</h2> <p> Adress: <br> Borganäsvägen 28, 784 33 Borlänge <p> Öppettider: <br> Måndag:	15-03 <br> Onsdag: 15-03 <br> Torsdag: 15-03 <br> Fredag: 15-03 <br> Lördag: 15-03 <br> Söndag: 15-03 <p> Telefon: 0243-185 00 <br> <img src='/static/lionbar.png'>");
    sidebar.show();
  });

  olearysMarker.on("click", function () {
    sidebar.setContent("<h2>O´Learys</h2> <p> Adress: <br> Borganäsvägen 48, 784 33 Borlänge <p> Öppettider: <br> Måndag:	16-21 <br> Tisdag:	16-23 <br> Onsdag: 16-23 <br> Torsdag: 16-23 <br> Fredag: 15-01 <br> Lördag: 11:30-02 <br> Söndag: 11:30-21 <p> Telefon: 0243-130 60");
    sidebar.show();
  });

  pitchersMarker.on("click", function () {
    sidebar.setContent("<h2>Pitcher´s</h2> <p> Adress: <br> Borganäsvägen 44, 784 33 Borlänge <p> Öppettider: <br> Måndag:	15-21 <br> Tisdag:	15-23 <br> Onsdag: 15-23 <br> Torsdag: 15-23 <br> Fredag: 15-02 <br> Lördag: 15-02 <br> Söndag: 15-21 <p> Telefon: 0243-55 06 56");
    sidebar.show();
  });

  lipsMarker.on("click", function () {
    sidebar.setContent("<h2>Lips</h2> <p> Adress: <br> Borganäsvägen 40, 784 33 Borlänge <p> Öppettider: <br> Måndag:	12-02 <br> Tisdag:	12-02 <br> Onsdag: 12-02 <br> Torsdag:  12-02 <br> Fredag:  12-03 <br> Lördag:  12-03 <br> Söndag:  12-02 <p>");
    sidebar.show();
  });

  helaHusetMarker.on("click", function () {
sidebar.setContent(`
  <h2>Hela Huset</h2>
  <p> Evenemangsbaserat diskotek <p>
  <p>Adress:<br>Jussi Björlings väg 25, 784 32 Borlänge</p>
  <p>Se kommande evenemang och läs mer på:
    <a href="https://galaxen.se" target="_blank">galaxen.se</a>
  </p>
`);    sidebar.show();
  });
}

document.getElementById("l2").addEventListener("click", loadTask2);

var sidebar = L.control.sidebar('sidebar', { position: 'left' });
map.addControl(sidebar);


