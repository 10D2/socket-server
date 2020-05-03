import express from 'express'
import SERVER_PORT from '../global/environment';
import socketIO from 'socket.io'
import http from 'http'

// Importar los sockets

import * as socket from '../sockets/sockets'



class Server {

    private static _instance: Server


    public app: express.Application
    public port: number

    public io: socketIO.Server
    private httpServer: http.Server

    private constructor() {
        this.app = express()
        this.port = SERVER_PORT;

        this.httpServer = new http.Server(this.app)
        // Config io
        this.io = socketIO(this.httpServer)
        this.escucharSockets()
    }

    public static get instance(){

        return this._instance ||(this._instance = new this())
    }


    // Escuchar sockets
    private escucharSockets() {
        console.log('Escuchando conexiones - sockets-SERVER')

        this.io.on('connection', cliente => {

            //Conectar cliente

            socket.conectarCliente(cliente, this.io)
        
            //Configurar Usuario
            socket.configurarUsuario(cliente, this.io)

            //Obtener usuarios activos
            socket.obtenerUsuarios(cliente, this.io)

            //Mensajes
            socket.mensaje(cliente, this.io)
            // desconectar
            socket.desconectar(cliente, this.io)

           
        })
    }

    start(callback: Function) {
        this.httpServer.listen(this.port, callback()); // cambio app.listen por http.listen
    }
}

export default Server