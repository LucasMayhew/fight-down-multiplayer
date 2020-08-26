namespace SpriteKind {
    export const theplayer1 = SpriteKind.create()
    export const theplayer2 = SpriteKind.create()
    export const nijua = SpriteKind.create()
    export const niga_star = SpriteKind.create()
}
scene.onOverlapTile(SpriteKind.theplayer2, sprites.dungeon.hazardLava0, function (sprite, location) {
    tiles.placeOnRandomTile(sprite, myTiles.tile7)
    scene.cameraFollowSprite(player1)
})
sprites.onOverlap(SpriteKind.niga_star, SpriteKind.Projectile, function (sprite, otherSprite) {
    projectile2 = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 4 4 4 4 4 . . . . . . 
        . . . . 4 3 3 3 3 3 4 . . . . . 
        . . . . 4 3 3 3 3 3 4 . . . . . 
        . . . . 4 3 3 3 3 3 4 . . . . . 
        . . . . 4 3 3 3 3 3 4 . . . . . 
        . . . . 4 3 3 3 3 3 4 . . . . . 
        . . . . . 4 4 4 4 4 . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, sprite, -50, 0)
    projectile2.setFlag(SpriteFlag.AutoDestroy, false)
    projectile2.lifespan = 250
    projectile2 = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 4 4 4 4 4 . . . . . . 
        . . . . 4 3 3 3 3 3 4 . . . . . 
        . . . . 4 3 3 3 3 3 4 . . . . . 
        . . . . 4 3 3 3 3 3 4 . . . . . 
        . . . . 4 3 3 3 3 3 4 . . . . . 
        . . . . 4 3 3 3 3 3 4 . . . . . 
        . . . . . 4 4 4 4 4 . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, sprite, 50, 0)
    projectile2.setFlag(SpriteFlag.AutoDestroy, false)
    projectile2.lifespan = 250
    projectile2 = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 4 4 4 4 4 . . . . . . 
        . . . . 4 3 3 3 3 3 4 . . . . . 
        . . . . 4 3 3 3 3 3 4 . . . . . 
        . . . . 4 3 3 3 3 3 4 . . . . . 
        . . . . 4 3 3 3 3 3 4 . . . . . 
        . . . . 4 3 3 3 3 3 4 . . . . . 
        . . . . . 4 4 4 4 4 . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, sprite, 0, -50)
    projectile2.setFlag(SpriteFlag.AutoDestroy, false)
    projectile2.lifespan = 250
    projectile2 = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 4 4 4 4 4 . . . . . . 
        . . . . 4 3 3 3 3 3 4 . . . . . 
        . . . . 4 3 3 3 3 3 4 . . . . . 
        . . . . 4 3 3 3 3 3 4 . . . . . 
        . . . . 4 3 3 3 3 3 4 . . . . . 
        . . . . 4 3 3 3 3 3 4 . . . . . 
        . . . . . 4 4 4 4 4 . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, sprite, 0, 50)
    projectile2.setFlag(SpriteFlag.AutoDestroy, false)
    projectile2.lifespan = 250
    music.powerUp.play()
    sprite.destroy(effects.fire, 5000)
    otherSprite.destroy()
})
controller.player2.onButtonEvent(ControllerButton.A, ControllerButtonEvent.Pressed, function () {
    if (!(playerslet >= 2)) {
        doSomething2()
    } else {
        if (player2.isHittingTile(CollisionDirection.Bottom)) {
            for (let index = 0; index < 3; index++) {
                for (let index = 0; index < 16; index++) {
                    player2.y += -1
                    pause(1)
                }
            }
        } else {
            if (player2.isHittingTile(CollisionDirection.Left)) {
                for (let index = 0; index < 3; index++) {
                    for (let index = 0; index < 16; index++) {
                        player2.y += -1
                        player2.x += 1
                        pause(1)
                    }
                }
            } else {
                if (player2.isHittingTile(CollisionDirection.Right)) {
                    for (let index = 0; index < 3; index++) {
                        for (let index = 0; index < 16; index++) {
                            player2.y += -1
                            player2.x += -1
                            pause(1)
                        }
                    }
                }
            }
        }
    }
})
sprites.onOverlap(SpriteKind.niga_star, SpriteKind.theplayer2, function (sprite, otherSprite) {
    if (p2_move) {
        music.powerUp.play()
        sprite.destroy(effects.fire, 5000)
        info.player2.changeScoreBy(1)
    } else {
        music.powerDown.play()
        info.player2.changeLifeBy(-1)
        sprite.destroy()
    }
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Projectile, function (sprite, otherSprite) {
    projectile2 = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 4 4 4 4 4 . . . . . . 
        . . . . 4 3 3 3 3 3 4 . . . . . 
        . . . . 4 3 3 3 3 3 4 . . . . . 
        . . . . 4 3 3 3 3 3 4 . . . . . 
        . . . . 4 3 3 3 3 3 4 . . . . . 
        . . . . 4 3 3 3 3 3 4 . . . . . 
        . . . . . 4 4 4 4 4 . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, sprite, -50, 0)
    projectile2.setFlag(SpriteFlag.AutoDestroy, false)
    projectile2.lifespan = 250
    projectile2 = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 4 4 4 4 4 . . . . . . 
        . . . . 4 3 3 3 3 3 4 . . . . . 
        . . . . 4 3 3 3 3 3 4 . . . . . 
        . . . . 4 3 3 3 3 3 4 . . . . . 
        . . . . 4 3 3 3 3 3 4 . . . . . 
        . . . . 4 3 3 3 3 3 4 . . . . . 
        . . . . . 4 4 4 4 4 . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, sprite, 50, 0)
    projectile2.setFlag(SpriteFlag.AutoDestroy, false)
    projectile2.lifespan = 250
    projectile2 = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 4 4 4 4 4 . . . . . . 
        . . . . 4 3 3 3 3 3 4 . . . . . 
        . . . . 4 3 3 3 3 3 4 . . . . . 
        . . . . 4 3 3 3 3 3 4 . . . . . 
        . . . . 4 3 3 3 3 3 4 . . . . . 
        . . . . 4 3 3 3 3 3 4 . . . . . 
        . . . . . 4 4 4 4 4 . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, sprite, 0, -50)
    projectile2.setFlag(SpriteFlag.AutoDestroy, false)
    projectile2.lifespan = 250
    projectile2 = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 4 4 4 4 4 . . . . . . 
        . . . . 4 3 3 3 3 3 4 . . . . . 
        . . . . 4 3 3 3 3 3 4 . . . . . 
        . . . . 4 3 3 3 3 3 4 . . . . . 
        . . . . 4 3 3 3 3 3 4 . . . . . 
        . . . . 4 3 3 3 3 3 4 . . . . . 
        . . . . . 4 4 4 4 4 . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, sprite, 0, 50)
    projectile2.setFlag(SpriteFlag.AutoDestroy, false)
    projectile2.lifespan = 250
    music.powerUp.play()
    sprite.destroy(effects.fire, 5000)
    otherSprite.destroy()
})
sprites.onOverlap(SpriteKind.nijua, SpriteKind.theplayer2, function (sprite, otherSprite) {
    if (p2_move) {
        music.powerUp.play()
        sprite.destroy(effects.fire, 5000)
        info.changeScoreBy(1)
    }
})
sprites.onOverlap(SpriteKind.nijua, SpriteKind.Projectile, function (sprite, otherSprite) {
    projectile2 = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 4 4 4 4 4 . . . . . . 
        . . . . 4 3 3 3 3 3 4 . . . . . 
        . . . . 4 3 3 3 3 3 4 . . . . . 
        . . . . 4 3 3 3 3 3 4 . . . . . 
        . . . . 4 3 3 3 3 3 4 . . . . . 
        . . . . 4 3 3 3 3 3 4 . . . . . 
        . . . . . 4 4 4 4 4 . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, sprite, -50, 0)
    projectile2.setFlag(SpriteFlag.AutoDestroy, false)
    projectile2.lifespan = 250
    projectile2 = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 4 4 4 4 4 . . . . . . 
        . . . . 4 3 3 3 3 3 4 . . . . . 
        . . . . 4 3 3 3 3 3 4 . . . . . 
        . . . . 4 3 3 3 3 3 4 . . . . . 
        . . . . 4 3 3 3 3 3 4 . . . . . 
        . . . . 4 3 3 3 3 3 4 . . . . . 
        . . . . . 4 4 4 4 4 . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, sprite, 50, 0)
    projectile2.setFlag(SpriteFlag.AutoDestroy, false)
    projectile2.lifespan = 250
    projectile2 = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 4 4 4 4 4 . . . . . . 
        . . . . 4 3 3 3 3 3 4 . . . . . 
        . . . . 4 3 3 3 3 3 4 . . . . . 
        . . . . 4 3 3 3 3 3 4 . . . . . 
        . . . . 4 3 3 3 3 3 4 . . . . . 
        . . . . 4 3 3 3 3 3 4 . . . . . 
        . . . . . 4 4 4 4 4 . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, sprite, 0, -50)
    projectile2.setFlag(SpriteFlag.AutoDestroy, false)
    projectile2.lifespan = 250
    projectile2 = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 4 4 4 4 4 . . . . . . 
        . . . . 4 3 3 3 3 3 4 . . . . . 
        . . . . 4 3 3 3 3 3 4 . . . . . 
        . . . . 4 3 3 3 3 3 4 . . . . . 
        . . . . 4 3 3 3 3 3 4 . . . . . 
        . . . . 4 3 3 3 3 3 4 . . . . . 
        . . . . . 4 4 4 4 4 . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, sprite, 0, 50)
    projectile2.setFlag(SpriteFlag.AutoDestroy, false)
    projectile2.lifespan = 250
    music.powerUp.play()
    sprite.destroy(effects.fire, 5000)
    otherSprite.destroy()
})
sprites.onOverlap(SpriteKind.niga_star, SpriteKind.theplayer1, function (sprite, otherSprite) {
    if (p1_move) {
        music.powerUp.play()
        sprite.destroy(effects.fire, 5000)
        info.changeScoreBy(1)
    } else {
        music.powerDown.play()
        info.changeLifeBy(-1)
        sprite.destroy()
    }
})
function doSomething () {
    if (player1.tileKindAt(TileDirection.Center, myTiles.tile3)) {
        playerslet += 1
        controller.player1.moveSprite(player1, 0, 0)
        player1.setFlag(SpriteFlag.Ghost, true)
        player1.setFlag(SpriteFlag.Invisible, true)
        sprites.setDataBoolean(player1, "catty", true)
        sprites.setDataBoolean(player1, "mowe", false)
    } else if (player1.tileKindAt(TileDirection.Center, myTiles.tile4)) {
        playerslet += 1
        controller.player1.moveSprite(player1, 0, 0)
        player1.setFlag(SpriteFlag.Ghost, true)
        player1.setFlag(SpriteFlag.Invisible, true)
        sprites.setDataBoolean(player1, "catty", false)
        sprites.setDataBoolean(player1, "mowe", true)
    }
}
controller.player1.onButtonEvent(ControllerButton.A, ControllerButtonEvent.Pressed, function () {
    if (!(playerslet >= 2)) {
        doSomething()
    } else {
        if (player1.isHittingTile(CollisionDirection.Bottom)) {
            for (let index = 0; index < 3; index++) {
                for (let index = 0; index < 16; index++) {
                    player1.y += -1
                    pause(1)
                }
            }
        } else {
            if (player1.isHittingTile(CollisionDirection.Left)) {
                for (let index = 0; index < 3; index++) {
                    for (let index = 0; index < 16; index++) {
                        player1.y += -1
                        player1.x += 1
                        pause(1)
                    }
                }
            } else {
                if (player1.isHittingTile(CollisionDirection.Right)) {
                    for (let index = 0; index < 3; index++) {
                        for (let index = 0; index < 16; index++) {
                            player1.y += -1
                            player1.x += -1
                            pause(1)
                        }
                    }
                }
            }
        }
    }
})
scene.onOverlapTile(SpriteKind.theplayer1, sprites.dungeon.hazardLava0, function (sprite, location) {
    tiles.placeOnRandomTile(sprite, myTiles.tile7)
    scene.cameraFollowSprite(player2)
})
info.player1.onLifeZero(function () {
    info.player1.setLife(3)
    tiles.placeOnRandomTile(player1, myTiles.tile7)
    scene.cameraFollowSprite(player2)
})
sprites.onOverlap(SpriteKind.nijua, SpriteKind.theplayer1, function (sprite, otherSprite) {
    if (p1_move) {
        music.powerUp.play()
        sprite.destroy(effects.fire, 5000)
        info.changeScoreBy(1)
    }
})
info.player2.onLifeZero(function () {
    info.player2.setLife(3)
    tiles.placeOnRandomTile(player2, myTiles.tile7)
    scene.cameraFollowSprite(player1)
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.theplayer2, function (sprite, otherSprite) {
    if (p2_move) {
        music.powerUp.play()
        sprite.destroy(effects.fire, 5000)
        info.player2.changeScoreBy(1)
    } else {
        music.powerDown.play()
        info.player2.changeLifeBy(-1)
        sprite.destroy()
    }
})
function doSomething2 () {
    if (player2.tileKindAt(TileDirection.Center, myTiles.tile3)) {
        playerslet += 1
        controller.player2.moveSprite(player2, 0, 0)
        player2.setFlag(SpriteFlag.Ghost, true)
        player2.setFlag(SpriteFlag.Invisible, true)
        sprites.setDataBoolean(player2, "catty", true)
        sprites.setDataBoolean(player2, "mowe", false)
    } else if (player2.tileKindAt(TileDirection.Center, myTiles.tile4)) {
        playerslet += 1
        controller.player2.moveSprite(player2, 0, 0)
        player2.setFlag(SpriteFlag.Ghost, true)
        player2.setFlag(SpriteFlag.Invisible, true)
        sprites.setDataBoolean(player2, "catty", false)
        sprites.setDataBoolean(player2, "mowe", true)
    }
}
controller.player1.onButtonEvent(ControllerButton.B, ControllerButtonEvent.Pressed, function () {
	
})
function start () {
    for (let value of tiles.getTilesByType(myTiles.tile7)) {
        if (sprites.readDataBoolean(player1, "catty")) {
            player1.setImage(img`
                . . . . . 4 4 . . 4 4 . . . . . 
                . . . . . 4 4 . . 4 4 . . . . . 
                . . . . . 4 4 4 4 4 4 . . . . . 
                . . . . . e f 4 4 f e . . . . . 
                . . . . . 4 f 4 4 f 4 . . . . . 
                . . . . . e 4 4 4 4 e . . . . . 
                . . . . . . 4 4 4 4 . . . . . . 
                . . . . 4 4 4 1 1 4 4 4 . . . . 
                . . . 4 . 4 1 1 1 1 4 . 4 . . . 
                . . . 4 . 4 1 1 1 1 4 . 4 . . . 
                . . . 4 . 4 1 1 1 1 4 . 4 . . . 
                . . . . . 4 4 1 1 4 4 . . . . . 
                . 1 4 1 4 4 4 4 4 4 4 . . . . . 
                . . . . . 4 . . . . 4 . . . . . 
                . . . . . 4 . . . . 4 . . . . . 
                . . . . 4 4 . . . . 4 4 . . . . 
                `)
            player1.ay = 100
            controller.player1.moveSprite(player1, 150, 0)
        } else if (sprites.readDataBoolean(player1, "mowe")) {
            player1.setImage(img`
                . . . . . e e . . e 4 . . . . . 
                . . . . . e e . . e e . . . . . 
                . . . . . 4 e e e e e . . . . . 
                . . . . . e f e e f e . . . . . 
                . . . . . e f e e f e . . . . . 
                . . . . . 4 e e 4 e e . . . . . 
                . . . . . . e e e e . . . . . . 
                . . . . e e e 1 1 e e e . . . . 
                . . . e . 4 1 1 1 1 e . 4 . . . 
                . . . 4 . e 1 1 1 1 e . e . . . 
                . . . e . e 1 1 1 1 4 . e . . . 
                . . . . . e e 1 1 e e . . . . . 
                . e 4 e e 4 e e e e e . . . . . 
                . . . . . e . . . . e . . . . . 
                . . . . . e . . . . e . . . . . 
                . . . . e e . . . . e 4 . . . . 
                `)
            player1.ay = 150
            controller.player1.moveSprite(player1, 100, 0)
        }
        player1.setFlag(SpriteFlag.Ghost, false)
        player1.setFlag(SpriteFlag.Invisible, false)
        if (sprites.readDataBoolean(player2, "catty")) {
            player2.setImage(img`
                . . . . . 4 4 . . 4 4 . . . . . 
                . . . . . 4 4 . . 4 4 . . . . . 
                . . . . . 4 4 4 4 4 4 . . . . . 
                . . . . . e f 4 4 f e . . . . . 
                . . . . . 4 f 4 4 f 4 . . . . . 
                . . . . . e 4 4 4 4 e . . . . . 
                . . . . . . 4 4 4 4 . . . . . . 
                . . . . 4 4 4 1 1 4 4 4 . . . . 
                . . . 4 . 4 1 1 1 1 4 . 4 . . . 
                . . . 4 . 4 1 1 1 1 4 . 4 . . . 
                . . . 4 . 4 1 1 1 1 4 . 4 . . . 
                . . . . . 4 4 1 1 4 4 . . . . . 
                . 1 4 1 4 4 4 4 4 4 4 . . . . . 
                . . . . . 4 . . . . 4 . . . . . 
                . . . . . 4 . . . . 4 . . . . . 
                . . . . 4 4 . . . . 4 4 . . . . 
                `)
            player2.ay = 100
            controller.player2.moveSprite(player2, 150, 0)
        } else if (sprites.readDataBoolean(player2, "mowe")) {
            player2.setImage(img`
                . . . . . e e . . e 4 . . . . . 
                . . . . . e e . . e e . . . . . 
                . . . . . 4 e e e e e . . . . . 
                . . . . . e f e e f e . . . . . 
                . . . . . e f e e f e . . . . . 
                . . . . . 4 e e 4 e e . . . . . 
                . . . . . . e e e e . . . . . . 
                . . . . e e e 1 1 e e e . . . . 
                . . . e . 4 1 1 1 1 e . 4 . . . 
                . . . 4 . e 1 1 1 1 e . e . . . 
                . . . e . e 1 1 1 1 4 . e . . . 
                . . . . . e e 1 1 e e . . . . . 
                . e 4 e e 4 e e e e e . . . . . 
                . . . . . e . . . . e . . . . . 
                . . . . . e . . . . e . . . . . 
                . . . . e e . . . . e 4 . . . . 
                `)
            player2.ay = 150
            controller.player2.moveSprite(player2, 100, 0)
        }
        player2.setFlag(SpriteFlag.Ghost, false)
        player2.setFlag(SpriteFlag.Invisible, false)
        tiles.placeOnRandomTile(player1, myTiles.tile7)
        tiles.placeOnRandomTile(player2, myTiles.tile7)
        scene.cameraFollowSprite(player1)
    }
    for (let value of tiles.getTilesByType(myTiles.tile5)) {
        thenijua = sprites.create(myTiles.tile5, SpriteKind.nijua)
        tiles.placeOnTile(thenijua, value)
        thenijua.ay = 100
        tiles.setTileAt(value, myTiles.transparency16)
    }
    for (let value of tiles.getTilesByType(myTiles.tile6)) {
        thenijua = sprites.create(myTiles.tile6, SpriteKind.Enemy)
        tiles.placeOnTile(thenijua, value)
        if (Math.percentChance(50)) {
            thenijua.follow(player1)
        } else {
            thenijua.follow(player2)
        }
        tiles.setTileAt(value, myTiles.transparency16)
    }
}
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.theplayer1, function (sprite, otherSprite) {
    if (p1_move) {
        music.powerUp.play()
        sprite.destroy(effects.fire, 5000)
        info.changeScoreBy(1)
    } else {
        music.powerDown.play()
        info.changeLifeBy(-1)
        sprite.destroy()
    }
})
let projectile: Sprite = null
let x_p1 = 0
let X_P2 = 0
let thenijua: Sprite = null
let p1_move = false
let p2_move = false
let projectile2: Sprite = null
let playerslet = 0
let player2: Sprite = null
let player1: Sprite = null
scene.setBackgroundImage(img`
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 8 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 . . . . . . . . . . . . . . . . . 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . . . . . . a a a a a a a a a a . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 5 5 5 5 5 5 5 5 5 5 5 5 5 . . . . . . . . . . . . . . 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . . . . . . a a a a a a a a a a . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 5 . . . . . . . . 2 . . 5 . . . . . . . . . . . . . . 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 5 . . . . . . . . 2 . . 5 . . . . . . . . . . . . . . 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 5 . 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 . . . . . . . . . . . . 2 . . . . . 6 6 6 6 6 6 6 6 6 6 6 6 . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 1 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 5 . . . . . . . . 2 . . 5 . 1 . . . . . . . . . . . . 2 . . . . . 6 . . . . . . . . . . 6 . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 1 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 5 . . . . . . . . 2 . . 5 . 1 . . . . . . . . . . . . 2 . . . . . 6 . . . . . . . . . . 6 . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . . . . . 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 . . . . . . . . . . . . . . . . . . . 5 . . . . . . . . 2 . . 5 . 1 . . . . . . . . . . . . 2 . . . . . 6 . . . . . . . . . . 6 . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . . . . . 6 . . . . . . . 1 1 1 1 . 8 8 8 . . . . . . . . . . . . . 1 . . . . . . . . . . . . . 6 . . . . . . . . . . . . . . . . . . . 5 . . . . . . . . 2 2 2 5 2 1 2 2 2 2 2 2 2 2 2 2 2 2 2 . . . . . 6 . . . . . . . . . . 6 . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . . . . . 6 . . . . . . . 1 . . 1 . . . . . . . . . . . . . . . . . 1 . . . . . . . . . . . . . 6 . . . . . . . . . . . . . . . . . . . 5 . . . 8 8 8 8 8 8 8 8 5 . 1 . . . . . . . . . . . . . . . . . . 6 . . . . . . . . . . 6 . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . . . . . 6 . . . . . . . 1 . . 1 . . . . . . . . . . . . . . . . . 1 2 2 2 2 2 2 2 2 2 2 2 2 2 6 . . . . . . . . . . . . . . . . . . . 5 . . . 8 . . . . . . . 5 . 1 . . . . . . . . . . . . . . . . . . 6 6 6 6 6 6 6 6 6 6 6 6 . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . . . . . 6 . . . . . . . 1 . . 1 . . . . . . . . . . . . . . . . . 1 2 2 2 2 2 2 2 2 2 2 2 2 2 6 . . . . . . . . . . . . . . . . . . . 5 . . . 8 . . . . . . . 5 . 1 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . . . . . 6 . . . . . . . 1 . . 1 . . . . . . . . . . 7 7 7 7 7 7 7 1 . . . . . . . . . . . . . 6 . . . . . . . . . . . . . . . . . . . 5 . . . 8 . . . . . . . 5 . 1 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . . . . . 6 . . . . . . . 1 . . 1 . . . . . . . . . . 7 . . . . . . 1 . . . . . . . . . . . . . 6 . . . . . . . . . . . . . . . . . . . 5 5 5 5 5 5 5 5 5 5 5 5 5 . 1 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . . . . . 6 . . . . . . . 1 . . 1 . . . . . . . . . . 7 . . . . . . 1 . . . . . . . . . . . . . 6 . . . . . . . . . . . . . . . . . . . . . . . 8 . . . . . . . 8 . 1 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . . . . . 6 . . . . . . . 1 . . 1 . . . . . . . . . . 7 . . . . . . 1 . . . . . . . . . . . . . 6 . . . . . . . . . . . . . . . . . . . . . . . 8 . . . . 4 4 4 4 4 1 4 4 4 4 4 4 4 4 4 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . . . . . 6 . . . . . . . 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 7 7 7 7 7 7 1 . . . . . . . . . . . . . 6 . . 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 . 8 . . . . 4 . . 8 . 1 . . . . . . . . 4 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . . . . . 6 . . . . . . . 1 . . . . . . . . . . . . . 1 . . . . . . 1 . . . . . . . . . . . . . 6 . . 4 . . . . . . . . . . . . . . . . . . 4 . 8 . . . . 4 . . 8 . 1 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . . . . . 2 2 2 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . . . . . 6 . . . . . . . 1 . . . . . . . . . . . . . 1 . . . . . . 1 . . . . . . . . . . . . . 6 . . 4 . . . . . . . . . . . . . . . . . . 4 . 8 . . . . 4 . . 8 . 1 5 . . . . . . . 4 . . . . . . 5 . . . . . 2 8 8 8 8 8 8 8 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . . . . . 6 . . 4 4 4 . . 1 . . . . . . . . . . . . . 1 . . . . . . 1 . . . . . . . . . . . . . 6 . . 4 . . . . . . . . . . . . . . . . . . 4 . 8 . . . . 4 . . 8 . 1 5 . . . . . . . 4 . . . . . . 5 . . . . . 2 8 . 2 . . . 8 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . . . . . 6 . . 4 . 4 . . 1 . . . . . . . . . . . . . 1 . . . . . . 1 . . . . . . . . . a a a a a a a a a a a a a a a a a a a a a a a a a a a . 8 . . . . 4 . . 8 . 1 5 . . . . . . . 4 . . . . . . 5 . . . . . 2 8 . 2 . . . 8 . . . . . a . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . . . . . 6 . . 4 . 4 . . 1 . . . . . . . . . . . . . 1 . . . . . . 1 . . . . . . . . . a . . . 6 . . 4 . . . . . . . . . . . . . . . . . . a . 8 . . . . 4 . . 8 . 1 5 . . . . . . . 4 . . . . . . 5 . . . . . 2 8 . 2 . . . 8 . . . . . a . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . . . . . 6 . . 4 . 4 . . 1 . . . . . . . . . . . . . 1 . . . . . . 1 . . . . . . . . . a . . . 6 . . 4 . . . . . . . . . . . . . . . . . . a . 8 . . . . 4 . . 8 . 1 5 . . . . . . . 4 . . . . . . 5 . . . . . 2 8 . 2 . . . 8 . . . . . a . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . . . . . 6 . . 4 . 4 . . 1 . . . . . . . . . . . . . 1 . . . . . . 1 . . . . . . . 2 2 a 2 2 2 6 2 2 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 a . 8 . . . . 4 . . 8 . 1 5 . . . . . . . 4 . . . . . . 5 . . . . . 2 8 . 2 . . . 6 6 6 6 6 6 a 6 6 6 6 6 6 6 6 6 6 6 6 6 6 . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . . . . . 6 . . 4 4 4 . . 1 . . . . . . . . . . . . . 1 . . . . . . 1 . . . . . . . 2 . a . . . 6 . . . . . . . . . . . . . . 2 . . . . . . a . 8 . . . . 4 . . 8 . 1 5 . . . . . . . 4 . . . . . . 5 . . . . . 2 8 . 2 . . . 6 . . . . . a . . . . . . . . . . . . . 6 . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . . . . . 6 . . . . . . . 1 . . . . . . . . . . . . . 1 . . . . . . 1 1 1 1 1 1 1 1 1 1 a 1 1 1 6 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 a 1 1 1 1 1 1 1 1 1 1 1 1 5 . . . . . . . 4 . . . . . . 5 . . . . . 2 8 . 2 . . . 6 . . . . . a . . . . . . . . . . . . . 6 . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . . . . . 6 . . . . . . . 1 . . . . . . . . . . . . . 1 . . . . . . . . . . . . . . 2 . a . . . 6 . . . . . . . . . . . . . . 2 . . . . . . a . 8 . . . . 4 . . 8 . . 5 . . . . . . . 4 . . . . . . 5 . . . . . 2 8 . 2 . . . 6 . . . . . a . . . . . . . . . . . . . 6 . . . . . . . . . 
    . . . . . . . . . . 7 7 7 7 7 7 7 7 7 7 7 7 7 7 6 7 7 . . . . . 1 . . . . . . . . . . . . . 1 . . . . . . . . . . . . . . 2 . a . . . 6 . . . . . . . . . . . . . . 2 . . . . . . a . 8 . . . . 4 . . 8 . . 5 . . . . . . . 4 . . . . . . 5 . . . . . 2 8 . 2 . . . 6 . . . . . a . . . . . . . . . . . . . 6 . . . . . . . . . 
    . . . . . . . . . . 7 . . . . . . . . . . . . . 6 . 7 . . . . . 1 . . . . . . . . . . . . . 1 . . . . . . . . . . . . . . 2 . a a a a a a a a a a a a a a a a a a a a a a a a a a a . 8 . . . . 4 4 4 4 4 4 5 4 4 4 4 4 4 4 4 . . . . . . 5 . . . . . 2 8 . 2 . . . 6 . . . . . a . . . . . . . . . . . . . 6 . . . . . . . . . 
    . . . . . . . . . . 7 . . . . . . . . . . . . . 6 . 7 . . . . . 1 . . . . . . . . . . . . . 1 . . . . . . . . . . . . . . 2 . . . . . 6 . . . . . . . . . . . . . . 2 . . . . . . . . 8 8 8 8 8 8 8 8 8 . . 5 . . . . . . . . . . . . . . 5 . . . . . 2 8 . 2 . . . 6 . . . . . a . . . . . . . . . . . . . 6 . . . . . . . . . 
    . . . . . . . . . . 7 . . . . . . . . . . . . . 6 . 7 . . . . . 1 . . . . . . . . . . . . . 1 . . . . . . . . . . . . . . 2 . . . . . 6 . . . . . . . . . . . . . . 2 . . . . . . . . . . . . . . . . . . . 5 . . . . . . . . . . . . . . 5 . . . . . 2 8 . 2 . . . 6 . . . . . a . . . . . . . . . . . . . 6 . . . . . . . . . 
    . . . . . . . . . . 7 . . . . . . . . . . . . . 6 . 7 . . . . . 1 . . . . . . . . . . . . . 1 . . . . . . . . . . . . . . 2 . . . . . 6 . . . . . . . . . . . . . . 2 . . . . . . . . . . . . . . . . . . . 5 . . . . . . . . . . . . . . 5 . . . . . 2 8 2 2 . . . 6 6 6 6 6 6 a 6 6 6 6 6 6 6 6 6 6 6 6 6 6 . . . . . . . . . 
    . . . . . . . . . . 7 . . . . . . . . . . . . a a . 7 . . . . . 1 . . . 8 8 8 8 8 8 8 8 8 8 1 8 . . . . . . . . . . . . . 2 . . . . . 6 . . . . . . . . . . . . . . 2 . . . . . . . . . . . . . . . . . . . 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . . . . . . 8 . . . . . 8 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . 7 . . . . . . . . . . . . a a . 7 . . . . . 1 . . . 8 . . . . . . . . . 1 8 . . . . . . . . . . . . . 2 . . . . . 6 . . . . . . . . . . . . . . 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 8 . . . . . 8 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . 7 . . . . . . . . . . . . a a . 7 . . . . . 1 . . . 8 . . . . . . . . . 1 8 . . . . . . . . . . . . . 2 . . . . . 6 . . . . . . . . . . . . . . 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . 7 7 7 7 7 7 7 7 7 7 7 . . 8 . . . . . 8 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . 7 . . . . . . . . . . . . a a . 7 . . . . . 1 . . . 8 . . . . . . . . . 1 8 . . . . . . . . . . . . . 2 . . . . . 6 . . . . . . . . . . . . . . 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . 7 . . . . . . . . . 7 . . 8 . . . . . 8 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . 7 . . . . . . . . . . . . a a . 7 . . . . . 1 . . . 8 . . . . . . . . . 1 8 . . . . . . . . . . . . . 2 . . . . . 6 . . . . . . . . . . . . . . 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . 7 . . . . . . . . . 7 . . 8 . . . . . 8 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . 7 . . . . . . . . . . . . a a . 7 . . . . . 1 . . . 8 . . . . . . . . . 1 8 . . . . . . . . . . . . . 2 . . . . . 6 . . . . . . . . . . . . . . 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . 7 . . . . . . . . . 7 . . 8 . . . . . 8 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . 7 . . . . . . . . . . . . a a . 7 . . . . . 1 . . . 8 . . . . . . . . . 1 8 . . . . . . . . . . . . . 2 . . . . . 6 . . . . . . . . . . . . . . 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . 7 . . . . . . . . . 7 . . 8 . . . . . 8 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . 7 . . . . . . . . . . . . a a . 7 . . . . . 1 . . . 8 . . . . . . . . . 1 8 . . . . . . . . . . . . . 2 . . . . . 6 . . . . . . . . . . . . . . 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . 7 . . . . . . . . . 7 . . 8 . . . . . 8 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . 7 . . . . . . . . . . . . a a . 7 . . . . . 1 . . . 8 . . . . . . . . . 1 8 . . . . . . . . . . . . . 2 . . . . . 6 . . . . . . . . . . . . . . 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . 7 . . . . . . . . . 7 . . 8 . . . . . 8 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . 7 . . . . . . . . . . . . a a . 7 . . . . . 1 . . . 8 . . . . . . . . . 1 8 . . . . . . . . . . . . . 2 . . . . . 6 . . . . . . . . . . . . . . 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . 7 . . . . . . . . . 7 . . 8 8 8 8 8 8 8 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . 7 . . . . . . . . . . . . a a . 7 . . . . . 1 . . . 8 . . . . . . . . . 1 8 . . . . . . . . . . . . . 2 . . . . . 6 . . . . . . . . . . . . . . 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . 7 . . . . . . . . . 7 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . 7 . . . . . . . . . . . . a a . 7 . . . . . 1 . . . 8 . . . . . . . . . 1 8 . . . . . . . . . . . . . 2 . . . . . 6 . . . . . . . . . . . . . . 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . 7 . . . . . . . . . 7 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . 7 . . . . . . . . . . . . a a . 7 . . . . . 1 . . . 8 . . . . . . . . . 1 8 . . . . . . . . . . . . . 2 . . . . . 6 . . . . . . . . . . . . . . 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . 7 . . . . . . . . . 7 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . 7 . . . . . . . . . . . . a a . 7 . . . . . 1 . . . 8 5 5 5 5 . . . . . 1 8 . . . . 1 1 1 1 1 1 1 1 1 1 . . . . . 6 . . . . . . . . . . . . . . 2 . . . . . . . . . . . . . 6 6 6 6 6 6 6 6 6 6 6 5 5 5 . 7 . . . . . . . . . 7 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . 7 . . . . . . . . . . . . a a 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 . . . . . . . . . . . . . . 2 . . . . . . . . . . . . . 6 . . . . . . 5 4 4 6 4 4 5 4 4 4 . . . . . . . . 7 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . 7 . . . . . . . . . . . . a a . 7 . . . . . 1 . . . 8 5 . . 5 . . . . . 1 8 . . . . 1 . . . . . . . . 1 . . . . . . . . . . . . . . . . . . . . 2 . . . . . . . . . . . . . 6 . . . . . . 5 . . 6 . . 5 . 7 4 . . . . . . . . 7 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . 7 . . . . . . . . . . . . a a . 7 . . . . . 1 . . . 8 5 . . 5 . . . . . 1 8 . . . . 1 . . . . . . . . 1 . . . . . . . . . . . . . . . . . . . . 2 . . . . . . . . . . . . . 6 . . . . . . 5 . . 6 . . 5 . 7 4 . . . . . . . . 7 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . 7 . . . . . . . . . . . . a a . 7 . . . . . 1 . . . 8 5 . . 5 . . . . . 1 8 . . . . 1 . . . . . . . . 1 . . . . . . . . . . . . . . . . . . . . 2 . . . . . . . . . . . . . 6 . . . . . . 5 . . 6 . . 5 . 7 4 . . . . . . . . 7 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . 7 . . . . . . . . . . . . a a . 7 . . . . . 1 . . . 8 5 . . 5 . . . . 4 1 8 . . . . 1 . . . . . . . . 1 . . . . . . . . . . . . . . . . . . . . 2 . . . . . . . . . . . . . 6 . . . . . . 5 . . 6 . . 5 . 7 4 . . . . . . . . 7 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . 7 . . . . . . . . . . . . a a . 7 . . . . . 1 . . . 8 5 . . 5 . . . . 4 1 8 . . . . 1 . . . . . . . . 1 . . . . . . . . . . . . . . . . . . . . 2 . . . . . . . . . . . . . 6 . . . . . . 5 . . 6 . . 5 . 7 4 . . . . . . . . 7 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . 7 . . . . . . . . . . . . a a . 7 . . . . . 1 . . . 8 5 . . 5 . . . . 4 1 8 . . . . 1 . . . . . . . . 1 . . . . . . . . . . . . . . . . . . . . 2 . . . . . . . . . . . . . 6 . . . . . . 5 . . 6 1 1 5 . 7 4 . . . . . . . . 7 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . 7 . . . . . . . . . . . . a a . 7 . . . . . 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 8 . . . . 1 . . . . . . . . 1 . . . . . . . . . . . . . . . . . . . . 2 . . . . . . . . . . . . . 6 . . . . . . 5 . . 6 . 1 5 . 7 4 . . . . . . . . 7 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . 7 . . . . . . . . . . . . a a . 7 . . . . . . . . . 8 5 . . 5 . . . . 4 4 8 . . . . 1 1 1 1 1 1 1 1 1 1 . . . . . . . . . . . . . . 8 . . . . . 2 . . . . . . . . . . . . . 6 . . . . . . 5 . . 6 . 1 5 . 7 4 7 7 7 7 7 7 7 7 7 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . 7 . . . . . . . . . . . . a a . 7 . . . . . . . . . 8 5 . . 5 . . . . 4 4 8 . . . . . . . . . . . . . 2 . . . . . . . . . . . . . . . . . . . . 2 . . . . . . . . . . . . . 6 . . . . . . 5 . . 6 . 1 5 . . 4 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . 7 . . . . . . . . . . . . a a . 7 . . . . . . . . . 8 5 . . 5 . . . . 4 4 8 . . . . . . . . . . . . . 2 . . . . . . . . . . . . . . . . . . . . 2 . . . . . . . . . . . . . 6 . . . . . . 5 . . 6 . 1 5 . . 4 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . 7 . . . . . . . . . . . . . . . 7 . . . . . . . . . 8 5 5 5 5 . . . . 4 4 8 . . . . . . . . . . . . . 2 . . . . . . . . . . . . . . . . . . . . 2 . . . . . . . . . . . . . 6 . . . . . . 5 . . 6 . 1 5 . . 4 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . 7 . . . . . . . . . . . . . . . 7 . . . . . . . . . 8 . . . . . . . . 4 4 8 . . . . . . . . . . . . . 2 . . . . . . . . . . . . . . . . . . . . 2 . . . . . . . . . . . . . 6 . . . . . . 5 5 5 6 5 1 5 . . 4 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . 7 . . . . . . . . . . . . . . . 7 . . . . . . . . . 8 . . . . . . . . . . 8 . . . . . . . . . . . . . 2 . . . . . . . . . . . . . . . . . . . . 2 . . . . . . . . . . . . . 6 . . . . . . 4 . . 6 . 1 . . . 4 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . 7 . . . . . . . . . . . . . . . 7 . . . . . . . . . 8 . . . . . . . . . . 8 . . . . . . . . 7 7 . . . 2 . . . . . . . . . . . . . . . . . . . . 2 . . . . . . . . . . . . . 6 . . . . . . 4 . . 6 . 1 . . . a a a a a a a a a a a a a a a a a a . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 . . . . . . . . . 8 . . . . . . . . . . 8 . . . . . . . . 7 7 . . . 2 . . . . . . . . . . . . . . . . . . . . 2 . . . . . . . . . . . . . 6 . . . . . . 4 . . 6 . 1 . . . a . . . . . . . . . . . . . . . . a . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 8 . . . . . . . . . . 8 . . . . . . . . 7 7 . . . 2 . . . . . . . . . . . . . . . . . . . . 2 . . . . . . . . a a a a a a . . . . . . 4 . . 6 1 1 . . . a . . . . . . . . . . . . . . . . a . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 8 . . . . . . . . . . 8 . . . . . . . . 7 7 . . . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . . . . . . . . a . . . . a . . . . . . 4 . . 6 . . . . . a . . . . . . . . . . . . . . . . a . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 8 . . . . . . . . . . 8 . . . . . . . . 7 7 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . a . . . . a . . . . . . 4 . . 6 . . . . . a . . . . . . . . . . . . . . . . a . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 7 . . . . . 8 . . . . . . . . . . 8 . . . 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . . . . . . . . . . . . . . . . . . . . . . . . a . . . . a . . . . . . 4 . . 6 . . . . . a . . . . . . . . . . . . . . . . a . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 7 . . . . . 8 8 8 8 8 8 8 8 8 8 8 8 . . . 5 . . . . 7 7 . . . . . . . . 5 . . . . . 4 4 4 4 4 4 . . . . . . . . . . . . . a . . . . a . . . . . . 4 . . 6 . . . . . a . . . . . . . . . . . . . . . . a . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 7 . . . . . . . . . . . . . . . . . . . . 5 . . . . 7 7 . . . . . . . . 5 . . . . . 4 . . . . 4 . . . . . . . . . . . . . a . . . . a . . . . . . 4 . . 6 . . . . . a . . . . . . . . . . . 8 8 8 8 8 a 8 8 . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 7 . . . . . . . . . . . . . . . . . . . . 5 . . . . 7 7 . . . . . . . . 5 . . . . . 4 . . . . 4 . . . . . . . . . . . . . a . . . . a . . . . . . 4 . . 6 . . . . . a . . . . . . . . . . . 8 . . . . a . 8 . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 7 . . . . . . . . . . . . . . . . . . . . 5 . . . . 7 7 . . . . . . . . 5 . . . . . 4 . . . . 4 . . . . . . . . . . . . . a . . . . a . . . . . . 4 . . 6 . . . . . a . . . . . . . . . . . 8 . . . . a . 8 . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 7 . . . . . . . . . . . . . . . . . . . . 5 . . . . 7 7 . . . . . . . . 5 . . . . . 4 4 4 4 4 4 . . . . . . . . . . . . . a . . . . a . . . . . . 4 4 4 6 4 4 4 4 4 a . . . . . . . . . . . 8 . . . . a . 8 . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 . . . . . . . . . . . . . . . . . . . . 5 . . . . 7 7 . . . . . . . . 5 . . . . . . . . . . . . . . . . . . . . . . . . a . . . . a . . . . . . . . . 6 . . . . . a . . . . . . . . . . . 8 . . . . a . 8 . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . 6 . . . . . . . . . . . . . . . 6 . . . . . . . . . . . . . . . . . . . . 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . . . . . . . . . . . . . . . . . . . . . . . . a . . . . a . . . . . . . . . 6 . . . . . a 7 7 7 7 . . . . . . . 8 . . . . a . 8 . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . 6 . . . . . . . . . . . . . . . 6 . . 1 1 1 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . a . . . . a . . . . . . . . . 6 . . . . . a . . . 7 . . . . . . . 8 . . . . a . 8 . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . 6 . . . . . . . . . . . . . . . 6 . . 1 . 1 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . a . . . . a . . . . . . . . . 6 . . . . . a . . . 7 . . . . . . . 8 . . . . a . 8 . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . 6 . . . . . . . . . . . . . . . 6 . . 1 . 1 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . a . . . . a . . . . . . . . . 6 . . . . . a . . . 7 . . . . . . . 8 . . . . a . 8 . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . 6 . . . . . . . . . . . . . . . 6 . . 1 . 1 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . a . . . . a . . . . . . . . . 6 . . . . . a 7 7 7 7 . . . . . . . 8 . . . . a . 8 . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . 6 . . . . . . . . . . . . . . . 6 . . 1 . 1 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . a . . . . a . . . . . . . . . 6 . . . . . a . . . . . . . . . . . 8 8 8 8 8 a 8 8 . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . 6 . . . . . . . . . . . . . . . 6 . . 1 . 1 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . a . . . . a . . . . . . . . . 6 . . . . . a . . . . . . . . . . . . . . . . a . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . 6 . . . . . . . . . . . . . . . 6 . . 1 . 1 . . . . . . . . . . . . . . . a a a a a a a . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . a . . . . a . . . . . . . . . 6 . . . . . a . . . . . . . . . . . . . . . . a . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . 6 . . . . . . . . . . . . . . . 6 . . 1 . 1 . . . . . . . . . . . . . . . a . . . . . a . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . a . . . . a . . . . . . . . . 6 . . . . . a . . . . . . . . . . . . . . . . a . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . 6 . . . . . . . . . . . . . . . 6 . . 1 . 1 . . . . . . . . . . . . . . . a . . . . . a . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . a . . . . a . . . . . . . . . 6 . . . . . a . . . . . . . . . . . . . . . . a . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . 6 . . . . . . . . . . . . . . . 6 . . 1 . 1 . . . . . . . . . . . . . . . a . . . . . a . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . a . . . . a . . . . . . . . . 6 . . . . . a . . . . . . . . . . . . . . . . a . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . 6 . . . . . . . . . . . . . . . 6 . . 1 . 1 . . . . . . . . . . . . . . . a . . . . . a . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . a . . . . a . . . . . . . . . 6 . . . . . a a a a a a a a a a a a a a a a a a . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . 6 . . . . . . . . . . . . . . . 6 . . 1 1 1 . . . . . . . . . . . . . . . a . . . . . a . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . a . . . . a . . . . . . . . . 6 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . 6 . . . . . . . . . . . . . . . 6 . . . . . . . . . . . . . . . . . . . . a a a a a a a . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . a . . . . a . . . . . . . . . 6 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . 6 . . . . . . . . . . . . . . . 6 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . a a a a a a 6 6 6 6 6 6 6 6 6 6 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . 6 . . . . . . . . . . . . . . . 6 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . 6 . . . . . . . . . . . . . . . 6 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . 6 . . . . . . . . . . . . . . . 6 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . 6 . . . . . . . . . . . . . . . 6 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 1 1 1 1 1 1 1 1 1 1 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . 6 . . . . . . . . . . . . . . . 6 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 1 1 1 1 1 1 1 1 1 1 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . 6 . . . . . . . . . . . . . . . 6 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . 6 . . . . . . . . . . . . . . . 6 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . 6 . . . . . . . . . . . . . . . 6 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . 6 . . . . . . . . . . . . . . . 6 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
    `)
game.showLongText("LG games.", DialogLayout.Bottom)
tiles.setTilemap(tiles.createTilemap(hex`1000100003030303030303030303030303030303030404040404030303030303030303030304010402040303030303030303030303040404040403030303030303030303030404040404030303030303030303030304040404040303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303`, img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, [myTiles.transparency16,myTiles.tile3,myTiles.tile4,sprites.dungeon.darkGroundCenter,myTiles.tile8], TileScale.Sixteen))
player1 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . 2 2 2 2 2 2 . . . . . 
    . . . . . 2 . . . . 2 . . . . . 
    . . . . . 2 . . . . 2 . . . . . 
    . . . . . 2 . . . . 2 . . . . . 
    . . . . . 2 . . . . 2 . . . . . 
    . . . . . 2 2 2 2 2 2 . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.theplayer1)
controller.player1.moveSprite(player1)
player1.say("P1")
player2 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . 8 8 8 8 8 8 . . . . . 
    . . . . . 8 . . . . 8 . . . . . 
    . . . . . 8 . . . . 8 . . . . . 
    . . . . . 8 . . . . 8 . . . . . 
    . . . . . 8 . . . . 8 . . . . . 
    . . . . . 8 8 8 8 8 8 . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.theplayer2)
controller.player2.moveSprite(player2)
player2.say("p2")
playerslet = 0
forever(function () {
    if (controller.player2.isPressed(ControllerButton.B)) {
        p2_move = true
        if (sprites.readDataBoolean(player2, "catty")) {
            player2.startEffect(effects.halo, 500)
            if (X_P2 == 1) {
                for (let index = 0; index < 3; index++) {
                    for (let index = 0; index < 16; index++) {
                        player2.x += -1
                        pause(1)
                    }
                }
                p2_move = false
                pause(1000)
            } else if (X_P2 == 2) {
                for (let index = 0; index < 3; index++) {
                    for (let index = 0; index < 16; index++) {
                        player2.x += 1
                        pause(1)
                    }
                }
                p2_move = false
                pause(1000)
            } else if (X_P2 == 3) {
                for (let index = 0; index < 6; index++) {
                    for (let index = 0; index < 16; index++) {
                        player2.y += -1
                        pause(1)
                    }
                }
                p2_move = false
                pause(50)
            } else if (X_P2 == 4) {
                for (let index = 0; index < 6; index++) {
                    for (let index = 0; index < 16; index++) {
                        player2.y += 1
                        pause(1)
                    }
                }
            }
        } else if (sprites.readDataBoolean(player2, "mowe")) {
            if (X_P2 == 1) {
                projectile2 = sprites.createProjectileFromSprite(img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . 4 4 4 4 4 . . . . . . 
                    . . . . 4 3 3 3 3 3 4 . . . . . 
                    . . . . 4 3 3 3 3 3 4 . . . . . 
                    . . . . 4 3 3 3 3 3 4 . . . . . 
                    . . . . 4 3 3 3 3 3 4 . . . . . 
                    . . . . 4 3 3 3 3 3 4 . . . . . 
                    . . . . . 4 4 4 4 4 . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `, player2, -50, 0)
                projectile2.setFlag(SpriteFlag.AutoDestroy, false)
            } else if (X_P2 == 2) {
                projectile2 = sprites.createProjectileFromSprite(img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . 4 4 4 4 4 . . . . . . 
                    . . . . 4 3 3 3 3 3 4 . . . . . 
                    . . . . 4 3 3 3 3 3 4 . . . . . 
                    . . . . 4 3 3 3 3 3 4 . . . . . 
                    . . . . 4 3 3 3 3 3 4 . . . . . 
                    . . . . 4 3 3 3 3 3 4 . . . . . 
                    . . . . . 4 4 4 4 4 . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `, player2, 50, 0)
                projectile2.setFlag(SpriteFlag.AutoDestroy, false)
            } else if (X_P2 == 3) {
                projectile2 = sprites.createProjectileFromSprite(img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . 4 4 4 4 4 . . . . . . 
                    . . . . 4 3 3 3 3 3 4 . . . . . 
                    . . . . 4 3 3 3 3 3 4 . . . . . 
                    . . . . 4 3 3 3 3 3 4 . . . . . 
                    . . . . 4 3 3 3 3 3 4 . . . . . 
                    . . . . 4 3 3 3 3 3 4 . . . . . 
                    . . . . . 4 4 4 4 4 . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `, player2, 0, -50)
                projectile2.setFlag(SpriteFlag.AutoDestroy, false)
            } else if (X_P2 == 4) {
                projectile2 = sprites.createProjectileFromSprite(img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . 4 4 4 4 4 . . . . . . 
                    . . . . 4 3 3 3 3 3 4 . . . . . 
                    . . . . 4 3 3 3 3 3 4 . . . . . 
                    . . . . 4 3 3 3 3 3 4 . . . . . 
                    . . . . 4 3 3 3 3 3 4 . . . . . 
                    . . . . 4 3 3 3 3 3 4 . . . . . 
                    . . . . . 4 4 4 4 4 . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `, player2, 0, 50)
                projectile2.setFlag(SpriteFlag.AutoDestroy, false)
            }
            pause(500)
        }
    }
})
forever(function () {
    if (controller.player1.isPressed(ControllerButton.Left)) {
        x_p1 = 1
    } else if (controller.player1.isPressed(ControllerButton.Right)) {
        x_p1 = 2
    } else if (controller.player1.isPressed(ControllerButton.Up)) {
        x_p1 = 3
    } else if (controller.player1.isPressed(ControllerButton.Down)) {
        x_p1 = 4
    }
    if (controller.player2.isPressed(ControllerButton.Left)) {
        X_P2 = 1
    } else if (controller.player2.isPressed(ControllerButton.Right)) {
        X_P2 = 2
    } else if (controller.player2.isPressed(ControllerButton.Up)) {
        X_P2 = 3
    } else if (controller.player2.isPressed(ControllerButton.Down)) {
        X_P2 = 4
    }
})
forever(function () {
    if (playerslet == 2) {
        tiles.setTilemap(tiles.createTilemap(hex`5a001000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000050000000000000000000000000000030300000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000500000000000005000000000000050000050000000000000000070705000000030000000300000000000000000000000000000000000005000005000000000000000000000000000000000000000000000000000500000000000000030000000000000000000000000000000000000000000000070705000000070000070707050000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000007070700000000000005000000000000030000000000000000000000000003070000000000000000000000000000000000000000000000000000000000000000000000000500000000000005050000000000000000000000000000000000000000000000000000000000070700000000000707070707070707070707070707070000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000300000007070700070707000707070707070707070707070707070000000300000000000000000000000000000000000000000000000000000000000000000000000000000000000003000000000000000003000000030000070707070007070700000000000707070707070707070707070707070000030705000000000000000000000000000000000000000000000000000000000000000000000300000000070707070707070000070707070007070700070707070007070700000000000707070707070707070707070707070000070707050000060000000000000000000000000000000000000000000000000000000007070700000007070707070705000000000707070000000000070707070007070700000000000707070707070707070707070707070000070707050000000000000000000000000000000000000000000000000000000003000007070707070707070707070700000000000707070000000000070707070007070700000000000707070707070707070707070707070000070707050000010101010101010000000000000000000000000001010101000007070007070707070707070707070700000000000707070000000000070707070007070700000000000707070707070707070707070707070000000705000000020202020202020000000003000003000000000002020202000007070007070707070707070707070700000000000707070000000000070707070007070700000000000707070707070707070707070707070000000000000000020202020202020000000001010101010007070002020202000000000007070707070707070707070700000000000707070000000000070707070007070700000000000707070707070707070707070707070000000000000000020202020202020000000002020202020000000002020202000000000007070707070707070707070705000000000707070700000000070707070007070700000000000707070707070707070707070707070300000000000003020202020202020404040402020202020404040402020202040404040407070707070707070707070704040404040707070704040404070707070407070704040404040707070707070707070707070707070707070707070707`, img`
            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 2 . . . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 2 . . . . 2 . . 2 2 2 . . . . . . . . . 
            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 2 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 2 . . . . . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . . . . . . . . 
            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 2 2 . 2 2 2 . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . . . . . . . . 
            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 2 2 2 . 2 2 2 . . . . . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . . . 2 . . . . 
            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 2 2 2 2 2 2 . . 2 2 2 2 . 2 2 2 . 2 2 2 2 . 2 2 2 . . . . . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . . 2 2 2 . . . 
            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 2 2 . . . 2 2 2 2 2 2 . . . . . 2 2 2 . . . . . 2 2 2 2 . 2 2 2 . . . . . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . . 2 2 2 . . . 
            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 2 2 2 2 2 2 2 2 2 2 2 . . . . . 2 2 2 . . . . . 2 2 2 2 . 2 2 2 . . . . . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . . 2 2 2 . . . 
            2 2 2 2 2 2 2 . . . . . . . . . . . . . 2 2 2 2 . . 2 2 . 2 2 2 2 2 2 2 2 2 2 2 2 . . . . . 2 2 2 . . . . . 2 2 2 2 . 2 2 2 . . . . . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . . . 2 . . . . 
            2 2 2 2 2 2 2 . . . . . . . . . . . . . 2 2 2 2 . . 2 2 . 2 2 2 2 2 2 2 2 2 2 2 2 . . . . . 2 2 2 . . . . . 2 2 2 2 . 2 2 2 . . . . . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . . . . . . . . 
            2 2 2 2 2 2 2 . . . . 2 2 2 2 2 . 2 2 . 2 2 2 2 . . . . . 2 2 2 2 2 2 2 2 2 2 2 2 . . . . . 2 2 2 . . . . . 2 2 2 2 . 2 2 2 . . . . . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . . . . . . . . 
            2 2 2 2 2 2 2 . . . . 2 2 2 2 2 . . . . 2 2 2 2 . . . . . 2 2 2 2 2 2 2 2 2 2 2 2 . . . . . 2 2 2 2 . . . . 2 2 2 2 . 2 2 2 . . . . . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . . . . . . . . 
            2 2 2 2 2 2 2 . . . . 2 2 2 2 2 . . . . 2 2 2 2 . . . . . 2 2 2 2 2 2 2 2 2 2 2 2 . . . . . 2 2 2 2 . . . . 2 2 2 2 . 2 2 2 . . . . . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            `, [myTiles.transparency16,sprites.castle.tilePath2,sprites.castle.tilePath5,myTiles.tile5,sprites.dungeon.hazardLava0,myTiles.tile6,myTiles.tile7,sprites.dungeon.floorDark2], TileScale.Sixteen))
        scene.setBackgroundImage(img`
            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
            `)
        scene.setBackgroundColor(8)
        start()
        playerslet = 3
        info.player2.setLife(3)
        info.player1.setLife(3)
        player2.say("p2", 1)
        player1.say("p2", 1)
    }
})
forever(function () {
    if (controller.B.isPressed()) {
        p1_move = true
        if (sprites.readDataBoolean(player1, "catty")) {
            player1.startEffect(effects.halo, 500)
            if (x_p1 == 1) {
                for (let index = 0; index < 3; index++) {
                    for (let index = 0; index < 16; index++) {
                        player1.x += -1
                        pause(1)
                    }
                }
                p1_move = false
                pause(1000)
            } else if (x_p1 == 2) {
                for (let index = 0; index < 3; index++) {
                    for (let index = 0; index < 16; index++) {
                        player1.x += 1
                        pause(1)
                    }
                }
                p1_move = false
                pause(1000)
            } else if (x_p1 == 3) {
                for (let index = 0; index < 6; index++) {
                    for (let index = 0; index < 16; index++) {
                        player1.y += -1
                        pause(1)
                    }
                }
                p1_move = false
                pause(50)
            } else if (x_p1 == 4) {
                for (let index = 0; index < 6; index++) {
                    for (let index = 0; index < 16; index++) {
                        player1.y += 1
                        pause(1)
                    }
                }
            }
        } else if (sprites.readDataBoolean(player1, "mowe")) {
            if (x_p1 == 1) {
                projectile2 = sprites.createProjectileFromSprite(img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . 4 4 4 4 4 . . . . . . 
                    . . . . 4 3 3 3 3 3 4 . . . . . 
                    . . . . 4 3 3 3 3 3 4 . . . . . 
                    . . . . 4 3 3 3 3 3 4 . . . . . 
                    . . . . 4 3 3 3 3 3 4 . . . . . 
                    . . . . 4 3 3 3 3 3 4 . . . . . 
                    . . . . . 4 4 4 4 4 . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `, player1, -50, 0)
                projectile2.setFlag(SpriteFlag.AutoDestroy, false)
            } else if (x_p1 == 2) {
                projectile2 = sprites.createProjectileFromSprite(img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . 4 4 4 4 4 . . . . . . 
                    . . . . 4 3 3 3 3 3 4 . . . . . 
                    . . . . 4 3 3 3 3 3 4 . . . . . 
                    . . . . 4 3 3 3 3 3 4 . . . . . 
                    . . . . 4 3 3 3 3 3 4 . . . . . 
                    . . . . 4 3 3 3 3 3 4 . . . . . 
                    . . . . . 4 4 4 4 4 . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `, player1, 50, 0)
                projectile2.setFlag(SpriteFlag.AutoDestroy, false)
            } else if (x_p1 == 3) {
                projectile2 = sprites.createProjectileFromSprite(img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . 4 4 4 4 4 . . . . . . 
                    . . . . 4 3 3 3 3 3 4 . . . . . 
                    . . . . 4 3 3 3 3 3 4 . . . . . 
                    . . . . 4 3 3 3 3 3 4 . . . . . 
                    . . . . 4 3 3 3 3 3 4 . . . . . 
                    . . . . 4 3 3 3 3 3 4 . . . . . 
                    . . . . . 4 4 4 4 4 . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `, player1, 0, -50)
                projectile2.setFlag(SpriteFlag.AutoDestroy, false)
            } else if (x_p1 == 4) {
                projectile2 = sprites.createProjectileFromSprite(img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . 4 4 4 4 4 . . . . . . 
                    . . . . 4 3 3 3 3 3 4 . . . . . 
                    . . . . 4 3 3 3 3 3 4 . . . . . 
                    . . . . 4 3 3 3 3 3 4 . . . . . 
                    . . . . 4 3 3 3 3 3 4 . . . . . 
                    . . . . 4 3 3 3 3 3 4 . . . . . 
                    . . . . . 4 4 4 4 4 . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `, player1, 0, 50)
                projectile2.setFlag(SpriteFlag.AutoDestroy, false)
            }
            pause(500)
        }
    }
})
forever(function () {
    pause(1000)
    for (let index = 0; index < 4; index++) {
        for (let value of sprites.allOfKind(SpriteKind.nijua)) {
            projectile = sprites.createProjectileFromSprite(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . b . . . . . . . . 
                . . . . . . . b . . . . . . . . 
                . . . . . b b b b b . . . . . . 
                . . . . . . . b . . . . . . . . 
                . . . . . . . b . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, value, 0, -120)
            if (Math.percentChance(50)) {
                if (player1.x >= projectile.x) {
                    projectile.vx = 50
                } else {
                    projectile.vx = -50
                }
            } else {
                if (player2.x >= projectile.x) {
                    projectile.vx = 50
                } else {
                    projectile.ax = -50
                }
            }
            projectile.setKind(SpriteKind.niga_star)
            projectile.setFlag(SpriteFlag.AutoDestroy, false)
            animation.runImageAnimation(
            projectile,
            [img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . b . . . . . . . . 
                . . . . . . . b . . . . . . . . 
                . . . . . . . b . . . . . . . . 
                . . . . b b b b b b b . . . . . 
                . . . . . . . b . . . . . . . . 
                . . . . . . . b . . . . . . . . 
                . . . . . . . b . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . b . . . . . . . 
                . . . . . . . . b . . . . . . . 
                . . . . b b b . b . . . . . . . 
                . . . . . . . b . . . . . . . . 
                . . . . . . b . b b b . . . . . 
                . . . . . . b . . . . . . . . . 
                . . . . . . b . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . b . . . . . b . . . . . 
                . . . . . b . . . b . . . . . . 
                . . . . . . b . b . . . . . . . 
                . . . . . . . b . . . . . . . . 
                . . . . . . b . b . . . . . . . 
                . . . . . b . . . b . . . . . . 
                . . . . b . . . . . b . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `],
            100,
            true
            )
            projectile.ay = 100
        }
        pause(200)
    }
    pause(500)
    for (let value of sprites.allOfKind(SpriteKind.nijua)) {
        for (let index = 0; index < 3; index++) {
            for (let index = 0; index < 16; index++) {
                value.y += -1
                pause(1)
            }
        }
    }
})
