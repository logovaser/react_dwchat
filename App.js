GLOBAL.XMLHttpRequest = GLOBAL.originalXMLHttpRequest || GLOBAL.XMLHttpRequest;
axios.defaults.baseURL = 'http://localhost:8229';

import React from 'react';
import Stack from "./src/navi/Stack";
import axios from 'axios'
import {Text} from "react-native";
import authService from './src/service/auth'

export default class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {loaded: false};

        authService.isReady.then(() => {
            this.setState({loaded: true});
        });
    }

    render() {
        if (this.state.loaded) return <Stack/>;
        else return <Text>Loading...</Text>;
    }
}
