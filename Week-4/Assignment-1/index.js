const STATE = {
  PENDING: "PENDING",
  FULFILLED: "FULFILLED",
  REJECTED: "REJECTED"
};

class MyPromise {
  constructor(callback) {
    // Initial state of Promise is empty
    this.state = STATE.PENDING;
    this.value = undefined;
    this.handlers = [];
    this.resolve = this.resolve.bind(this);
    this.reject = this.reject.bind(this);
    // Invoke callback by passing the resolve and the reject function of our class
    try {
      callback(this.resolve, this.reject);
    } catch (err) {
      this.reject(err);
    }
  }

  updateResult(value, state) {
    // This is to make the processing async
    /*
        Process the promise if it is still in pending state. 
        An already rejected or resolved promise is not processed
      */
    if (this.state !== STATE.PENDING) {
      return;
    }

    // check is value is also a promise
    if (this.isThenable(value)) {
      return value.then(this.resolve, this.reject);
    }

    this.value = value;
    this.state = state;

    // execute handlers if already attached
    this.executeHandlers();
  }

  isThenable(val) {
    return val instanceof MyPromise;
  }

  resolve(value) {
    this.updateResult(value, STATE.FULFILLED);
  }

  reject(error) {
    this.updateResult(error, STATE.REJECTED);
  }

  then(onSuccess, onFail) {
    return new MyPromise((res, rej) => {
      this.addHandlers({
        onSuccess: function (value) {
          // if no onSuccess provided, resolve the value for the next promise chain
          if (!onSuccess) {
            return res(value);
          }
          try {
            return res(onSuccess(value));
          } catch (err) {
            return rej(err);
          }
        },
        onFail: function (value) {
          // if no onFail provided, reject the value for the next promise chain
          if (!onFail) {
            return rej(value);
          }
          try {
            return res(onFail(value));
          } catch (err) {
            return rej(err);
          }
        }
      });
    });
  }

  catch(onFail) {
    return this.then(null, onFail);
  }

  finally(callback) {
    return new MyPromise((res, rej) => {
      let val;
      let wasRejected;
      this.then(
        (value) => {
          wasRejected = false;
          val = value;
          return callback();
        },
        (err) => {
          wasRejected = true;
          val = err;
          return callback();
        }
      ).then(() => {
        // If the callback didn't have any error we resolve/reject the promise based on promise state
        if (!wasRejected) {
          return res(val);
        }
        return rej(val);
      });
    });
  }

  addHandlers(handlers) {
    this.handlers.push(handlers);
    this.executeHandlers();
  }

  executeHandlers() {
    // Don't execute handlers if promise is not yet fulfilled or rejected
    if (this.state === STATE.PENDING) {
      return null;
    }

    // We have multiple handlers because add them for .finally block too
    this.handlers.forEach((handler) => {
      if (this.state === STATE.FULFILLED) {
        return handler.onSuccess(this.value);
      }
      return handler.onFail(this.value);
    });
    // After processing all handlers, we reset it to empty.
    this.handlers = [];
  }
}

function getNumber() {
  var number = Math.floor(Math.random() * 10000);
  var delay = Math.floor(Math.random() * 100);
  return {
    number: number,
    delay: delay
  };
}

let promise1 = new MyPromise((resolve, reject) => {
  const { number, delay } = getNumber();
  setTimeout(() => {
    if (number % 5 === 0) {
      reject(`Promise Rejected for: ${number} with a delay of: ${delay} seconds`);
    }
    resolve(`Promise Accepted for: ${number} with a delay of: ${delay} seconds`);
  }, delay);
});

promise1
  .then((res) => console.log(res))
  .catch((res) => console.log(res))
  .finally(() => console.log(`Promise Instance Finished`));
