import React from 'react';
import {StyleSheet, Text, View, TouchableNativeFeedback} from 'react-native';

export default class RoomsListItem extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        const { navigate } = this.props.navigation;
        return (
            <TouchableNativeFeedback onPress={() => navigate('Room', { room: this.props.room })}>
                <View style={styles.container}>
                    <Text>{this.props.room.name}</Text>
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
