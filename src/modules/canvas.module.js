import { Module } from "../core/module";
import { menuElementHTML } from "../menu";
import { getRandomColor, random } from "../utils";

export class CanvasModule extends Module {
	trigger() { 
        
		menuElementHTML.addEventListener("click", (event) => {
			if (event.target.dataset.type === "canvas") {
				const k = Math.random() * 3.5 + 0.5;
                const duration = 0.3; 
                const delay = 2; 
                
				const [innerWidth, innerHeight] = [
					window.innerWidth,
					window.innerHeight,
				];

                const [canvasWidth, canvasHeight] = [100 * k, 100 * k]; 
				let canvas, ctx;			
                canvas = document.createElement("canvas");
				canvas.width = canvasWidth;
				canvas.height = canvasHeight;

				canvas.style.opacity = 0;
				canvas.style.transition = `All ${duration}s`; 

				ctx = canvas.getContext("2d");  
				ctx.fillStyle = getRandomColor(); 
				ctx.beginPath(); 

				for (let i = 0; i < Math.round(Math.random() * 27 + 4); i++) {
					const [ranX, ranY] = [
						Math.random() * canvasWidth,
						Math.random() * canvasHeight,
					];
					ctx.lineTo(ranX, ranY); 
				}
				ctx.fill();
				ctx.closePath(); 

                
				canvas.style.position = "absolute";
				canvas.style.left = `${
					Math.random() * (innerWidth - canvasWidth) 
				}px`;
				canvas.style.top = `${
					Math.random() * (innerHeight - canvasHeight)
				}px`;

               
				document.body.appendChild(canvas);

				setTimeout(() => {
					canvas.style.opacity = 1;
					setTimeout(() => {
						canvas.style.opacity = 0;
						setTimeout(() => {
							canvas.remove();
						}, duration * 1000);
					}, (duration + delay)* 1000);
				}, 0);
			}
		});
	}
}
