# `registry`
[![circleci](https://img.shields.io/circleci/project/github/peeter-tomberg/npm/master.svg)](https://circleci.com/gh/peeter-tomberg/npm/tree/master)
[![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg)](https://lernajs.io/)
[![typescript](https://img.shields.io/badge/typescript-friendly-blue.svg)](https://www.typescriptlang.org//)

> Basically a library to create a typed key-value store with an event emitter.

## Install

> npm install @peetertomberg/registry

## Usage

[![Try on RunKit](https://badge.runkitcdn.com/@peetertomberg/registry.svg)](https://npm.runkit.com//@peetertomberg/registry)

```typescript
  import { createRegistry } from '@peetertomberg/registry';
  
  const registry = createRegistry<String>();
  const callback = (...args) => console.log(...args);
  
  // Triggered when a key is registered
  registry.eventBus.on(registry.events.REGISTER, callback);
  // Triggered when a key is unregistered
  registry.eventBus.on(registry.events.UNREGISTER, callback);
  
  registry.register('key', 'value');
  registry.unregister('key');
```
