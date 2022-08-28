import './styles.css'
import {ContextMenu} from "./menu";

const contex = new ContextMenu()
contex.open()
contex.close()
contex.add()











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