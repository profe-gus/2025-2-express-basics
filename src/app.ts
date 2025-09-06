import express, { Application } from "express";
import router from './routes/api.route';

export class App{

    private app: Application;

    constructor(){
        this.app = express();
        this.settings();
        this.middlewares();
        this.routes();

    }

    middlewares(){
        this.app.use(express.urlencoded({ extended: false}));
        this.app.use(express.json());
    }

    settings(){
        this.app.set('port', process.env.PORT || 3000);
    }

    routes(){
        this.app.use('/', router)
    }

    async listen(){
        this.app.listen(this.app.get('port'));
        console.log(`Server running in port: ${this.app.get('port')}`)
    }
}