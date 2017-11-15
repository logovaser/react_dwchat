import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default class NewDialog extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>new dialog</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {

    },
});
