const Sequelize = require('sequelize')
const {Song} = require('../models')
module.exports = {
  async index (req, res) {
    try {
      let songs = null
      const search = req.query.search
      if (search) {
        if (search) {
          songs = await Song.findAll({
            where: {
              [Sequelize.Op.or]: [
                {title: {[Sequelize.Op.like]: '%' + search + '%'}},
                {album: {[Sequelize.Op.like]: '%' + search + '%'}},
                {genre: {[Sequelize.Op.like]: '%' + search + '%'}},
                {artist: {[Sequelize.Op.like]: '%' + search + '%'}}
                // etc.
              ]
            }
          })
        }
      } else {
        songs = await Song.findAll({
          limit: 10
        })
      }
      res.send(songs)
    } catch (err) {
      res.status(500).send({
        error: 'An error has occured trying to fetch the songs.'
      })
    }
  },
  async show (req, res) {
    try {
      const song = await Song.findById(req.params.songId)
      res.send(song)
    } catch (err) {
      res.status(500).send({
        error: 'An error has occured trying to fetch the song.'
      })
    }
  },
  async post (req, res) {
    try {
      const song = await Song.create(req.body)
      res.send(song)
    } catch (err) {
      res.status(500).send({
        error: 'An error has occured trying to create the song.'
      })
    }
  },
  async put (req, res) {
    try {
      const song = await Song.update(req.body, {
        where: {
          id: req.params.songId
        }
      })
      res.send(song)
    } catch (err) {
      res.status(500).send({
        error: 'An error has occured trying to update the song.'
      })
    }
  }
}
