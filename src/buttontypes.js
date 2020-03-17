const BUTTONS = {
    ZERO: {
        type: "number",
        content: "0",
        width: 2,
        className: "button number-button",
    },
    ONE: {
        type: "number",
        content: "1",
        width: 1,
        className: "button number-button",
    },
    TWO: {
        type: "number",
        content: "2",
        width: 1,
        className: "button number-button",
    },
    THREE: {
        type: "number",
        content: "3",
        width: 1,
        className: "button number-button",
    },
    FOUR: {
        type: "number",
        content: "4",
        width: 1,
        className: "button number-button",
    },
    FIVE: {
        type: "number",
        content: "5",
        width: 1,
        className: "button number-button",
    },
    SIX: {
        type: "number",
        content: "6",
        width: 1,
        className: "button number-button",
    },
    SEVEN: {
        type: "number",
        content: "7",
        width: 1,
        className: "button number-button",
    },
    EIGHT: {
        type: "number",
        content: "8",
        width: 1,
        className: "button number-button",
    },
    NINE: {
        type: "number",
        content: "9",
        width: 1,
        className: "button number-button",
    },
    POINT: {
        type: "number",
        content: ".",
        width: 1,
        className: "button number-button",
    },
    CLEAR: {
        type: "clear",
        content: "CLEAR",
        width: 3,
        className: "button clear-button",
    },
    DIVIDE: {
        type: "oper",
        content: "÷",
        width: 1,
        className: "button oper-button",
    },
    MULTIPLY: {
        type: "oper",
        content: "×",
        width: 1,
        className: "button oper-button",
    },
    SUBTRACT: {
        type: "oper",
        content: "-",
        width: 1,
        className: "button oper-button",
    },
    ADD: {
        type: "oper",
        content: "+",
        width: 1,
        className: "button oper-button",
    },
    EQUAL: {
        type: "equal",
        content: "=",
        width: 1,
        className: "button oper-button",
    }
}

const BASIC_LAYOUT = [
    BUTTONS.CLEAR,
    BUTTONS.DIVIDE,
    BUTTONS.SEVEN,
    BUTTONS.EIGHT,
    BUTTONS.NINE,
    BUTTONS.MULTIPLY,
    BUTTONS.FOUR,
    BUTTONS.FIVE,
    BUTTONS.SIX,
    BUTTONS.SUBTRACT,
    BUTTONS.ONE,
    BUTTONS.TWO,
    BUTTONS.THREE,
    BUTTONS.ADD,
    BUTTONS.ZERO,
    BUTTONS.POINT,
    BUTTONS.EQUAL
]

export {
    BUTTONS,
    BASIC_LAYOUT
}