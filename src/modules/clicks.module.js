import {Module} from '../core/module'
import {menuElementHTML} from "../menu"
import {getRandomColor} from "../utils"

export class ClicksModule extends Module {
    trigger() {
        let click = 0
        let dblclick = 0
        let flag = false

        document.body.addEventListener('click', () => {
            click += 1
        })

        document.body.addEventListener('dblclick', () => {
            dblclick += 1
        })

        menuElementHTML.addEventListener('click', event => {
            if (event.target.dataset.type === 'clicks' && !flag) {
                flag = true

                // const elementBlock = document.createElement('div')

                const elementBlockTimer = document.createElement('div')
                elementBlockTimer.style.width = '400px'
                elementBlockTimer.style.height = '250px'
                elementBlockTimer.style.borderRadius = '15px'
                elementBlockTimer.style.color = '#ffffff'
                elementBlockTimer.style.textShadow = '2px -2px 1px #00008B'
                elementBlockTimer.style.fontWeight = '800'
                elementBlockTimer.style.fontSize = '38px'
                elementBlockTimer.style.textAlign = 'center'
                elementBlockTimer.style.lineHeight = '65px'
                elementBlockTimer.style.margin = '0 auto'
                elementBlockTimer.style.boxShadow = '0 8px 2px #000'
                elementBlockTimer.style.background = 'url(../src/img/time.jpg)'

                // elementBlock.append(elementBlockTimer)
                document.body.prepend(elementBlockTimer)

                let timer = 30
                swal(`Проверим твою реакцию? Сейчас тебе нужно набрать максимальное число кликов. Скорее, время уже идет)`)

                setInterval(() => {
                    elementBlockTimer.textContent = `Осталось: ${timer}`

                    if (timer === 0) {
                        elementBlockTimer.remove()
                        swal(`Поздравляем! Твои результаты: одинарный клик = ${click}; двойной клик = ${dblclick}`)
                        click = 0
                        dblclick = 0
                        flag = false
                    }
                    timer -= 1
                }, 1000)
            }
        })
    }
}