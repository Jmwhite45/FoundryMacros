
var token = canvas.tokens.controlled

if(token.length >1)
{
    ui.notifications.error("Please select only 1 token then run macro again");
    return -1
}

token = token[0]

var src = "1XHEOw1hOiE7ttXu"
var items = game.actors.get(src).items

var availableItems = []
items.forEach(i => {
    var phoo = Array(i.system.quantity).fill(i)
    availableItems = availableItems.concat(phoo)
});


if(availableItems.length >2)
{
    randItem = availableItems[Math.floor(Math.random() * availableItems.length)];
    randItem.system.quantity = 1

    game.itempiles.API.addItems(game.actors.get(token.actor.id),[{"item": randItem, "quantity": 1}])
    game.itempiles.API.removeItems(game.actors.get(src),[{"item": randItem, "quantity": 1}])
}
else
{
    itemsRemain = Array.from(items)

    game.itempiles.API.addItems(game.actors.get(token.actor.id),itemsRemain)
    game.itempiles.API.removeItems(game.actors.get(src),itemsRemain)
}
