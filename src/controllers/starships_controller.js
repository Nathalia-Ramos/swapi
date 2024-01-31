import { Swapi } from '../swapi.js';
import request from 'request';

export class starshipController {
  constructor () {
    this.Swapi = new Swapi();
    this.address = this.Swapi.api + '/starships';
  }

  async getAll (req, res) {
    try {
      const { page = 1 } = req.query;

      const api = `${this.address}?page=${page}`;

      const starships = await new Promise((resolve, reject) => {
        request(api, { json: true }, (error, response, body) => {
          if (error) {
            reject(error);
          } else {
            console.log(error, body, response.statusCode);
            resolve(body);
          }
        });
    });
        starships.results.sort((a, b) => a.name.localeCompare(b.name));
        res.status(200).send(starships.results);
    } catch (err) {
      console.log(err);
    }
  }
}
