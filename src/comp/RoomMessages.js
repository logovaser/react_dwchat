import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import * as colors from "../tools/colors";
import Message from "./Message";

export default class RoomMessages extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <ScrollView style={[styles.container]}>
                <Message/>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.Light,
    },
});
