canvas.tokens.controlled.forEach(e => {
    var actor = e.actor
    var currency = actor.system.currency
    var items = actor.items
    var total = 0
    
    total = (currency['pp']*10)+(currency['gp'])+(currency['sp']/10)+(currency['cp']/100)
    
    items.forEach(i => {
        var quantity = i.quantity
        var price = i.price
        var rarity = i.rarity

        if (isNaN(quantity)) quantity = 1;
        if (isNaN(price)) price = 0;

        if(price == 0)
        {
            console.log(rarity)
            switch(rarity)
            {
                case 'common': price = 75
                case 'uncommon': price = 300
                case 'rare': price = 2750
                case 'very rare': price = 27500
                case 'legendary': price = 50001
            }
        }

        ItemPrice = quantity*price
    })
    
    console.log(`${actor.name}: ${total}`)
})