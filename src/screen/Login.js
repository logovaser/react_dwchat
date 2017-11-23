import React from 'react';
import {Button, ScrollView, StyleSheet, Text, TextInput} from 'react-native';
import authService from '../service/auth'

export default class Login extends React.Component {

    nav = this.props.screenProps.parentNavigation;

    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: '',
        };
    }

    async login() {
        let res = await authService.login(this.state.username, this.state.password);
        this.nav.navigate('RoomsPanel', {room: this.props.room});
    }

    render() {
        return (
            <ScrollView keyboardShouldPersistTaps="always"
                        style={styles.container}>
                <Text>new dialog</Text>

                <TextInput style={{height: 40}}
                           placeholder="username"
                           returnKeyType="next"
                           onSubmitEditing={() => this.refs.passwordInput.focus()}
                           onChangeText={(text) => this.setState({username: text})}/>
                <TextInput style={{height: 40}}
                           ref='passwordInput'
                           placeholder="password"
                           returnKeyType="go"
                           secureTextEntry={true}
                           onSubmitEditing={() => this.login()}
                           onChangeText={(text) => this.setState({password: text})}/>
                <Button onPress={() => this.login()}
                        title="Submit"/>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {},
});
