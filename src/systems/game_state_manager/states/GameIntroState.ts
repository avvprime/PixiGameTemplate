import GameState from "../GameState";
import { GameStateManager } from "../GameStateManager";

export default class GameIntroState extends GameState{

    constructor(manager: GameStateManager)
    {
        super(manager);
    }

    public enter(): void
    {
        console.log("Game Intro State Entered");
    }

    public exit(): void
    {
        console.log("Game Intro State exited");
    }
}