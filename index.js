/**
 * Separating <<appConfig.js>> into a module is very important.
 * React-native runs through all import on bootstrap and runs them (OMGWTF).
 * So, we should distinguish this into a module to run config firstly.
 */
import './_appConfig'

import { AppRegistry } from 'react-native';
import App from './App';
AppRegistry.registerComponent('react_dwchat', () => App);
