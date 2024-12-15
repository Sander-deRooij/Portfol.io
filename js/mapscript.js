document.addEventListener("DOMContentLoaded", function () {
    const map = L.map('map').setView([51.388603, 4.593165], 15);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '© OpenStreetMap'
    }).addTo(map);


    L.marker([51.388603, 4.593165]).addTo(map)
        .bindPopup('Dorpsstraat 28, Wuustwezel')
        .openPopup();
});