import { EventBus, GameStateEvents} from "../event_bus/EventBus";
import SplashScene from "../../scenes/SplashScene";
import { Container } from "pixi.js";

export class SceneManager{

    private _scenes: ReadonlyMap<string, Function> = new Map<string, Function>([
        ['splash-scene', () => new SplashScene()],
    ]);

    private _stage: Container;
    private _scene!: Container;


    constructor(stage: Container)
    {
        this._stage = stage;

        EventBus.instance.on(GameStateEvents.SPLASH_STATE_ENTERED, this.onGameSplashStateEntered.bind(this));
    }

    private onGameSplashStateEntered(): void
    {
        this.changeSceneTo('splash-scene');
    }

    private changeSceneTo(scene: string): void
    {
        if (this._scene) this._stage.removeChild(this._scene);
        this._scene = this._scenes.get(scene)!();
        this._stage.addChild(this._scene);
    }
}