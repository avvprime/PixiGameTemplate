import GameState from "../GameState";
import { EventBus } from "../../event_bus/EventBus";

export default class GameSplashState extends GameState{
    constructor()
    {
        super();
    }

    public enter(): void
    {
        console.log("Game Splash State Entered");
        EventBus.instance.emit('game-splash-state-entered');
    }

    public exit(): void
    {
        console.log("Game Splash State Exited");
    }
}