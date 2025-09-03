function createObservable() {
  const subscribers = [];

  function subscribe(listener) {
    subscribers.push(listener);
  }

  function notify(message) {
    subscribers.forEach(listener => listener(message));
  }

  return {
    subscribe,
    notify
  };
}

module.exports = { createObservable };
