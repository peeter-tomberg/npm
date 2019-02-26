const registry = require("@peetertomberg/registry");
const instance = registry.createRegistry();
const callback = (...args) => console.log(...args);

// Triggered when a key is registered
instance.eventBus.on(instance.events.REGISTER, callback);
// Triggered when a key is unregistered
instance.eventBus.on(instance.events.UNREGISTER, callback);

console.log('Will log out key and value to console from event register');
instance.register('key', 'value');
console.log('Will log out key from event unregister');
instance.unregister('key');