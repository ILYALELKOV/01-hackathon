import './styles.css'
import {ContextMenu} from "./menu"

const contex = new ContextMenu()
contex.open()
contex.close()
contex.add()

// создаем аудио контекст
let audioCtx = new (window.AudioContext || window.webkitAudioContext)()

// создаем OscillatorNode - генератор
let oscillator = audioCtx.createOscillator()

oscillator.type = 'square'
// задаем частоту в герцах
oscillator.frequency.setValueAtTime(440, audioCtx.currentTime)
oscillator.connect(audioCtx.destination)

// запускаем пищалку
oscillator.start()
// говорим "горшочек не вари" через 300 мс
setTimeout(e => oscillator.stop(), 1000)


//function getRandomArrayElement(array) {
//    const randomIndex = Math.floor(Math.random() * array.length);
//    return array[randomIndex];
//  }
//  
//  const GET_URL =  "https://pixabay.com/id/sound-effects/search/api/"
//
//  async function getSound(){
//
//      const response = await fetch(GET_URL)
//      console.log(response)
//      const toDos = await response.json()
//      //const randomSound = getRandomArrayElement(toDos)
//      //return randomSound
//    
//  }
//
//  getSound()