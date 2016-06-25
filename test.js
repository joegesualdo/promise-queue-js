import test from 'ava';
import PromiseQueue from './dist';

test.cb('Runs promises in order', t => {
  t.plan(1)
  const promises = [];
  let testString = '';

  promises.push(() => {
    return new Promise(resolve => {
      testString += 'first'
      resolve();
    });
  });
  promises.push(() => {
    return new Promise(resolve => {
      testString += 'second'
      resolve();
    });
  });
  promises.push(() => {
    return new Promise(resolve => {
      testString += 'third'
      resolve();
    });
  });

  const promiseQueue = new PromiseQueue(promises);

  promiseQueue.run()
  .then(() => {
    t.deepEqual(testString, 'firstsecondthird');
    t.end();
  });
});

test.cb('Concatenates results', t => {
  const promises = [];

  promises.push(results => {
    return new Promise(resolve => {
      results.name = 'joe';
      resolve(results);
    });
  });

  promises.push(results => {
    return new Promise(resolve => {
      results.age = 22;
      resolve(results);
    });
  });

  const promiseQueue = new PromiseQueue(promises);

  promiseQueue.run()
  .then(results => {
    t.deepEqual(results, { name: 'joe', age: 22 });
    t.end();
  });
});

test.cb('Concatenates with starting object', t => {
  const promises = [];

  promises.push(results => {
    return new Promise(resolve => {
      results.name = 'joe';
      resolve(results);
    });
  });

  promises.push(results => {
    return new Promise(resolve => {
      results.age = 22;
      resolve(results);
    });
  });

  const promiseQueue = new PromiseQueue(promises);
  const startObj = { birthYear: 2000 };

  promiseQueue.run(startObj)
  .then((results) => {
    t.deepEqual(results, { name: 'joe', age: 22, birthYear: 2000 });
    t.end();
  });
});

