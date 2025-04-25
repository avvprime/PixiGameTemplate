import StateManager from "./StateManager";

export default abstract class State<T extends State<T>>{
    
    protected _manager: StateManager<T>;

    constructor(manager: StateManager<T>)
    {
        this._manager = manager;

        void this._manager;
    }

    public abstract enter(): void

    public abstract exit(): void
    
}