import React, { useState, useRef, useEffect } from "react";
import Navigation from "./Navigation";
import {createReduxStore} from "./redux";
import { Provider } from "react-redux";

const App = () => {
  return (
    <Provider store={createReduxStore()}>
    <Navigation/>
    </Provider>
  );
};

export default App;
