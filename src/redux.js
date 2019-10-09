import React from "react";
import { createStore } from "redux";
import initState, { blacklist } from "./initState";

export const act = (type, data) => {
  return { type, data, set: true };
};
export const timer = (type, data) => {
  return { type, data, set: true, timer: true };
};
let store;

function reduce(state, action) {
  const newState = { ...state };
  if (action.set) {
    let left = newState;
    const fields = action.type.split("/");
    for (let i = 0; i < fields.length; i++) {
      const field = fields[i];
      if (left[field] === undefined) {
        left[field] = {};
      }
      if (i === fields.length - 1) {
        let { data } = action;
        if (data === undefined) data = left[field];
        if (Array.isArray(data)) left[field] = [...data];
        else if (typeof data === "object" && data != null)
          left[field] = { ...data };
        else left[field] = data;
      } else {
        left[field] = { ...left[field] };
        left = left[field];
      }
    }
  }
  return newState;
}

export const getStoreState = path => {
  if (!path) return store.getState();
  let left = store.getState();
  const fields = path.split("/");
  for (let i = 0; i < fields.length; i++) {
    const field = fields[i];
    if (!left[field]) {
      console.log(
        "undefined path for getStoreState, path: ",
        path,
        ", field: ",
        field
      );
      return undefined;
    }
    left = left[field];
  }
  return left;
};
export const dispatchStore = (type, data) => {
  getStore().dispatch(act(type, data));
};
export const dispatchTimer = (type, data) => {
  getStore().dispatch(timer(type, data));
};
export const getStore = () => {
  return store;
};

export const createReduxStore = () => {
  store = createStore(
    (state = initState, action) => {
      return reduce(state, action);
    },
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() // eslint-disable-line no-undef
  );
  return store;
};

