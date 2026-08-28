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

export class CodedError extends Error {
  constructor(code, message) {
    super(message);
    this.code = code;
  }
}

export class UnavailabilityError extends Error {
  constructor(moduleName, propertyName) {
    super(`${moduleName}.${propertyName} is not available on web`);
    this.code = 'ERR_UNAVAILABLE';
  }
}

export const Platform = {
  OS: 'web',
  Version: 0,
  select: (obj) => obj.web ?? obj.default ?? undefined,
  isPad: false,
  isTVOS: false,
  isTV: false,
};

const noop = () => {};
const noopModule = new Proxy({}, { get: () => noop });

export function requireNativeModule() { return noopModule; }
export function requireOptionalNativeModule() { return null; }
export function requireNativeViewManager() { return () => null; }
export function registerWebModule(cls) { return new cls(); }
export function createSnapshotFriendlyRef() { return { current: null }; }
export function ensureNativeModulesAreInstalled() {}
export function reloadAppAsync() { return Promise.resolve(); }

export const NativeModulesProxy = new Proxy({}, { get: () => noop });

export const EventsMap = {};
export const EventSubscription = {};
