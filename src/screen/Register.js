import React from 'react';
import {Button, ScrollView, TextInput} from 'react-native';

import Form from '../RNForms/Form'
import * as styles from "../@styles";


const _form = [
    {
        id: 'first_name',
        options: {
            placeholder: 'first name',
        },
    },
    {
        id: 'last_name',
        options: {
            placeholder: 'last name',
        },
    },
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
    {
        id: 'password_repeat',
        options: {
            placeholder: 'repeat password',
            secureTextEntry: true,
        },
    },
];

const compForm = [
    <TextInput/>,
    <TextInput/>,
    <TextInput/>,
];

export default class Register extends React.Component {

    constructor(props) {
        super(props);
    }

    async submit() {
        alert(JSON.stringify(this.refs.form.getData()));
        // await authService.login(this.refs.form.getData());
        // this.nav.dispatch(ResetTo('SignedIn'));
    }

    render() {
        return (
            <ScrollView style={[styles.container, styles.spacing('p')]}>
                <ComponentForm form={compForm}/>

                <Button onPress={() => this.submit()}
                        title="Register"/>
            </ScrollView>
        );
    }
}
