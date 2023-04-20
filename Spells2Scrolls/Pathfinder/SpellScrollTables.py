import json

DEFAULTRESULT = {
      "type": 2,
      "weight": 1,
      "range": [], # TO ADD
      "drawn": False,
      "text": "",# TO ADD
      "img": "",# TO ADD
      "documentCollection": "", #TO ADD
      "documentId": "",# TO ADD
      "flags": {}
    }

SKIPSPELLS = ("Fey Blight", "Fey Boon")


spellFile = 'spells.db'
itemFiles = [("Potion","pf1-potions.db",3),("Scroll","pf1-scrolls.db",9),("Wand","pf1-wands.db",4)]
spellLookUp = {}

with open(spellFile, encoding="UTF-8") as file:
    lines = file.readlines()
    for s in lines:
        spell = json.loads(s)

        try:
            lv = spell["system"]["level"]
        except:
            try:
                lv= spell["system"]["learnedAt"]["class"][0][1]
            except:
                continue

        spellLookUp[spell["name"]] = lv
file.close()

for itemFile in itemFiles:
    with open(itemFile[1]) as file:
        spells = []
        for i in range(10):
            spells.append([])

        lines = file.readlines()
        for i in lines:
            item = json.loads(i)
            OrgSpell = item["name"].replace(itemFile[0]+" of ", "")
            if OrgSpell in SKIPSPELLS:
                continue
            lv = spellLookUp[OrgSpell]
            spells[lv].append(item)
        file.close

        c = 0
        for s in spells:
            if c>itemFile[2]:
                c+=1
                continue
                
            with open("BlankRollTable.json", "r+") as d:
                rt = json.loads(d.read())
                rt["name"] = f"Spell {itemFile[0]}s ({c})"

            r = 1
            for spell in s:
                result = DEFAULTRESULT
                result["range"] = [r,r]
                result["text"] = spell["name"]
                result["img"] = spell["img"]
                result["documentId"] = spell["_id"]
                result["documentCollection"] = "world."+itemFile[1].replace(".db","")

                rt["results"].append(result.copy())
                r+=1

            rt["formula"] = f"1d{r-1}"

            rtText = json.dumps(rt)

            # Writing to sample.json
            with open(f"Roll Tables/{itemFile[0]}s/Spell{itemFile[0]}sRollTable_{c}.json", "w") as outfile:
                outfile.write(rtText)
            outfile.close()

            c+=1