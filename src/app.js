import request from "request";
import routes from "./routes/charactersRoutes.js";
import express from "express";

class App {
    constructor(){
        this.app = express(); 

        this.config();

        this.routes();
    } 

    config() {
        const accessControl = (_req, res, next) => {
          res.header("Access-Control-Allow-Origin", "*");
          res.header(
            "Access-Control-Allow-Methods",
            "GET,POST,DELETE,OPTIONS,PUT,PATCH",
          );
          res.header("Access-Control-Allow-Headers", "*");
          next();
        };
    
        this.app.use(express.json()); 
        this.app.use(accessControl);
    }

    routes() {
        this.app.use(routes);
    }

    async startServer(PORT) {
        this.app.listen(PORT, () => console.log(`Starting server on port ${PORT}`));
    }
}

export { App };
