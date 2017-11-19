import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import DrawerContentItem from "./DrawerContentItem";

export default class DrawerContent extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        const nav = this.props.screenProps.parentNavigation;

        return (
            <ScrollView>
                <DrawerContentItem onPress={() => nav.navigate('NewDialog')}>New dialog</DrawerContentItem>
                <DrawerContentItem>New room</DrawerContentItem>
                <DrawerContentItem>Public rooms</DrawerContentItem>
                <DrawerContentItem>Settings</DrawerContentItem>
                <DrawerContentItem>Help</DrawerContentItem>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({});
