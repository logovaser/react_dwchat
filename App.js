import React from 'react';
import {StyleSheet} from 'react-native';
import Stack from "./src/navi/Stack";
import * as colors from './src/tools/colors'

export default class App extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Stack/>
        );
    }
}
