import React from "react";
import ReactDOM  from "react-dom/client";

import App from './App';

//ReactDOM.render(<App />, document.getElementById('root'));
// upper code does the same job with the code below
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
