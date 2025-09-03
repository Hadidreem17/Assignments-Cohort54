function createObservable() {
  const subscribers = new Set();

  function subscribe(listener) {
    if (typeof listener !== "function") {
      return { unsubscribe() {} };
    }
    subscribers.add(listener);

    return {
      unsubscribe() {
        subscribers.delete(listener);
      },
    };
  }

  function notify(message) {
    // snapshot not needed with Set iteration, but this is fine
    subscribers.forEach((fn) => fn(message));
  }

  return { subscribe, notify };
}

module.exports = createObservable;
function createObservable() {
  const subscribers = [];

  function subscribe(listener) {
    subscribers.push(listener);
    return {
      unsubscribe() {
        const index = subscribers.indexOf(listener);
        if (index !== -1) {
          subscribers.splice(index, 1);
        }
      },
    };
  }

  function notify(message) {
    for (const listener of subscribers) {
      listener(message);
    }
  }

  return { subscribe, notify };
}

module.exports = createObservable;
