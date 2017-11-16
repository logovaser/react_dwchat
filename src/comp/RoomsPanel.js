import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import RoomsListItem from "./RoomsListItem";
import roomServiceClass from '../service/room'

export default class RoomsPanel extends React.Component {

    roomService = new roomServiceClass();

    async getRooms() {
        this.setState({rooms: await this.roomService.fetchRoomsList()});
    }

    constructor(props) {
        super(props);

        this.state = {
            rooms: [],
        };

        this.getRooms();
    }

    render() {
        const nav = this.props.screenProps.parentNavigation;
        return (
            <View style={[styles.container]}>
                {this.state.rooms.map(room =>
                    <RoomsListItem key={room.id}
                                   room={room}
                                   navigation={nav}/>
                )}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
    },
});
