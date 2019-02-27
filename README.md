# `All my NPM packages`
[![circleci](https://img.shields.io/circleci/project/github/peeter-tomberg/npm/master.svg)](https://circleci.com/gh/peeter-tomberg/npm/tree/master)
[![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg)](https://lernajs.io/)
[![typescript](https://img.shields.io/badge/typescript-friendly-informational.svg)](https://www.typescriptlang.org//)
[![semantic-release](https://img.shields.io/badge/released%20with-semantic--release-important.svg)](https://www.typescriptlang.org//)

> Basically a monorepository of all my NPM projects written in typescript, each one
> semantically released.

# Scripts

| Script      	| Description                                               	|
|-------------	|-----------------------------------------------------------	|
| lint        	| Lints all your packages                                   	|
| build       	| Builds all your packages                                  	|
| build:watch 	| Builds and watches all your packages                      	|
| test        	| Runs all tests in all packages                            	|
| test:watch  	| Runs all tests and waits for code changes in all packages 	|

# Packages

| Package                         	| Description                                                                  	| NPM                                                           	|
|---------------------------------	|------------------------------------------------------------------------------	|---------------------------------------------------------------	|
| [registry](packages/registry) 	  | Basically a library to create a typed key-value store with an event emitter. 	| [Link](https://www.npmjs.com/package/@peetertomberg/registry) 	|