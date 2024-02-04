import { FilmsModel } from '../models/films_model.js';
import { Swapi } from '../swapi.js';
import request from 'request';

export class FilmsController {
  constructor () {
    this.Swapi = new Swapi();
    this.address = this.Swapi.api + '/films';
  }

  async getAll (req, res) {
    try {

      const api = `${this.address}`;

      const films = await new Promise((resolve, reject) => {
        request(api, { json: true }, (error, response, body) => {
          if (error) {
            reject(error);
          } else {
            console.log(error, body, response.statusCode);
            resolve(body);
          }
        });
      });

        const orderCronology = films.results.sort((a, b) => {
            const firstFilmDate = new Date(a.release_date);
            const lastFilmDate = new Date(b.release_date);

            return firstFilmDate - lastFilmDate;
        })  

        res.status(200).send(orderCronology);
    } catch (err) {
      console.log(err);
    }
  }

  async createSearchInput(req, res){
    try {
        const { search } = req.body;

        console.log(search);
        const filmsModel = new FilmsModel();
        await filmsModel.createSearchInput({ search });

        res.status(201).json({ message: 'Pesquisa cadastrada com sucesso!' });
    } catch (error) {
        console.log(error);
    }
  } 
}
