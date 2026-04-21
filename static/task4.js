//Med hjälp av koden från workshopen och Microsoft Copilot (2026)
var imageOverlay; 

function loadTask4() {

    var imageUrl = '/static/EAE00F5E-15C5-4B3D-B4B4-168E7ECA542D-removebg-preview.png';

    var imageBounds = [
        [60.48575667147429, 15.430637759895228],
        [60.48525535723287, 15.432145999999994],
        [60.48492765244402, 15.43164710913806],
        [60.485400709104034, 15.430161165368544]
    ];

    if (imageOverlay) {
        map.removeLayer(imageOverlay);
    }

    imageOverlay = L.imageOverlay(imageUrl, imageBounds).addTo(map);
}

document.getElementById("l4").addEventListener("click", loadTask4);

