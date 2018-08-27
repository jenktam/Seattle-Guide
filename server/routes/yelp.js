const router  = require('express').Router()
const axios = require('axios')

router.get('/', (req, res) => {
    res.send(process.env.SECRET_KEY)
})
router.get('/:latitude/:longitude', (req, res, next) => {

    const yelpInstance = axios.create({
        baseURL: 'https://api.yelp.com/v3',
        timeout: 1000,
        headers: { 'Authorization': `Bearer ${process.env.YELP_API_KEY}` }
    })


    // yelpInstance.get(`/transactions/delivery/search?term=food&latitude=${req.params.latitude}&longitude=${req.params.longitude}`)
    yelpInstance.get(`/businesses/search?term=plants&latitude=${req.params.latitude}&longitude=${req.params.longitude}`)
    .then((result) => {
        res.send(result.data)
    })
    .catch((err) => {
        console.error(err)
    })
})

module.exports = router
