import { Application } from 'pixi.js'   
import { GameStateManager, GameStates} from './systems/game_state_manager/GameStateManager';


export default class Game{

    private _app: Application = new Application();
    private _gameStateManager: GameStateManager = new GameStateManager();

    constructor()
    {

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
}