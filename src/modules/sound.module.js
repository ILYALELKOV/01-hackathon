import { Module } from "../core/module";
import {getRandomSound} from "../utils";
import {menuElementHTML} from '../menu'

export class RandomSound extends Module {
	trigger() {
		menuElementHTML.addEventListener("click", (event) => {
			if (event.target.dataset.type === "random-sound") {
				getRandomSound();
			}
		});
	}
}
