import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import * as colors from "../../tools/colors";
import Message from "./Message";
import roomServiceClass from '../../service/room'

export default class RoomMessages extends React.Component {

    roomService = new roomServiceClass();

    async getMessages() {
        console.log(this.props);
        this.setState({messages: await this.roomService.fetchMessages(this.props.room.id)});
    }

    constructor(props) {
        super(props);

        this.state = {
            messages: [],
        };

        this.getMessages();
    }

    render() {
        return (
            <ScrollView style={[styles.container]}>
                {this.state.messages.map(message =>
                    <Message key={message.id} message={message}/>
                )}
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column-reverse',
        backgroundColor: colors.Light,
    },
});
