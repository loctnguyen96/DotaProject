const Express = require("express")
const BodyParser = require('body-parser')
const PlayerRouter = require("./player-router")
const HeroRouter = require("./hero-router")

const app = Express()

app.use('/', BodyParser.json())
app.use('/player', PlayerRouter)
app.use('/hero', HeroRouter)

app.listen(3000, function () 
{
  console.log("Running Express")
})
