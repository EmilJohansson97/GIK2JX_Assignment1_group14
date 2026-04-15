var map = L.map('map').setView([60.48434877353995, 15.432149075050518], 15);

lyrOSM= L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png');
map.addLayer(lyrOSM);
