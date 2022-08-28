import {async} from "regenerator-runtime"

export function random(min, max) {
    return Math.round(min - 0.5 + Math.random() * (max - min + 1))
}

export function getRandomColor() {
    let color = "#"
    const letters = "0123456789ABCDEF"

    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)]
    }
    return color
}

export function getRandomSound() {
    new Audio(`https://s3.amazonaws.com/freecodecamp/simonSound${Math.round(Math.random() * 4)}.mp3`).play()
}
