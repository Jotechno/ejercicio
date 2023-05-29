const express = require('express')
const {dbConnection} = require('../database/config')
class Server{

    constructor(){
        this.app = express()
        this.port = process.env.PORT //Capturando variable puerto
        this.usuarioPath = '/api/usuario' //Ruta pública
        this.middlewares()
        this.routes()
        this.conectarbs()

    }

    listen(){
        this.app.listen(this.port, () => {
            console.log(`Escuchando por el puerto ${this.port}`)
        })
    }

    middlewares(){
        this.app.use(express.static(__dirname + "/public"));
    }

    routes() {
       this.app.use(this.usuarioPath, require('../routes/usuarios'))
    }
    async conectarbs(){
        await dbConnection()
    }
}

module.exports = { Server }
