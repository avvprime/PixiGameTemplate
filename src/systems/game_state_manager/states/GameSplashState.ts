import GameState from "../GameState";

export default class GameSplashState extends GameState{
    constructor()
    {
        super();
    }

    public enter(): void
    {
        console.log("Game Splash State Entered");
    }

    public exit(): void
    {
        console.log("Game Splash State Exited");
    }
}