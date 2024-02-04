import Database from "../database.js";

export class FilmsModel {
  constructor() {
    this.db = new Database();
  }

  async createSearchInput({ search }) {
    return this.db.executeQuery(`
        INSERT INTO search_films(search) VALUES (?)
    `, [search]);
  }

  async getSearchInput(search){
    return this.db.executeQuery(`
        SELECT search FROM search_films WHERE search = ? ORDER BY id DESC;
    `, [search])
  }
}
