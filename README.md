# `All my NPM packages`
[![circleci](https://img.shields.io/circleci/project/github/peeter-tomberg/npm/master.svg)](https://circleci.com/gh/peeter-tomberg/npm/tree/master)
[![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg)](https://lernajs.io/)
[![typescript](https://img.shields.io/badge/typescript-friendly-blue.svg)](https://www.typescriptlang.org//)

> Basically a monorepository of all my NPM projects written in typescript

# Features

1. Works with Typescript + TSLint
2. Works with Lerna
3. Works with Jest
4. Releases packages automatically from master branch using semantic-release 

# Scripts

| Script      	| Description                                               	|
|-------------	|-----------------------------------------------------------	|
| lint        	| Lints all your packages                                   	|
| build       	| Builds all your packages                                  	|
| build:watch 	| Builds and watches all your packages                      	|
| test        	| Runs all tests in all packages                            	|
| test:watch  	| Runs all tests and waits for code changes in all packages 	|