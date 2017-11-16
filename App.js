import React from 'react';
import Stack from "./src/navi/Stack";
import axios from 'axios'
import {AsyncStorage, Text} from "react-native";

GLOBAL.XMLHttpRequest = GLOBAL.originalXMLHttpRequest || GLOBAL.XMLHttpRequest;
axios.defaults.baseURL = 'http://localhost:8229';

export default class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {loaded: false};

        AsyncStorage.getItem('token').then(token => {
            axios.defaults.headers.common['Authorization'] = `Token ${token}`;
            this.setState({loaded: true})
        });
    }

    render() {
        if (this.state.loaded) return <Stack/>;
        else return <Text>Loading...</Text>;
    }
}
