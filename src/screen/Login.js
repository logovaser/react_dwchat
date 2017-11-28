import React from 'react';
import {Button, ScrollView, StyleSheet, View} from 'react-native';
import authService from '../service/auth'

import Form from '../RNForms/Form'
import {ResetTo} from "../navi/_actions";
import * as styles from "../@styles";


const _form = [
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

export default class Login extends React.Component {

    nav = this.props.navigation;

    constructor(props) {
        super(props);
    }

    async submit() {
        await authService.login(this.refs.form.getData());
        this.nav.dispatch(ResetTo('SignedIn'));
    }

    render() {
        let {navigate} = this.nav;

        return (
            <ScrollView style={[s.container, s.padding]}>

                <Form ref='form'
                      form={_form}
                      onSubmit={() => this.submit()}/>

                <View style={styles.horizontalContainer}>
                    <Button onPress={() => this.submit()}
                            title="Login"/>
                </View>

                <Button onPress={() => navigate('Register')}
                        title="Register"/>
                <Button onPress={() => navigate('Profile')}
                        title="Profile"/>
            </ScrollView>
        );
    }
}

const s = StyleSheet.create({
    container: styles.container,
    padding: styles.spacing('p'),
});
