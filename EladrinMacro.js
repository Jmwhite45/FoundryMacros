const actorID = 'OB0jTIPLAxNfcAtW'

const Seasons = ['spring','summer','fall','winter']
const traits = ['You can’t stay still.','You maintain an intimidating front. It’s better to prevent fights with a show of force than to harm others.','There are no simple meals, only lavish feasts.','The worst case is the most likely to occur.']
const flaws = ['Anything worth doing is worth doing again and again.','You are stubborn. Let others change.','You trust others without a second thought.','Nothing matters to you, and you allow others to guide your actions.']
const eyes = ['Green as the fresh grass','Bright Yellow as the burning sun','soft orange as a falling leaf', 'Icey white']
const Skin = ['pale green','Pale yellow', 'Mushroom brown','frosty white']
const Hair = ['Leafy green with white lilies','Fiery Yellow','hanging down like dead branching with orange leaves','Icey blue, with black branches']

let actor = game.actors.get(actorID);

season = Math.floor(Math.random() * 4);

console.log(actor.name)
while(actor.name == 'Braxis('+Seasons[season]+')'){
    console.log(actor.name)
    console.log('Braxis('+Seasons[season]+')')
    season = Math.floor(Math.random() * 4);
}


actor.update({"img":'worlds/thalan/Tokens/pc-tokens/braxis_'+Seasons[season]+'.Avatar.webp'})
actor.update({"name":'Braxis('+Seasons[season]+')'})
actor.update({"token.img":'worlds/thalan/Tokens/pc-tokens/braxis_'+Seasons[season]+'.Token.webp'})

actor.update({"data.details.trait":traits[season]})
actor.update({"data.details.flaw":flaws[season]})

actor.update({"data.details.eyes":eyes[season]})
actor.update({"data.details.skin":Skin[season]})
actor.update({"data.details.hair":Hair[season]})


//console.log('done')

game.scenes.forEach(S => {
    S.data.tokens.forEach(T => {
        if(T.actor){
            if(T.actor.id == actorID)
                T.update({img: 'worlds/thalan/Tokens/pc-tokens/braxis_'+Seasons[season]+'.Token.webp'})
                //console.log({img: 'worlds/thalan/Tokens/pc-tokens/braxis_'+Seasons[season]+'.Token.webp'})
        }
    })
});


//K8C7fKnSBkJhb9lO
//
Hooks.on("restCompleted", async function (actor, args) {
    if ((args.longRest == true) && (args.newDay == true) && (actor.id =='ci7Y3gULS0fZRM2H'))
    {
        let roll = Math.floor(Math.random() * 20) + 1
        let save = actor.data.data.abilities.wis.save
        if((roll+save)<18){
            ui.notifications.info("Braxis has Changed (["+roll+']+'+save+'='+(roll+save)+')');
            const macro = game.macros.find(m => m.name === "HELLO WORLD"); 
            eval(macro.data.command); 
        }
        else{
            ui.notifications.info("Braxis has Saved (["+roll+']+'+save+'='+(roll+save)+')');
        }
    }
});