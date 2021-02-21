input.onButtonPressed(Button.A, function () {
    ray_1 = game.createSprite(1, 2)
    ray_1.change(LedSpriteProperty.X, 1)
    basic.pause(100)
    ray_1.change(LedSpriteProperty.X, 1)
    basic.pause(100)
    ray_1.change(LedSpriteProperty.X, 1)
})
let ray_1: game.LedSprite = null
let fighter_1 = game.createSprite(0, 2)
fighter_1 = game.createSprite(5, 2)
