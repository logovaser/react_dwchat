import React from 'react';
import {Button, ScrollView, StyleSheet, Text, TextInput, View} from 'react-native';
import authService from '../service/auth'

import Form from '../RNForms/Form'
import {ResetTo} from "../navi/_actions";

export default class Login extends React.Component {

    nav = this.props.navigation;

    constructor(props) {
        super(props);

        this.loginForm = [
            {
                id: 'username',
                options: {
                    placeholder: 'username',
                },
            },
            {
                id: 'password',
                options: {
                    placeholder: 'password',
                    secureTextEntry: true,
                },
            },
        ];
    }

    async login(form) {
        try {
            let res = await authService.login(form);
            this.nav.dispatch(ResetTo('SignedIn'));
        }
        catch(err) {
            alert(JSON.stringify(err))
        }
    }

    render() {
        return (
            <ScrollView keyboardShouldPersistTaps="always"
                        style={styles.container}>

                <Form form={this.loginForm}
                      onSubmit={(form) => this.login(form)}/>

                <View style={styles.hContainer}>
                    <Button onPress={() => this.login()}
                            title="Login"/>
                </View>

                <Button onPress={() => this.login()}
                        title="Register"/>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    hContainer: {
        flexDirection: 'row',
    }
});
