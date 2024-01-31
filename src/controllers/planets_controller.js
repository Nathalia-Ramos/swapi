import { Swapi } from '../swapi.js';
import request from 'request';

export class PlanetController {
  constructor () {
    this.Swapi = new Swapi();
    this.address = this.Swapi.api + '/planets';
  }

  async getAll (req, res) {
    try {
      const { page = 1 } = req.query;

      const api = `${this.address}?page=${page}`;

      const planets = await new Promise((resolve, reject) => {
        request(api, { json: true }, (error, response, body) => {
          if (error) {
            reject(error);
          } else {
            console.log(error, body, response.statusCode);
            resolve(body);
          }
        });
      });
        planets.results.sort((a, b) => parseFloat(b.diameter) - parseFloat(a.diameter));
        res.status(200).send(planets.results);
    } catch (err) {
      console.log(err);
    }
  }
}
