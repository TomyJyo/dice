input.onButtonPressed(Button.A, function () {
    customEditor.addMemo("サイコロ数の切替")
    if (int_1or2 == 2) {
        int_1or2 = 1
        basic.showLeds(`
            . . . . .
            . # # # .
            . # . # .
            . # # # .
            . . . . .
            `)
    } else {
        int_1or2 = 2
        basic.showLeds(`
            . . # # #
            . . # . #
            # # # # #
            # . # . .
            # # # . .
            `)
    }
})
input.onButtonPressed(Button.B, function () {
    customEditor.addMemo("１個のサイコロを振った時の出目を模倣")
    if (int_1or2 == 1) {
        int_OutNum = randint(1, 6)
        basic.showString("" + (int_OutNum))
        music._playDefaultBackground(music.builtInPlayableMelody(Melodies.PowerUp), music.PlaybackMode.UntilDone)
    } else {
        customEditor.addMemo("２個のサイコロを振った時の出目を模倣")
        str_OutNum1 = convertToText(randint(1, 6))
        str_OutNum2 = convertToText(randint(1, 6))
        whaleysans.showNumber(parseFloat("" + str_OutNum1 + str_OutNum2))
        music._playDefaultBackground(music.builtInPlayableMelody(Melodies.JumpUp), music.PlaybackMode.UntilDone)
    }
})
let str_OutNum2 = ""
let str_OutNum1 = ""
let int_OutNum = 0
let int_1or2 = 0
int_1or2 = 2
basic.showLeds(`
    . . # # #
    . . # . #
    # # # # #
    # . # . .
    # # # . .
    `)
