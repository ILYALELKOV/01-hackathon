import {Menu} from './core/menu'
import {getRandomColor} from "./utils";
import {Module} from "./core/module";
import {BackgroundModule} from "./modules/background.module";

export const menuElementHTML = document.querySelector('.menu')

export class ContextMenu extends Menu {
    open() {
        document.addEventListener('contextmenu', event => {
            event.preventDefault()
            menuElementHTML.classList.add('open')
            menuElementHTML.style.top = `${event.clientY}px`
            menuElementHTML.style.left = `${event.clientX}px`
        })
    }

    close() {
        document.addEventListener('click', event => {
            if (event.button !== 2) {
                menuElementHTML.classList.remove('open')
            }
        })

        menuElementHTML.addEventListener('click', event => {
            event.stopPropagation()
        })
    }

    add() {
        const backgroundModule = new BackgroundModule('background', 'Поменять цвет')
        menuElementHTML.innerHTML += backgroundModule.toHTML()
        backgroundModule.trigger()
    }
}