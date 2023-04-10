const WEEKS = 1

let dice = (die, mod) => Math.floor(Math.random() * die) + 1 + mod
let non = () => dice(0, -1)
let common = () => dice(51, 49)
let uncommon = () => dice(400, 100)
let rare = () => dice(4500, 500)
let veryRare = () => dice(45000, 5000)

game.actors.get("q9l283Uwu4Q8eSkH").items.filter(i => i.system.price.value == 0).forEach(j => {
	//console.log(j)
        let rarity = j.system.rarity
        let func = non
        switch (rarity) {
            case "common":
                func = common
                break;
            case "uncommon":
                func = uncommon
                break;
            case "rare":
                func = rare
                break;
            case "veryRare":
                func = veryRare
                break;
            default:
                func = non
		console.log(j)
        }
	var NuP = Math.max(...Array.from({ length: WEEKS }, () => func()))
	console.log(NuP)
        j.update({"system.price.value": NuP, "system.quantity": 99999})
})