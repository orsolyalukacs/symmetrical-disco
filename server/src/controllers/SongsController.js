const {Song} = require('../models')
module.exports = {
  async index (req, res) {
    try {
      const songs = await Song.findAll({
        limit: 10
      })
      res.send(songs)
      console.log(songs)
    } catch (err) {
      res.status(500).send({ // 500 Internal Server error.
        error: 'An error has occured trying to fetch the songs.'
      })
    }
  },
  async post (req, res) {
    try {
      const song = await Song.create(req.body)
      res.send(song)
      // console.log(song)
    } catch (err) {
      res.status(500).send({ // 500 Internal Server error.
        error: 'An error has occured trying to create the song.'
      })
    }
  }
}
