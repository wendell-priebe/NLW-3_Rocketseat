// creat map
const map = L.map('mapid').setView([-31.3969825,-52.6775604], 16);

//creat and add titleLayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

// creat icon
const icon = L.icon({
    iconUrl:"./public/images/map-marker.svg",
    iconSize:[58,68],
    iconAnchor:[29,68],

})

let marker 

// creat and add marker
map.on('click',function(event){
    console.log(event)
    const lat = event.latlng.lat
    const lng = event.latlng.lng
    document.querySelector('[name=lat]').value = lat
    document.querySelector('[name=lng]').value = lng
    //remove icon
    marker && map.removeLayer(marker)

    //add icon layer
    marker = L.marker([lat,lng], {icon})
    .addTo(map)
})

// upload select fotos
function addPhotoField (){
    // pegar o container de fotos #images
    const container =  document.querySelector('#images')

    // pegar o container para duplicar .new-image
    const fieldsContainer = document.querySelectorAll('.new-upload')

    // realizar a clone da ultima imagem adicionada
    const newFieldContainer = fieldsContainer[fieldsContainer.length - 1].cloneNode(true)

    // verificar se o campo esta vazio, se sim nao adicionar ao campo de fotos
    const input = newFieldContainer.children[0]
    if (input.value == "") {
        return 
    }

    //limpar campo antes de adicionar ao container de imagens
    input.value = ""

    //adicionar o clone ao container de #images
    container.appendChild(newFieldContainer)
}

function deleteField(event){
    const span = event.currentTarget
    const fieldsContainer = document.querySelectorAll('.new-upload')
    if (fieldsContainer.length < 2) {
        //limpar o valor do campo
        span.parentNode.children[0].value = ""
        return
    }
    // deletar o campo
    span.parentNode.remove()
}

// selecionar do sim e não
function toggleSelect(event){
    // retirar a class active
    document.querySelectorAll('.button-select button')
    .forEach(function (button) {
        button.classList.remove('active')    
    })

    // colocar a class active
    const button = event.currentTarget
    button.classList.add('active')

    //atualizar o meu input hidden com o valor selecionado
    const input = document.querySelector('[name="open_on_weekends" ]')
    input.value = button.dataset.value

}