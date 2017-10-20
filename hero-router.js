const Express = require('express');
const router = Express.Router();



//Define a Hero constructure to create our heroes object. 
class Hero
{
	constructor({id, name, type, level})
	{
		this.id = id
		this.name = name
		this.type = type
		this.level = level
	}
}

//Create and assign hero properties into heroes object.
const heroes = 
[
	new Hero({id: 0, name: 'Axe',type:'Strength'}),
	new Hero({id: 1, name: 'Crystal Maiden', type: "Intelligent"}),
	new Hero({id: 2, name: 'Invoker', type: "Intelligent"})
	
]


//Defind our routing function

router.route('/')
.get (function(request,response)
{
  response.json(heroes);
})

.post (function(request,response)
{
  let nextId = heroes.length;
  const newHero = new Hero({id:nextId , name: request.body.name , type: request.body.type})
  request.send(newHero)
})





router.route('/:id')

.get(function(request,response)
{

  let id = request.params.id
  
  response.json(heroes[id])

})

.put(function(request,response)
{
  let id = request.params.id
  const oldHero = Hero({id:id , name: request.body.name , type: request.body.type})
  request.json(oldHero)

})

.delete(function(request,response)
{
  let id = request.params.id
  
  delete heroes[id]

  response.json('Delete sucessfully \n')


})
/*router.route('/:name')


  .all(function (request, response, next)
   {
    request.userName = parseUserName(request.params.name);
  })
  */




 /*
  .get(function (request, response) 
  {
    var userInfo = name[request.userName];
    if(userInfo){
      response.json(userInfo)
    }else{
      response.status(404).json("User not found")
    }
  })
*/


module.exports = router