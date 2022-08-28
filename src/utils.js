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

export function beep(gz) {
    let ctx = new AudioContext()
    let oscillator = ctx.createOscillator()
    oscillator.frequency.value = gz
    oscillator.connect(ctx.destination)
    oscillator.start()
    oscillator.stop(0.5)
}



