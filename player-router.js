const Express = require('express')
const router = Express.Router()

class Player
{
	constructor({id, name, level})
	{
		this.id = id
		this.name = name
		this.level = level
	}
}

let players = [new Player({id: 0, name: "Loc", level: 6540}),
							 new Player({id: 1, name: "Nick", level: 3300})]

router.route("/")
.get(function(request, response)
{
	response.send(players)
})
.post(function(request, response)
{
	const index = players.length
	const player = new Player({id: index, name: request.body.name, level: 1})

	players[index] = player

	response.send(player)
})

router.route("/:id")
.get(function(request, response)
{
	const id = request.params.id

	response.send(players[id])
})
.delete(function(request, response)
{
	const id = request.params.id
	delete players[id]
	response.send("Delete success...")
	response.end()
})
.put(function(request, response)
{
	const player = new Player({id: request.body.id, name: request.body.name, level: request.body.level})

	players[player] = player

	response.send(player)
})

module.exports = router

