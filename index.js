"use strict";

export default class PromiseQueue {
  constructor(promiseArray) {
    this.promiseArray = promiseArray;
  }
  run(startObj) {
    return new Promise((resolve, reject) => {
      var that = this;
      let currentIndex = 0;

      function next(passedVal) {
        currentIndex++;
        if (currentIndex >= that.promiseArray.length) {
          resolve(passedVal);
        } else {
          that.promiseArray[currentIndex](passedVal).then((passedVal) => {
            next(passedVal);
          });
        }
      }
      that.promiseArray[currentIndex](startObj || {}).then((passedVal) => {
        next(passedVal);
      });
    });
  }
}
