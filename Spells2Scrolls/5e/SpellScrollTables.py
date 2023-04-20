import json

DEFAULTRESULT = {
      "type": 2,
      "weight": 1,
      "range": [], # TO ADD
      "drawn": False,
      "text": "",# TO ADD
      "img": "",# TO ADD
      "documentCollection": "my-shared-compendia.spells",
      "documentId": "",# TO ADD
      "flags": {}
    }


spellFile = 'my shared compendiums\spells5e.db'

spells = []
for i in range(10):
    spells.append([])

with open(spellFile, encoding="UTF-8") as file:
    for s in file:
        spell = json.loads(s)

        lv = spell["system"]["level"]

        spells[lv].append(spell)

c = 0
for s in spells:
    with open("BlankRollTable.json", "r+") as d:
        rt = json.loads(d.read())
        rt["name"] = f"Spell Scrolls ({c})"

    r = 1
    for spell in s:
        result = DEFAULTRESULT
        result["range"] = [r,r]
        result["text"] = spell["name"]
        result["img"] = spell["img"]
        result["documentId"] = spell["_id"]
        
        rt["results"].append(result.copy())
        r+=1
    
    rt["formula"] = f"1d{r-1}"

    rtText = json.dumps(rt)
    
    # Writing to sample.json
    with open(f"Roll Tables/SpellsSpellScrollsRollTable_{c}.json", "w") as outfile:
        outfile.write(rtText)

    c+=1


