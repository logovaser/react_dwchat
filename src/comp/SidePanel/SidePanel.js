import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';

import authService from '../../service/auth'
import {ResetTo} from "../../navi/_actions";

import DrawerContentItem from "./SidePanelItem";

export default class DrawerContent extends React.Component {

    constructor(props) {
        super(props);
    }

    async signOut() {
        await authService.logout();
        this.props.navigation.dispatch(ResetTo('SignedOut'));
    }

    render() {
        const {navigate} = this.props.navigation;

        return (
            <ScrollView>
                <DrawerContentItem onPress={() => navigate('NewDialog')}>New dialog</DrawerContentItem>
                <DrawerContentItem>New room</DrawerContentItem>
                <DrawerContentItem>Public rooms</DrawerContentItem>
                <DrawerContentItem>Settings</DrawerContentItem>
                <DrawerContentItem>Help</DrawerContentItem>
                <DrawerContentItem onPress={() => this.signOut()}>Log out</DrawerContentItem>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({});
