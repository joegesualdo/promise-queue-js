## promise-queue [![Build Status](https://travis-ci.org/joegesualdo/promise-queue-js.svg?branch=master)](https://travis-ci.org/joegesualdo/promise-queue-js)
> Syncronously run promises.

## Install
```
$ npm install --save @joegesualdo/promise-queue
```

## Usage
```javascript
var PromiseQueue = require("@joegesualdo/promise-queue").default

// Create Test Promises
let promises = [];
promises.push(function(results) {
  return new Promise((resolve, reject) => {
    results.name = 'joe';
    resolve(results)
  })
})
promises.push(function(results) {
  return new Promise((resolve, reject) => {
    results.age = 22
    resolve(results)
  })
})

// Initailize the PromiseQueue with an array of promises
promiseQueue = new PromiseQueue(promises)

// Run all the promises syncronously.
promiseQueue.run({})
.then(function(results){
  console.log(results)
})
```

## Test
```
$ npm test
```
## API
### `constructor(promises)`
> Initializes a new PromiseQueue 

| Name | Type | Description |
|------|------|-------------|
| promises | `Array<Promise>` | Array of promises you want to run | 

Returns: `PromiseQueue` 

```javascript
var PromiseQueue = require("@joegesualdo/promise-queue").default

// Create Test Promises
let promises = [];
promises.push(function(results) {
  return new Promise((resolve, reject) => {
    results.name = 'joe';
    resolve(results)
  })
})
promises.push(function(results) {
  return new Promise((resolve, reject) => {
    results.age = 22
    resolve(results)
  })
})

promiseQueue = new PromiseQueue(promises)
```
### `run(startingObj)`
> Runs the promises in the order they appear in the array.

| Name | Type | Description |
|------|------|-------------|
| startingObj | `Object` | The object that will be passed to the first promise;

```javascript
var PromiseQueue = require("@joegesualdo/promise-queue").default

// Create Test Promises
let promises = [];
promises.push(function(results) {
  return new Promise((resolve, reject) => {
    results.name = 'joe';
    resolve(results)
  })
})
promises.push(function(results) {
  return new Promise((resolve, reject) => {
    results.age = 22
    resolve(results)
  })
})

// Initailize the PromiseQueue with an array of promises
promiseQueue = new PromiseQueue(promises)

// Run all the promises syncronously.
promiseQueue.run({})
.then(function(results){
  console.log(results)
})
```
## Build
```
$ npm run build
```
## License
MIT © [Joe Gesualdo]()
