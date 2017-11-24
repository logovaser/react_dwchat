import React from 'react';
import {get as getAuthStack} from "./src/navi/AuthStack.js";
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
        if (this.state.loaded) {
            let AuthStack = getAuthStack();
            return <AuthStack/>;
        }
        else return <Text>Loading...</Text>;
    }
}
