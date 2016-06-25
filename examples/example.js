var PromiseQueue = require('./../dist').default;

let a = [];

a.push(function(results) {
  return new Promise((resolve, reject) => {
    results.name = 'joe';
    resolve(results)
  })
})
a.push(function(results) {
  return new Promise((resolve, reject) => {
    results.age = 22
    resolve(results)
  })
})

promiseQueue = new PromiseQueue(a)

let startObj ={start: 'end'}
promiseQueue.run(startObj)
.then(function(results){
  console.log(results)
})
