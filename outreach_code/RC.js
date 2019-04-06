radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 3) {
        pins.digitalWritePin(DigitalPin.P0, 1)
        pins.digitalWritePin(DigitalPin.P1, 1)
    } else if (receivedNumber == 2) {
        pins.digitalWritePin(DigitalPin.P1, 1)
        pins.digitalWritePin(DigitalPin.P0, 0)
    } else if (receivedNumber == 1) {
        pins.digitalWritePin(DigitalPin.P1, 0)
        pins.digitalWritePin(DigitalPin.P0, 1)
    } else {
        pins.digitalWritePin(DigitalPin.P1, 0)
        pins.digitalWritePin(DigitalPin.P0, 0)
    }
})
radio.setGroup(1)
radio.setTransmitPower(7)
basic.forever(function () {
    if (input.buttonIsPressed(Button.AB)) {
        radio.sendNumber(3)
    } else if (input.buttonIsPressed(Button.A) && !(input.buttonIsPressed(Button.B))) {
        radio.sendNumber(2)
    } else if (input.buttonIsPressed(Button.B) && !(input.buttonIsPressed(Button.A))) {
        radio.sendNumber(1)
    } else {
        radio.sendNumber(0)
    }
})
