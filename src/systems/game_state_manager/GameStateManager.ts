import GameState from "./GameState";
import StateManager from "../state_manager/StateManager";
import GameSplashState from "./states/GameSplashState";

export enum GameStates{
    SPLASH,
    MENU,
}

export class GameStateManager extends StateManager<GameState>{

    constructor()
    {
        super();

        this._stateMap = new Map<GameStates, GameState>();
        this._stateMap.set(GameStates.SPLASH, new GameSplashState());
    }

}