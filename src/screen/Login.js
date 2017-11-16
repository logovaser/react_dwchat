import React from 'react';
import {Button, ScrollView, StyleSheet, Text, TextInput} from 'react-native';
import auth from '../service/auth'

let authService = new auth();

export default class Login extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <ScrollView keyboardShouldPersistTaps="always"
                        style={styles.container}>
                <Text>new dialog</Text>

                <TextInput style={{height: 40}}
                           placeholder="username"
                           onChangeText={(text) => this.setState({username: text})}/>
                <TextInput style={{height: 40}}
                           placeholder="Type here to translate!"
                           secureTextEntry={true}
                           onChangeText={(text) => this.setState({password: text})}/>
                <Button onPress={() => authService.login(this.state.username, this.state.password)}
                        title="Submit"/>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {},
});
