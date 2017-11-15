import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import RoomsListItem from "./RoomsListItem";

export default class RoomsPanel extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            rooms: [
                {id: 1, name: 'kek 1'},
                {id: 2, name: 'kek 2'},
                {id: 3, name: 'kek 3'},
                {id: 4, name: 'kek 4'},
            ],
        }
    }

    render() {
        return (
            <View style={[styles.container]}>
                {this.state.rooms.map(room =>
                    <RoomsListItem key={room.id} room={room} navigation={this.props.navigation}/>
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
