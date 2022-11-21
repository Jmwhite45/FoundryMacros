Hooks.on("messageBetterRolls", async function(CustomItemRoll, CM) {
    if(game.userId == 'knwqmNcwNTGuLZmA')
    {
        //console.log([CustomItemRoll, CM])

        //console.log([CustomItemRoll._item.data.type,CustomItemRoll.actorId])

        if(CustomItemRoll._item.data.type == "spell"&&CustomItemRoll.actorId=='l3hgIXa4fX8NTRjS')
        {
            //console.log([CustomItemRoll.params.consumeSpellLevel,CustomItemRoll.params.slotLevel])
            if ((CustomItemRoll.params.consumeSpellLevel!=false) && (CustomItemRoll.params.slotLevel != null))
            {
                await new Promise(r => setTimeout(r, 500));
                const macro = game.macros.find(m => m.name === "Roll Wild Magic Surge"); 
                eval(macro.data.command); 
            }
        }
    }
});