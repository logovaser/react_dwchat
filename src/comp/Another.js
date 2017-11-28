import React from 'react';
import {StyleSheet, View} from 'react-native';
import TestComp from "./TestComp";


export default class Another extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        let lol = 'kek';

        return (
            <View>
                <TestComp kek={lol}/>
            </View>
        );
    }
}


const styles = StyleSheet.create({});
