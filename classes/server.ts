import express from 'express'
import SERVER_PORT from '../dist/environment';

 class Server {

    public app: express.Application
    public port: number

    constructor(){
        this.app= express()
        this.port = SERVER_PORT;

    }
    
    start(callback :Function){

        this.app.listen(this.port,callback());

    }
}

export default Server