import EventEmitter from "eventemitter3";

export enum GameStateEvents {
    SPLASH_STATE_ENTERED,
    SPLASH_STATE_EXITED
}

export class EventBus{

    static _instance: EventBus;
    
    private _eventEmitter: EventEmitter = new EventEmitter();
    private _gameStateEventsMap: ReadonlyMap<number, string> = new Map<number, string>([
        [GameStateEvents.SPLASH_STATE_ENTERED, 'game-splash-state-entered'],
        [GameStateEvents.SPLASH_STATE_EXITED, 'game-splash-state-exited'],
    ]);


    private constructor() {}

    static get instance(): EventBus
    {
        if (!this._instance) this._instance = new EventBus();

        return this._instance;
    }

    on(event: number, callback: (...args: any[]) => void): void
    {
        this._eventEmitter.on(this._gameStateEventsMap.get(event)!, callback);
    }

    off(event: number, callback: (...args: any[]) => void): void
    {
        this._eventEmitter.off(this._gameStateEventsMap.get(event)!, callback);
    }

    emit(event: number, ...args: any[]): void
    {
        this._eventEmitter.emit(this._gameStateEventsMap.get(event)!, args);
    }

}

