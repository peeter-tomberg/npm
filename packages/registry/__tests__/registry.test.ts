'use strict';

import { createRegistry, Registry } from '../';

describe('registry', () => {
    let registry: Registry<String>;
    beforeEach(() => {
        registry = createRegistry<String>();
    });
    it('should emit an event when you register an item in the registry', () => {
        const callback = jest.fn();
        registry.eventBus.on(registry.events.REGISTER, callback);
        registry.register('key', 'value');
        expect(callback).toHaveBeenCalledWith({ key: 'key', value: 'value' });
    });
    it('should emit an event when you unregister an item in the registry', () => {
        const callback = jest.fn();
        registry.eventBus.on(registry.events.UNREGISTER, callback);
        registry.unregister('key');
        expect(callback).toHaveBeenCalledWith({ key: 'key' });
    });
});
