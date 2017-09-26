const express           = require('express')
const app               = express()
const bodyParser        = require('body-parser')
const volleyball        = require('volleyball')
const port              = process.env.PORT || 8080
const path              = require('path')
require('env2')('.env') // loads all entries into process.env


// Middleware
app.use(express.static(path.join(__dirname, '../public')))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(volleyball)

// Routes
app.use('/api', require('./routes'))

app.use( (err, req, res, next) => {
  console.error(err)
  console.error(err.stack)
  res.status(err.status || 500).send(err.message || 'Internal server error')
})

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'))
})

// Connect to Server
app.listen(port, () => {
  console.log(`Server is listening on http://localhost:${port}!`)
})
