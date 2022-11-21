Hooks.on("renderChatMessage", async function(CM, init, message) {
    if(game.userId == "l43veKU7g9xyOobB")
    {
        //console.log([CM, init, message])
        try
        {
            actorID = CM.data.flags.betterrolls5e.actorId
            actor = game.actors.get(actorID)
            
            itemID = CM.data.flags.betterrolls5e.itemId
            item = actor.items.get(itemID)
        }
        catch(error){
            return
        }

        if(item.data.data.properties.fir&&actor.data._id=='XRHl8Y57HcD8VwvD')
        {
        
            let parser = new DOMParser();
            let htmlDoc = parser.parseFromString(CM.data.content, "text/html");
        
            let attackDieRolls = htmlDoc.evaluate("(//div[@class='dice-row red-rolls']//li)",htmlDoc,null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null);
            let attackDieResults = [];
            for(let i = 0; i < attackDieRolls.snapshotLength; i++){
                if(attackDieRolls.snapshotItem(i).className.includes("d20"))
                {
                    attackDieResults[i] = attackDieRolls.snapshotItem(i).innerText;
                }
            }
            vantage = CM.data.flags.betterrolls5e.params.advantage-CM.data.flags.betterrolls5e.params.disadvantage
            switch(vantage)
            {
                case 0:
                    roll = parseInt(attackDieResults[0])
                    break
                case 1:
                    roll = parseInt(Math.max(attackDieResults))
                    break
                case -1:
                    roll = parseInt(Math.min(attackDieResults))
                    break
            }
            
            misfire = item.data.data.misfire
            if (misfire == undefined)
            {
                misfire = 0
            }

            if(roll <= misfire)
            {
                const message = "Your gun has misfired";
                ChatMessage.create({speaker: ChatMessage.getSpeaker({alias: 'Remington'}), content: message})
            }
        }
    }
});

