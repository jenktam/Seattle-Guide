const router    = require('express').Router()
const yelp      = require('./yelp')

router.use('/yelp', yelp)

router.use( (req, res, next) => {
  const err = new Error('Not found.')
  err.status = 404
  next(err)
})

module.exports = router
