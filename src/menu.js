import {Menu} from './core/menu'
import {getRandomColor} from "./utils"
import {Module} from "./core/module"
import {BackgroundModule} from "./modules/background.module"
import {ShapeModule} from "./modules/shape.module"
import {ClicksModule} from "./modules/clicks.module"
import {RandomSound} from './modules/sound.module'
import {Random_message} from "./modules/random_message.module"
import {SearchModule} from "./modules/search.module";

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

        // menuElementHTML.addEventListener('click', event => {
        //     event.stopPropagation()
        // })
    }

    add() {
        const backgroundModule = new BackgroundModule('background', 'Поменять цвет')
        menuElementHTML.innerHTML += backgroundModule.toHTML()
        backgroundModule.trigger()

        const shapeModule = new ShapeModule('shape', 'Создать фигуру')
        menuElementHTML.innerHTML += shapeModule.toHTML()
        shapeModule.trigger()

        const clicksModule = new ClicksModule('clicks', 'Аналитика кликов')
        menuElementHTML.innerHTML += clicksModule.toHTML()
        clicksModule.trigger()

        const randomSound = new RandomSound('random-sound', 'Случайный звук')
        menuElementHTML.innerHTML += randomSound.toHTML()
        randomSound.trigger()

        const randomMessage = new Random_message('random-message', 'Анекдот')
        menuElementHTML.innerHTML += randomMessage.toHTML()
        randomMessage.trigger()

        const search = new SearchModule('search', 'Запустить поиск')
        menuElementHTML.innerHTML += search.toHTML()
        search.trigger()
    }
}