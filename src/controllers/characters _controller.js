import { Swapi } from "../swapi.js";
import request from "request";

export class CharacterController{
    constructor(){
        this.Swapi = new Swapi();
        this.address = this.Swapi.api + '/people';
    }

    async getAll(req, res){
        try {
            const currentPage = req.query.page || 1;
            let havePage = true;

            const characters = [];

            for(let page = currentPage; havePage; page++){

                const api = `${this.address}?page=${page}`;

                const response = await new Promise((resolve, reject) => {
                    request.get(api, (error, response, body) => {
                      if (error) {
                        reject(error);
                      } else {
                        resolve({ response, body });
                      }
                    });
                });

                const data = JSON.parse(response.body);

                if (data.results.length < 1) havePage = false;

                console.log(characters);
                characters.push(...data.results);
                return res.send(characters);
            }
        } catch (error) {
            console.error(error);
        }
    }
}
