import React from 'react';
import {ScrollView, StyleSheet, Text, TouchableNativeFeedback, View} from 'react-native';
import RoomsListItem from "../comp/RoomsListItem";

export default class DrawerContent extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <ScrollView>
                <TouchableNativeFeedback>
                    New dialog
                </TouchableNativeFeedback>
                <TouchableNativeFeedback>New room</TouchableNativeFeedback>
                <TouchableNativeFeedback>Public rooms</TouchableNativeFeedback>
                <TouchableNativeFeedback>Settings</TouchableNativeFeedback>
                <TouchableNativeFeedback>Help</TouchableNativeFeedback>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
});
