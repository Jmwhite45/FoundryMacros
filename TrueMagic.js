//varis: kJAtBTeYbc58s4ds
//Talib: lwv0UaF4HAXxHFnf
//test: 5AyekF2iexoT4BZ3

let known = []
let temp = game.actors.get("5AyekF2iexoT4BZ3").items.filter(t => t.name.toLowerCase().search("(true)")>0 && t.data.type == 'spell')
temp.forEach(obj => known.push(obj.name))

ret = ''
let last = -1
game.items.filter(t => t.name.toLowerCase().search("(true)")>0 && t.data.data.description.value.toLowerCase().search("bard")+t.data.data.description.value.toLowerCase().search("oracle")>0).sort((a,b) => (a.data.data.level>b.data.data.level)? 1:-1).forEach(s =>{
    if(!(known.includes(s.name)))
    {
        if (last<s.data.data.level){
            ret+="\n\n"+s.data.data.level+" level Spells\n"
            last = s.data.data.level
        }
        ret+="@Item["+s.data._id+"]{"+s.name+"}"+" "+s.data.data.school+"("+s.data.data.level+")\n"
    }
})

console.log(ret)