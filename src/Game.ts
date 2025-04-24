import { Application } from 'pixi.js'   
import { GameStateManager, GameStates} from './systems/game_state_manager/GameStateManager';

import { EventBus } from './systems/event_bus/EventBus';

export default class Game{

    private _app: Application = new Application();
    private _gameStateManager: GameStateManager = new GameStateManager();

    constructor()
    {
        EventBus.instance.on('game-splash-state-entered', this.test);
    }

    public async init(): Promise<void>
    {
        await this._app.init({
            background: "#dddddd",
            resizeTo: window
        });

        document.body.appendChild(this._app.canvas);

        this._gameStateManager.init(GameStates.SPLASH);
    }

    public test(): void
    {
        console.log("test function works");
        
    }
}