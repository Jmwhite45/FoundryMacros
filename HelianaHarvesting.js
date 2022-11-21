function rollD(d)
{
    return Math.floor(Math.random()*d)+1
}

function ButtonControls(id,totalID, ability,chatItem)
{
    console.log("Hello World")
    let roll=0
    let actor
    if(game.user.role == 4)
    {
        actor = canvas.tokens.controlled[0].actor
    }
    else
    {
        actor = game.user.character
    }

    skill = getSkill(creatureType).substring(0,3).toLowerCase();

    prof = actor.data.data.skills[skill].prof.flat
    abil = actor.data.data.abilities[ability].mod
    roll = rollD(20)
    console.log(`[DEBUG] roll: ${roll}   ${ability}.mod: ${abil}  prof: ${prof}  Total: ${roll+prof+abil}`)
    roll = roll+prof+abil

    let contentXML = new DOMParser().parseFromString(chatItem.data.content, "text/html")
    contentXML.getElementById(id).parentNode.innerHTML = roll
    contentXML.getElementById(totalID).innerHTML = parseInt(contentXML.getElementById(totalID).innerHTML)+roll
    game.messages.filter(t=>t.id===MessID)[0].update({content: contentXML.documentElement.innerHTML})
}

async function DisplayHarvest(token)
{
    d20 = 'icons/svg/d20-grey.svg'
    d20Hover = 'icons/svg/d20-highlight.svg'

    creatureType = token.actor.labels.creatureType
    if(creatureType == undefined)
    {
        return
    }

    let id1 = Math.floor(Math.random() * 100000000);
    let id2 = id1+1;
    let id3 = id2+1


    const message = "<h2>"+token.name+"</h2>"+getSkill(creatureType)+`    
    <table>
    <tr>
        <th>Assessment Check</th>
        <th><input id='`+id1+`' src='`+d20+`' type="image" width="30" height="30" /></th>
    </tr>
    <tr>
        <th>Carving Check</th>
        <th><input id='`+id2+`' src='`+d20+`' type="image" width="30" height="30" /></th>
    </tr>
</table>
<table>
    <tr>
        <th>Total</th>
        <th><a id="`+id3+`">0</th>
    </tr>
</table>

    `;
    ChatMessage.create({speaker: ChatMessage.getSpeaker({alias: 'Harvest Check'}), content: message}).then(t => x=t);

    Hooks.on('renderChatMessage', (chatItem, html) => {
        html.find("#" + id1 + "").click(() => {  
            ButtonControls(id1,id3, "int",chatItem)
        });
        
        html.find("#" + id2 + "").click(() => {
            ButtonControls(id2,id3, "dex",chatItem)
        });
        //hover on, assesment check
        html.find("#" + id1 + "").mouseenter(()=>{
            MessID = chatItem.data._id

            let contentXML = new DOMParser().parseFromString(chatItem.data.content, "text/html")

            if(contentXML.getElementById(id1).getAttribute('src') == d20)
            {
                contentXML.getElementById(id1).setAttribute("src", d20Hover)
    
                game.messages.filter(t=>t.id===MessID)[0].update({content: contentXML.documentElement.innerHTML})

            }
        });

        //hover off, assesment check
        html.find("#" + id1 + "").mouseout(()=>{
            MessID = chatItem.data._id

            let contentXML = new DOMParser().parseFromString(chatItem.data.content, "text/html")

            if(contentXML.getElementById(id1).getAttribute('src') == d20Hover)
            {
                contentXML.getElementById(id1).setAttribute("src", d20)

                game.messages.filter(t=>t.id===MessID)[0].update({content: contentXML.documentElement.innerHTML})

            }
        });

        //hover on, Carving check
        html.find("#" + id2 + "").mouseenter(()=>{
            MessID = chatItem.data._id

            let contentXML = new DOMParser().parseFromString(chatItem.data.content, "text/html")

            if(contentXML.getElementById(id2).getAttribute('src') == d20)
            {
                contentXML.getElementById(id2).setAttribute("src", d20Hover)
    
                game.messages.filter(t=>t.id===MessID)[0].update({content: contentXML.documentElement.innerHTML})

            }
        });

        //hover off, Carving check
        html.find("#" + id2 + "").mouseout(()=>{
            MessID = chatItem.data._id

            let contentXML = new DOMParser().parseFromString(chatItem.data.content, "text/html")

            if(contentXML.getElementById(id2).getAttribute('src') == d20Hover)
            {
                contentXML.getElementById(id2).setAttribute("src", d20)

                game.messages.filter(t=>t.id===MessID)[0].update({content: contentXML.documentElement.innerHTML})

            }
        });
    });


}

function getSkill(type)
{
    type =  type.split(" ",1)[0]
    switch(type)
    {
        case "Aberration":
            return "Arcana"
        case "Beast":
            return "Survival"
        case "Celestial":
            return "Religion"
        case "Construction":
            return "Investigation"
        case "Dragon":
            return "Survival"
        case "Elemental":
            return "Arcana"
        case "Fey":
            return "Arcana"
        case "Fiend":
            return "Religion"
        case "Giant":
            return "Medicine"
        case "Humanoid":
            return "Medicine"
        case "Monstrosity":
            return "Survival"
        case "Ooze":
            return "Nature"
        case "Plant":
            return "Nature"
        case "Undead":
            return "Medicine"
        default:
            console.log("[ERROR] "+type+ " Does not exist")
            return "ERR"
        }
}


canvas.tokens.controlled.forEach(token => DisplayHarvest(token));

//.indexOf([type])>1

// switch