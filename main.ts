input.onButtonPressed(Button.A, function () {
    ray_1 = game.createSprite(1, 2)
    basic.pause(100)
    ray_1.change(LedSpriteProperty.X, 1)
    basic.pause(100)
    ray_1.change(LedSpriteProperty.X, 1)
    basic.pause(100)
    ray_1.change(LedSpriteProperty.X, 1)
})
let ray_1: game.LedSprite = null
let fighter_1 = game.createSprite(0, 2)
let fighter_2 = game.createSprite(5, 2)
fighter_2.turn(Direction.Right, 90)
basic.forever(function () {
    basic.pause(100)
    fighter_2.move(1)
})
basic.forever(function () {
    if (ray_1.isTouching(fighter_2)) {
        ray_1.delete()
        game.addScore(1)
    }
})
basic.forever(function () {
    if (fighter_2.isTouchingEdge()) {
        fighter_2.turn(Direction.Right, 190)
    }
})
