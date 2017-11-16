import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import * as colors from "../tools/colors";
import RoomMessages from "./RoomMessages";

export default class Room extends React.Component {

    static navigationOptions = ({navigation}) => ({
        title: navigation.state.params.room.name,
    });

    constructor(props) {
        super(props);

        this.state = {
            room: this.props.navigation.state.params.room,
        };
    }

    render() {
        return (
            <View style={[styles.container]}>
                <RoomMessages room={this.state.room}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        minWidth: 0,
        backgroundColor: colors.Dark,
    },
    header: {
        backgroundColor: colors.Dark,
        color: colors.Light,
    },
});
