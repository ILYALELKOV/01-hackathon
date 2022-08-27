import {Module} from '../core/module'
import {getRandomColor} from "../utils";
import {menuElementHTML} from '../menu'


export class BackgroundModule extends Module {
    trigger() {
        menuElementHTML.addEventListener('click', event => {
            if (event.target.dataset.type === 'background') {
                document.body.style.background = getRandomColor()
            }
        })
    }
}