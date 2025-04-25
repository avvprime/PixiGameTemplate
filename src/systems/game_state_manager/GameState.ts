import State from "../state_manager/State";
import { GameStateManager } from "./GameStateManager";

export default class GameState extends State<GameState>{
    constructor(manager: GameStateManager)
    {
        super(manager);
    }

    public enter(): void
    {

    }

    public exit(): void
    {

    }
}