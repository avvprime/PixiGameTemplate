import GameState from "../GameState";
import { GameStateManager, GameStates } from "../GameStateManager";

export default class GameSplashState extends GameState{
    constructor(manager: GameStateManager)
    {
        super(manager);
    }

    public enter(): void
    {
        console.log("Game Splash State Entered");
        //EventBus.instance.emit(GameStateEvents.SPLASH_STATE_ENTERED);
        this._manager.changeState(GameStates.INTRO);

    }

    public exit(): void
    {
        console.log("Game Splash State Exited");
    }
}