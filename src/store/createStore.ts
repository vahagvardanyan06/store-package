const createStore = () => {
  const listeners = new Set<(value: number) => void>();
  const data = { value: 1 };

  return {
    getValue: () => data.value,

    setValue: (value: number | ((prev: number) => number)) => {
      if (typeof value === 'function') {
        data.value = (value as (prev: number) => number)(data.value);
      } else {
        data.value = value;
      }

      for (const listener of listeners) {
        listener(data.value);
      }
    },

    subscribe: (callback: (value: number) => void): (() => void) => {
      listeners.add(callback);

      // Return the unsubscribe function
      return () => listeners.delete(callback);
    },
  };
};

export default createStore;
