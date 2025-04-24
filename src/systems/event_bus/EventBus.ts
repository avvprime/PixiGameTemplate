import EventEmitter from "eventemitter3";

export class EventBus{

    static _instance: EventBus;

    private _eventEmitter: EventEmitter = new EventEmitter();

    private constructor() {}

    static get instance(): EventBus
    {
        if (!this._instance) this._instance = new EventBus();

        return this._instance;
    }

    on(event: string, callback: (...args: any[]) => void): void
    {
        this._eventEmitter.on(event, callback);
    }

    off(event: string, callback: (...args: any[]) => void): void
    {
        this._eventEmitter.off(event, callback);
    }

    emit(event: string, ...args: any[]): void
    {
        this._eventEmitter.emit(event, args);
    }

}

