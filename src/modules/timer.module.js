import {Module} from '../core/module'
import {menuElementHTML} from '../menu'

export class TimerModule extends Module {
    trigger() {
        let flagTime = false

        menuElementHTML.addEventListener('click', event => {
            if (event.target.dataset.type === 'timer' && !flagTime) {
                let counter = Number(prompt(`Введите время в секундах`).trim())

                if (isNaN(counter) || counter === Infinity) {
                    swal('Пожалуйста введите числовое значение!')
                } else {
                    flagTime = true

                    const timerElement = document.createElement('div')
                    timerElement.style.width = '400px'
                    timerElement.style.height = '250px'
                    timerElement.style.borderRadius = '15px'
                    timerElement.style.color = '#f80000'
                    timerElement.style.textShadow = '1px 1px 2px #000'
                    timerElement.style.fontWeight = '800'
                    timerElement.style.fontSize = '32px'
                    timerElement.style.textAlign = 'center'
                    timerElement.style.lineHeight = '65px'
                    timerElement.style.margin = '0 auto'
                    timerElement.style.boxShadow = '0 8px 2px #000'
                    timerElement.style.background = 'url(../src/img/time.jpg)'
                    timerElement.style.borderStyle = 'groove'

                    const observerTime = setInterval(() => {
                        document.body.prepend(timerElement)
                        timerElement.textContent = `Осталось секунд: ${counter}`

                        if (counter === 0) {
                            timerElement.remove()
                            clearInterval(observerTime)
                            flagTime = false
                            swal('Время вышло!')
                        }
                        counter -= 1
                    }, 1000)
                }
            }
        })
    }
}