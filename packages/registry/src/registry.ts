import { TinyEmitter } from 'tiny-emitter';

export type Registry<T>= {
  register: (key: string, value: T) => void;
  unregister: (key: string) => void;
  get: (key: string) => T | undefined;
  eventBus: TinyEmitter,
  events: {
    REGISTER: string;
    UNREGISTER: string;
  }
};

export function createRegistry<T>(): Registry<T> {
  const registry = new Map<string, T>();
  const eventBus = new TinyEmitter();
  const events = {
    REGISTER: 'REGISTER',
    UNREGISTER: 'UNREGISTER',
  };

  const register = (key: string, value: T): void => {
    registry.set(key, value);
    eventBus.emit(events.REGISTER, { key, value });
  };

  const unregister = (key: string): void => {
    registry.delete(key);
    eventBus.emit(events.UNREGISTER, { key });
  };

  const get = (key: string): T | undefined => registry.get(key);

  return { register, unregister, get, eventBus, events };
}
