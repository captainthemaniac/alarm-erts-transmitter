// Send the number codes through the radio transmission
input.onButtonPressed(Button.A, function () {
    radio.sendNumber(broadcastCode)
})
// Add the number codes by one
input.onButtonPressed(Button.B, function () {
    broadcastCode += 1
})
/**
 * At the start, we have the value of the number codes of 0
 */
let broadcastCode = 0
broadcastCode = 0
