import { Application } from 'pixi.js'   
import { GameStateManager, GameStates} from './systems/game_state_manager/GameStateManager';
import { UIManager } from './systems/ui_manager/UIManager';
import { SceneManager } from './systems/scene_manager/SceneManager';


export default class Game{

    private _app: Application = new Application();
    private _gameStateManager: GameStateManager = new GameStateManager();
    private _uiManager: UIManager = new UIManager();
    private _sceneManager: SceneManager = new SceneManager(this._app.stage);

    constructor()
    {
        // Just to remove warnings
        void this._uiManager;
        void this._sceneManager;
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