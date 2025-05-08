import EventEmitter from "eventemitter3";

export enum GameStateEvents {
    SPLASH_STATE_ENTERED = 'game-splash-state-entered',
    SPLASH_STATE_EXITED = 'game-splash-state-exited'
}

export class EventBus{

    static _instance: EventBus;
    
    private _eventEmitter: EventEmitter = new EventEmitter();

    private constructor() {}

    static get instance(): EventBus
    {
        if (!this._instance) this._instance = new EventBus();

        return this._instance;
    }

    on(event: number, callback: (...args: any[]) => void): void
    {
        this._eventEmitter.on(event, callback);
    }

    off(event: number, callback: (...args: any[]) => void): void
    {
        this._eventEmitter.off(event, callback);
    }

    emit(event: number, ...args: any[]): void
    {
        this._eventEmitter.emit(event, args);
    }

}

