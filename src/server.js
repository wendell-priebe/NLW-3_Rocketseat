// importar dependencias
const express = require('express')
const path = require('path')                        // faz a ligação e procura as pastas e arquivos
const pages = require('./pages.js')

// iniciar o express
const server = express()

server
    // utilizar body do req
    .use(express.urlencoded({extended:true}))
    // utilizando os arquivos estaticos
    .use(express.static('public'))

    // configurar template engine
    .set('views', path.join(__dirname, 'views'))    // __dirname é a pasta atual
    .set('view engine', 'hbs')

    // criar uma rotas
    .get('/',pages.index)
    .get('/orphanage',pages.orphanage)
    .get('/orphanages',pages.orphanages)
    .get('/create-orphanage',pages.createOrphanage)
    .post('/save-orphanage', pages.saveOrphanage)

// ligar servidor
server.listen(5500, function(){
    console.log('server is running')
})