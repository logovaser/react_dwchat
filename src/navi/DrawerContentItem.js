import React from 'react';
import {ScrollView, StyleSheet, Text, TouchableNativeFeedback, View} from 'react-native';
import RoomsListItem from "../comp/RoomsListItem";

export default class DrawerContent extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <TouchableNativeFeedback>
                <View style={styles.container}>
                    New dialog
                </View>
            </TouchableNativeFeedback>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: 15,
    },
});
