
let Tiles = ["CZl8rvyY9z2yD65s","UIKjGPdZkphKxIig","hTf5oIgpRY5CV7R8","754kTSnfpnhJ7rC7","mgsyJZe98vjKppQT"];
let cardPath = "worlds/btas/Decks/GVSngM56Iznbr3yA/"
let card = ["The-Chariot.jpg","Strength.jpg","Justice.jpg","Judgement.jpg","The-World.jpg"]

for(let t of Tiles)
{
    let tile = game.scenes.get("Q27zMyvVCd6TuIm9").data.tiles.get(t)

    if(tile.data.img == cardPath.concat('', "back.jpg"))
    {
        let cardNum = Tiles.indexOf(t)
        console.log(cardNum)
        canvas.scene.updateEmbeddedDocuments("Tile", [{_id: t, img: cardPath.concat('', card[cardNum])}]);
        break;
    }
}
