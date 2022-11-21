//pathfinder

canvas.tokens.controlled.forEach(t => {
    let levels = ["oth","1st","2nd", "3rd","4th","5th","6th","7th","8th","9th"]
    let costs = [5,10,40,90,160,250,360,490,640,810]
    let actor = t.actor
    let spellbookUsage = actor.data.data.attributes.spells.usedSpellbooks

    spellbookUsage.forEach(book =>{
        let spells = actor.items.filter(s => s.type == "spell" && s.data.data.spellbook == book)
        let KnownSpells = []

        spells.forEach(spell => {
            let src = spell.data.flags.core.sourceId.replace('Compendium.', '')
            KnownSpells.push({level: spell.spellLevel, desc: `<p>@Compendium[${src}]{${spell.name}}</p>`})
        });

        let desc = ""
        let cost = 15
        for (let i = 0; i < 9; i++) {
            if(KnownSpells.filter(spell =>spell.level == i).length >0)
            {
                desc += `<br><p><strong>${levels[i]}-level</strong></p>`
                KnownSpells.filter(spell =>spell.level == i).forEach(s=>{
                    desc += s.desc
                    cost += costs[i]*1.5
                });
            }
          }

       Item.create({name: `${actor.name}'s Spellbook- ${book}`, type: "loot", img: "systems/pf1/icons/items/inventory/book-purple.jpg", "data.description.value": desc, "data.description.unidentified": "<p>This Appears to be a spellbook</p>", "data.identified": false, "data.unidentified.name": "Unidentified spellbook","data.unidentified.price": 15, "data.weight": 3, "data.price": cost})
    });

});