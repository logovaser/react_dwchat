import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import * as colors from "../../tools/colors";

export default class Message extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={[styles.container]}>
                <Text>{this.props.message.text}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
    },
});
