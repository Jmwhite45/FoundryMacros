
async function func() {

let Tiles = ["CZl8rvyY9z2yD65s","UIKjGPdZkphKxIig","hTf5oIgpRY5CV7R8","754kTSnfpnhJ7rC7","mgsyJZe98vjKppQT"];
let cardPath = "worlds/btas/Decks/GVSngM56Iznbr3yA/back.jpg"

await game.scenes.get("Q27zMyvVCd6TuIm9").data.tiles.get("BE5ssWtpoeV0I7Ka")._object.play(1)

setTimeout(function(){
    game.scenes.get("Q27zMyvVCd6TuIm9").data.tiles.get("BE5ssWtpoeV0I7Ka")._object.play(0)

    Tiles.forEach(t => {
        canvas.scene.updateEmbeddedDocuments("Tile", [{_id: t, hidden: false}]);
    });
    
    canvas.scene.updateEmbeddedDocuments("Tile", [{_id: "BE5ssWtpoeV0I7Ka", hidden: true}]);
}, 38000);

}
func()

