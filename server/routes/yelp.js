const router  = require('express').Router()
var Yelp      = require('yelpv3')

var yelp = new Yelp({
  app_id: process.env.YELP_CLIENT_ID,
  app_secret: process.env.YELP_CLIENT_SECRET
})

router.get('/', (req, res, next) => {
    yelp.search({term: 'food', location: '98107', limit: 1})
    .then((data) => {
        res.send(data)
    })
    .catch((err) => {
        console.error(err)
    })
})

module.exports = router
