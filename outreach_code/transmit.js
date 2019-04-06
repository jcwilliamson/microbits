radio.onReceivedNumber(function (receivedNumber) {
    if (1 == receivedNumber) {
        images.createImage(`
            . . . . .
            . . . . #
            . . . # .
            # . # . .
            . # . . .
            `).showImage(0)
    } else {
        images.createImage(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `).showImage(0)
    }
})
radio.setGroup(1)
radio.setTransmitPower(7)
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        radio.sendNumber(1)
    } else {
        radio.sendNumber(0)
    }
})
