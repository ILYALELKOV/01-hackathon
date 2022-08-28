import {Module} from '../core/module'
import {menuElementHTML} from '../menu'

export class MapWorld extends Module {
    trigger() {
        menuElementHTML.addEventListener('click', event => {
            if (event.target.dataset.type === 'map') {
                window.open('https://earth3dmap.com/', '_blank')
            }
        })
    }
}