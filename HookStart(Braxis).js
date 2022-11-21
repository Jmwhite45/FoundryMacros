Hooks.on("restCompleted", async function (actor, args) {
    if(game.userId == "3SpJ3Rcyyt6SrZfV")
    {
        if ((args.longRest == true) && (args.newDay == true) && (actor.id =='OB0jTIPLAxNfcAtW'))
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
    }
});