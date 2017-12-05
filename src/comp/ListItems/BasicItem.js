import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';


export default class BasicItem extends React.Component {

    render() {
        return (<TouchableOpacity style={styles.item}>
            <Text style={styles.text}>{this.props.children}</Text>
        </TouchableOpacity>);
    }
}


const styles = StyleSheet.create({
    item: {
        paddingHorizontal: 18,
        paddingVertical: 10,
    },
    text: {
        fontSize: 18,
    }
});
