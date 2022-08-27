import { Module } from "../core/module";
import {beep, random} from "../utils";
import {menuElementHTML} from '../menu'


export class RandomSound extends Module {
	trigger() {
		menuElementHTML.addEventListener("click", (event) => {
            let gz = random(10, 1500)
			if (event.target.dataset.type === "random-sound") {
				beep(gz);
			}
		});
	}
}
