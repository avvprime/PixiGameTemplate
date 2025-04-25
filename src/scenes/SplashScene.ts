import { ContainerOptions } from "pixi.js";
import Scene from "./Scene";

export default class SplashScene extends Scene{
    constructor(options?: ContainerOptions)
    {
        super(options);
        console.log("Splash Scene Here");
        
    }
}