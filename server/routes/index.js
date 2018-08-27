const router    = require('express').Router()
const yelp      = require('./yelp')

require('dotenv').config()

router.use('/yelp', yelp)

// Handles errors
router.use( (req, res, next) => {
  const err = new Error('Not found.')
  err.status = 404
  next(err)
})

module.exports = router
