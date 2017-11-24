import React from 'react';
import {ScrollView, StyleSheet, Text, TouchableNativeFeedback, View} from 'react-native';
import RoomsListItem from "../RoomsListItem";

export default class DrawerContentItem extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <TouchableNativeFeedback onPress={this.props.onPress}>
                <View style={styles.container}>
                    <Text>{this.props.children}</Text>
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
