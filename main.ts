let letters = 0
function find_length(name: string) {
    
    letters = name.length
}

function change_greeting(name: string) {
    
    find_length(name)
    return "Length = " + ("" + letters)
}

let mySprite = sprites.create(assets.image`mc`, SpriteKind.Player)
mySprite.say(change_greeting("Pat"))
