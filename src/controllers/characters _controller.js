import { Swapi } from '../swapi.js'
import request from 'request'

export class CharacterController {
  constructor () {
    this.Swapi = new Swapi()
    this.address = this.Swapi.api + '/people'
  }

  async getAll (req, res) {
    try {
      const { page = 1 } = req.query

      const api = `${this.address}?page=${page}`

      const characters = await new Promise((resolve, reject) => {
        request(api, { json: true }, (error, response, body) => {
          if (error) {
            reject(error)
          } else {
            console.log(error, body, response.statusCode)
            resolve(body)
          }
        })
      })

      return res.status(200).send(characters.results)
    } catch (err) {
      console.log(err)
    }
  }
}
