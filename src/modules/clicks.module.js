import {Module} from '../core/module'
import {menuElementHTML} from "../menu";
import {getRandomColor} from "../utils";

export class ClicksModule extends Module {
    trigger() {
        let count1 = 0
        let count2 = 0

        document.body.addEventListener('click', event => {
            count1 += 1
            console.log(count1)
        })

        document.body.addEventListener('dblclick', event => {
            count2 += 1
            console.log(count2)
        })

        // let qwe = 30
        //
        // setInterval(() => {
        //     qwe -= 1
        //     console.log(qwe)
        // },1000)

        const elementBlock = document.createElement('div')
    }
}