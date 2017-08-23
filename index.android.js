import React, { Component } from 'react';
import {
  AppRegistry,
} from 'react-native';
import {App} from "./src/app/App";
import Redux from "./src/app/Redux";
import MenuComponent from "./src/app/component/menu/MenuComponent";

AppRegistry.registerComponent('TokubuyExp', () => Redux);
