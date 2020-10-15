input.onButtonPressed(Button.A, function on_button_pressed_a() {
    basic.showNumber(count)
})
input.onButtonPressed(Button.AB, function on_button_pressed_ab() {
    
    basic.showNumber(0)
    count = 0
})
input.onButtonPressed(Button.B, function on_button_pressed_b() {
    
    count += 1
    basic.showNumber(count)
})
let count = 0
basic.showNumber(0)
count = 0
