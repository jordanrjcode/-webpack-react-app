import React from "react";
import "./App.css";
import image from "./app.png";
const App = () => {
  return (
    <div className="app">
      <div className="image">
        <img src={image} alt="logo for app free" />
      </div>
      <h1 className="app__title">Webpack-react-app</h1>
      <p className="app__description">
        This a demo of a react-app with webpack
      </p>
    </div>
  );
};

export default App;
