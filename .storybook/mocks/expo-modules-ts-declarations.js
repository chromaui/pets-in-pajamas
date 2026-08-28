export class EventEmitter {
  addListener() { return { remove() {} }; }
  removeListener() {}
  removeAllListeners() {}
  emit() {}
  listenerCount() { return 0; }
}

export class NativeModule extends EventEmitter {}

export class SharedObject extends EventEmitter {}

export class SharedRef {}

export const EventsMap = {};
export const EventSubscription = {};
