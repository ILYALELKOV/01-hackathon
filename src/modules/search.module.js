import {Module} from '../core/module'
import {menuElementHTML} from '../menu'

export class SearchModule extends Module {
    trigger() {
        let flagSearch = false

        menuElementHTML.addEventListener('click', event => {
            if (event.target.dataset.type === 'search' && !flagSearch) {
                flagSearch = true

                const blockGoogle = document.createElement('div')

                const formElement = document.createElement('form')
                formElement.target = '_blank'
                formElement.style.textAlign = 'center'
                formElement.style.marginTop = '200px'
                formElement.action = 'https://yandex.ru/search/'

                const inputElement = document.createElement('input')
                inputElement.type = 'text'
                inputElement.name = 'text'
                inputElement.placeholder = 'Введите запрос для поиска'
                inputElement.style.width = '600px'
                inputElement.style.height = '50px'
                inputElement.style.fontSize = '20px'
                inputElement.style.borderRadius = '20px'
                inputElement.style.paddingLeft = '20px'
                inputElement.style.borderStyle = 'none'
                inputElement.style.boxShadow = '0px 3px 3px #000'

                const buttonSearch = document.createElement('button')
                buttonSearch.className = 'button'
                buttonSearch.textContent = 'Яндекс'
                buttonSearch.style.marginLeft = '15px'
                buttonSearch.style.width = '130px'
                buttonSearch.style.height = '50px'
                buttonSearch.style.borderRadius = '20px'
                buttonSearch.style.fontSize = '20px'
                buttonSearch.style.background = '#cc0000'
                buttonSearch.style.borderStyle = 'none'
                buttonSearch.style.color = '#ffffff'
                buttonSearch.style.letterSpacing = '1.5px'
                buttonSearch.style.boxShadow = '0px 3px 3px #000'

                blockGoogle.appendChild(formElement)
                formElement.appendChild(inputElement)
                formElement.appendChild(buttonSearch)
                document.body.append(blockGoogle)

                buttonSearch.addEventListener('mouseenter', () => {
                    buttonSearch.style.background = '#ffcc00'
                })

                buttonSearch.addEventListener('mouseout', () => {
                    buttonSearch.style.background = '#cc0000'
                })

                buttonSearch.addEventListener('mousedown', () => {
                    buttonSearch.style.position = 'relative'
                    buttonSearch.style.top = '3px'
                })

                buttonSearch.addEventListener('mouseleave', () => {
                    buttonSearch.style.position = 'static'
                })
            }
        })
    }
}