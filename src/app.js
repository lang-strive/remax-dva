import React from "react";
import { Provider } from "react-redux";
import dva from "./utils/dva";
import models from "./models";
import "./app.less";

const dvaApp = dva.createApp({
  initialState: {},
  models: models
});

const stores = dvaApp.getStore();

const App = props => <Provider store={stores}>{props.children}</Provider>;

export default App;
