userCode = "U2FQ5O3tamQ5ugOA"
if(userCode == game.userId)
{
    rootFolderID = "vb5IFK7XlmOOLJTJ"
    owners = ["3SpJ3Rcyyt6SrZfV"]

    frontier = [game.folders.get(rootFolderID)]
    while(frontier.length >0)
    {
        f = frontier.shift()
        
        f.content.forEach(i =>{
            perm = {"default": 2}
            owners.forEach(p =>{
                perm[p] = 3
            })
            i.update({"permission": perm})
        })

        if(typeof f.children !== 'undefined') 
        {
            f.children.forEach(g =>{
                frontier.push(g)
            })
        }

    }
}
