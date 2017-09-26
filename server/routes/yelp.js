const router  = require('express').Router()
var Yelp      = require('yelpv3')

var yelp = new Yelp({
  app_id: process.env.YELP_CLIENT_ID,
  app_secret: process.env.YELP_CLIENT_SECRET
})

router.get('/:latitude/:longitude', (req, res, next) => {
    yelp.search({
        term: 'food',
        latitude: req.params.latitude,
        longitude: req.params.longitude,
        // limit: 5,
        radius: 1000,
    })
    .then((data) => {
        res.send(data)
    })
    .catch((err) => {
        console.error(err)
    })
})

module.exports = router
