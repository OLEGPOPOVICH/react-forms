import React from 'react';
import ReactDOM from 'react-dom';

import { App } from "./App";

export const render = (): void => {
  ReactDOM.render(<App />, document.getElementById('app'));
};

window.addEventListener('load', render);