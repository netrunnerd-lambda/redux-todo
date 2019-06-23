const k = 'todos';

export const loadStorage = _ => {
  const serializedState = window.localStorage.getItem(k);

  if (serializedState === null)
    return undefined;

  return JSON.parse(serializedState);
};

export const updateStorage = state => {
  const serializedState = JSON.stringify(state);

  window.localStorage.setItem(k, serializedState);
};
