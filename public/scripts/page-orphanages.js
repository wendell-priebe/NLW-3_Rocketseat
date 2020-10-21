// const {orphanages}  = require("../../src/pages.js");

// creat map
const map = L.map('mapid').setView([-31.3945682,-52.6786054], 16);

//creat and add titleLayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

// creat icon
const icon = L.icon({
    iconUrl:"/images/map-marker.svg",
    iconSize:[58,68],
    iconAnchor:[29,68],
    popupAnchor:[170,2]
})

function addMarker({id, name, lat, lng}) {


    // const creat popup overlay
    const popup = L.popup({
        closeButton:false,
        className:"map-popup",
        minWidth:240,
        minHeight:240
    }).setContent(`${name} <a href="/orphanage?id=${id}&class="choose-orphanage" class="choose-orphanage"> <img src="/images/arrow-white.svg"> </a>`)
    
    // creat and add marker
    L.marker([lat, lng],{icon})
        .addTo(map)
        .bindPopup(popup)
        // .openPopup(popup);
    
}

const orphanagesSpan = document.querySelectorAll('.orphanages span')
orphanagesSpan.forEach(span =>{
    const orphanage = {
        id: span.dataset.id,
        name: span.dataset.name,
        lat:span.dataset.lat,
        lng:span.dataset.lng
    }
    addMarker(orphanage)
})