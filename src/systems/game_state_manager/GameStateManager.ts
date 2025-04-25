import GameState from "./GameState";
import StateManager from "../state_manager/StateManager";

import GameSplashState from "./states/GameSplashState";
import GameIntroState from "./states/GameIntroState";

export enum GameStates{
    SPLASH,
    INTRO,
}

export class GameStateManager extends StateManager<GameState>{

    constructor()
    {
        super();

        this._stateMap = new Map<GameStates, GameState>();
        this._stateMap.set(GameStates.SPLASH, new GameSplashState(this));
        this._stateMap.set(GameStates.INTRO, new GameIntroState(this));
    }

}