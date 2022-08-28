import {Module} from '../core/module'
import {getRandomColor} from "../utils"
import {menuElementHTML} from '../menu'

export class Random_message extends Module {
    trigger() {
        const arrayMessage = [
            'Мой друг гинеколог. Он шарит в женщинах.',
            'Риск - попытка пернуть при поносе',
            'В загсе не моют окна - потому что остаются разводы',
            'Я научу вас зарабатывать по миллиону в месяц. А дальше будете таксовать для души',
            'Батарейки "Сын прокурора" никогда не сядут!'
        ]
        let flag = false

        menuElementHTML.addEventListener('click', event => {
            if (event.target.dataset.type === 'random-message' && arrayMessage.length !== 0 && !flag) {
                flag = true

                const messageElement = document.createElement('div')
                messageElement.style.background = '#1E90FF'
                messageElement.style.width = '400px'
                messageElement.style.height = '200px'
                messageElement.style.fontSize = '25px'
                messageElement.style.textAlign = 'center'
                messageElement.style.paddingTop = '60px'
                messageElement.style.borderRadius = '20px'
                messageElement.style.fontWeight = '500'
                messageElement.style.boxShadow = '0 8px 2px #000'
                messageElement.style.borderStyle = 'groove'

                arrayMessage.forEach(item => messageElement.textContent = item)
                arrayMessage.pop()

                document.body.append(messageElement)

                setTimeout(() => {
                    messageElement.remove()
                    flag = false
                    if (arrayMessage.length === 0) {
                        swal(`Сожалеем, но анекдоты закончились, перезагрузите страницу`)
                    }
                }, 5000)
            }
        })
    }
}