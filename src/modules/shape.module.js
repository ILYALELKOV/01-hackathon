import {Module} from "../core/module"
import {menuElementHTML} from "../menu"
import {getRandomColor, random} from "../utils"

export class ShapeModule extends Module {
    trigger() {
        menuElementHTML.addEventListener('click', event => {

            const [innerWidth, innerHeight] = [
                window.innerWidth,
                window.innerHeight,
            ]
            const [randomWidth, randomHeight] = [
                random(100, 300),
                random(100, 300),
            ]

            if (event.target.dataset.type === "shape") {
                const createElement = document.createElement("div")
                createElement.style.borderRadius =
                    random(30, 50).toString() + "px"
                createElement.style.width = randomWidth + "px"
                createElement.style.height = randomHeight + "px"
                createElement.style.background = getRandomColor()

                createElement.style.position = "absolute"
                createElement.style.left =
                    random(0, innerWidth - randomWidth) + "px"

                createElement.style.top =
                    random(0, innerHeight - randomHeight) + "px"

                document.body.append(createElement)

                setTimeout(() => {
                    createElement.remove()
                }, 2000)
            }
        })
    }
}


