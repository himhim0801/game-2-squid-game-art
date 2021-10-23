controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    game.showLongText("Art By Him", DialogLayout.Bottom)
    game.showLongText("Made By Him", DialogLayout.Bottom)
})
scene.setBackgroundImage(assets.image`Squid Game`)
effects.bubbles.startScreenEffect()
music.playMelody("F D F D F E F D ", 120)
