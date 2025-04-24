import { Container, ContainerOptions } from "pixi.js";

export default class Scene extends Container{
    constructor(options?: ContainerOptions)
    {
        super(options);
    }

    public update(delta: number): void
    {
        console.log(delta);
    }
}