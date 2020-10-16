const options = {
    dragging:false,
    touchZoom:false,
    doubleClickZoom:false,
    scrollWheelZoom:false,
    zoomControl:false
}
// creat map
const map = L.map('mapid',options).setView([-31.3969825,-52.6775604], 16);

//creat and add titleLayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

// creat icon
const icon = L.icon({
    iconUrl:"./public/images/map-marker.svg",
    iconSize:[58,68],
    iconAnchor:[29,68],
    popupAnchor:[170,2]
})

// creat and add marker
L.marker([-31.3969825,-52.6775604],{icon}).addTo(map)

// image galery
function selectImage(event) {
    const button = event.currentTarget

    //remover todas as classes .active
    const buttons = document.querySelectorAll(".images button")
    buttons.forEach(removeActiveClass)

    function removeActiveClass(button) {
        button.classList.remove("active")
    }

    //selecionar a img clickada
    const image = button.children[0]
    const imageContainer = document.querySelector(".orphanage-details > img")

    //atualizar o conainer de imagem
    imageContainer.src = image.src

    //adicionar a classes .active para este botao
    button.classList.add('active')
}