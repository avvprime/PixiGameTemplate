import State from "./State";

export default abstract class StateManager<T extends State<T>>{

    protected _state!: T;
    protected _stateMap!: Map<number, T>;

    public init(state: number): void
    {
        this._state = this._stateMap.get(state)!;
        this._state.enter();
    }

    public changeState(state: number): void
    {
        this._state.exit();
        this._state = this._stateMap.get(state)!;
        this._state.enter();
    }


    
}