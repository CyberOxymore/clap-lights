input.onSound(DetectedSound.Loud, function () {
    light_on = !(light_on)
    if (light_on) {
        basic.showLeds(`
            # # # # #
            # . . . #
            # . . . #
            # . . . #
            # # # # #
            `)
    } else {
        basic.clearScreen()
    }
})
let light_on = false
input.setSoundThreshold(SoundThreshold.Loud, 150)
basic.forever(function () {
	
})
