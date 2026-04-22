/*Task 2) Choose a city and show 5 locations of interest (example: retail stores, museum, school,
etc.) using points. Display information like name, location and other information using sidebar
for each location.*/

  var task2Layer = L.layerGroup();
  var lionBarMarker = L.marker([60.4854225179248, 15.432960745367723]);
  var olearysMarker = L.marker([60.48770531048527, 15.435169573490043]);
  var pitchersMarker = L.marker([60.48724343050742, 15.434881057844194]);
  var lipsMarker = L.marker([60.48669028530142, 15.434429271164333]);
  var helaHusetMarker = L.marker([60.48799900000034, 15.430763000000013]);
  task2Layer.addLayer(lionBarMarker);
  task2Layer.addLayer(olearysMarker);
  task2Layer.addLayer(pitchersMarker);
  task2Layer.addLayer(lipsMarker);
  task2Layer.addLayer(helaHusetMarker);

  lionBarMarker.on("click", function () {
    sidebar.setContent(
      "<h2>Lion Bar</h2> <p> Adress: <br> Borganäsvägen 28, 784 33 Borlänge <p> Öppettider: <br> Måndag:	15-03 <br> Onsdag: 15-03 <br> Torsdag: 15-03 <br> Fredag: 15-03 <br> Lördag: 15-03 <br> Söndag: 15-03 <p> Telefon: 0243-185 00 <br>",
    );
    sidebar.show();
  });

  olearysMarker.on("click", function () {
    sidebar.setContent(
      "<h2>O´Learys</h2> <p> Adress: <br> Borganäsvägen 48, 784 33 Borlänge <p> Öppettider: <br> Måndag:	16-21 <br> Tisdag:	16-23 <br> Onsdag: 16-23 <br> Torsdag: 16-23 <br> Fredag: 15-01 <br> Lördag: 11:30-02 <br> Söndag: 11:30-21 <p> Telefon: 0243-130 60",
    );
    sidebar.show();
  });

  pitchersMarker.on("click", function () {
    sidebar.setContent(
      "<h2>Pitcher´s</h2> <p> Adress: <br> Borganäsvägen 44, 784 33 Borlänge <p> Öppettider: <br> Måndag:	15-21 <br> Tisdag:	15-23 <br> Onsdag: 15-23 <br> Torsdag: 15-23 <br> Fredag: 15-02 <br> Lördag: 15-02 <br> Söndag: 15-21 <p> Telefon: 0243-55 06 56",
    );
    sidebar.show();
  });

  lipsMarker.on("click", function () {
    sidebar.setContent(
      "<h2>Lips</h2> <p> Adress: <br> Borganäsvägen 40, 784 33 Borlänge <p> Öppettider: <br> Måndag:	12-02 <br> Tisdag:	12-02 <br> Onsdag: 12-02 <br> Torsdag:  12-02 <br> Fredag:  12-03 <br> Lördag:  12-03 <br> Söndag:  12-02 <p>",
    );
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
`);
    sidebar.show();
  });


document.getElementById("l2").addEventListener("click", task2);

var sidebar = L.control.sidebar("sidebar", { position: "left" });
map.addControl(sidebar);

function task2() {
  map.flyTo([60.48636003827599, 15.433643661315159]);

  if (map.hasLayer(task2Layer)) {
    map.removeLayer(task2Layer);
    sidebar.hide();
  } else {
    map.addLayer(task2Layer);
  }
}

