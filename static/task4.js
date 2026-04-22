/*Task 4) Use an image to overlay on the basemap. Choose any location in Sweden.*/

//Med hjälp av koden från workshopen och Microsoft Copilot (2026)
var imageOverlay; 
var imageUrl = '/static/EAE00F5E-15C5-4B3D-B4B4-168E7ECA542D-removebg-preview.png';
var task4Layer = L.layerGroup();
var imageBounds = [
    [60.48575667147429, 15.430637759895228],
    [60.48525535723287, 15.432145999999994],
    [60.48492765244402, 15.43164710913806],
    [60.485400709104034, 15.430161165368544]
];

    

imageOverlay = L.imageOverlay(imageUrl, imageBounds);
task4Layer.addLayer(imageOverlay);

function task4() {
    if(map.hasLayer(task4Layer)) {
        map.removeLayer(task4Layer);
    } else { 
        map.addLayer(task4Layer);
    }
    
}

document.getElementById("l4").addEventListener("click", task4);

