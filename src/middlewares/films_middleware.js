import { FilmsModel } from "../models/films_model.js";

export class FilmsMiddleware {
  constructor() {
    this.validateSearch = this.validateSearch.bind(this);
  }

  async validateSearch(req, res, next) {
    try {
      const { search } = req.body;
      const filmsModel = new FilmsModel();
      const searchVerify = await filmsModel.getSearchInput(search);

      if (searchVerify.length > 0) {
        return res.status(400).json({ message: `O ${search} já existe no nosso sistema` });
      }

      return next();
    } catch (error) {
      console.log(error);
      return res.status(400).json({ message: 'Erro ao validar o parâmetro \'search\'.' });
    }
  }
}
