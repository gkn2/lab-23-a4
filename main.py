letters = 0



def find_length(name):
    global letters
    letters = len(name)



def change_greeting(name):
    global letters
    find_length(name)
    return "Length = " + str(letters)



mySprite = sprites.create(assets.image("""mc"""), SpriteKind.player)



mySprite.say(change_greeting("Pat"))