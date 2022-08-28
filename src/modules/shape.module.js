import {Module} from '../core/module'
import {menuElementHTML} from '../menu'
import {getRandomColor, random} from "../utils"

export class ShapeModule extends Module {
    trigger() {
        menuElementHTML.addEventListener('click', event => {
            if (event.target.dataset.type === 'shape') {
                const createElement = document.createElement('div')
                createElement.style.borderRadius = random('10', '100').toString() + 'px'
                createElement.style.width = random('100', '400').toString() + 'px'
                createElement.style.height = random('100', '500').toString() + 'px'
                createElement.style.background = getRandomColor()
                createElement.style.position = 'relative'
                createElement.style.top = random('100', '500') + 'px'
                createElement.style.right = random('100', '2500') + 'px'
                createElement.style.left = random('100', '2500') + 'px'
                createElement.style.bottom = random('100', '500') + 'px'

                document.body.append(createElement)

                setTimeout(() => {
                    createElement.remove()
                }, 1500)
            }
        })
    }
}


