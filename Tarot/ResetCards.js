
let Tiles = ["CZl8rvyY9z2yD65s","UIKjGPdZkphKxIig","hTf5oIgpRY5CV7R8","754kTSnfpnhJ7rC7","mgsyJZe98vjKppQT"];
let cardPath = "worlds/btas/Decks/GVSngM56Iznbr3yA/back.jpg"


Tiles.forEach(t => {
    canvas.scene.updateEmbeddedDocuments("Tile", [{_id: t, img: cardPath, hidden: true}]);
});

canvas.scene.updateEmbeddedDocuments("Tile", [{_id: "BE5ssWtpoeV0I7Ka", hidden: false}]);
