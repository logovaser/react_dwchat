import React from 'react';
import {Button, CheckBox, ScrollView, Switch, TextInput} from 'react-native';

import * as styles from "../@styles";
import ComponentForm from "../RNForms/ComponentForm";


const compForm = [
    <TextInput id='first_name'
               placeholder='first name'/>,
    <TextInput id='last_name'
               placeholder='last name'/>,
    <TextInput id='username'
               placeholder='username'/>,
    <TextInput id='password'
               placeholder='password'
               secureTextEntry={true}/>,
    <TextInput id='password_repeat'
               placeholder='repeat password'
               secureTextEntry={true}/>,
    <CheckBox id='agree1' value={false} label='kek'/>,
    <Switch id='agree2' label='kek switch' value={true}/>,
];

export default class Register extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            trueSwitchIsOn: true,
            falseSwitchIsOn: false,
        };
    }

    async submit() {
        alert(JSON.stringify(this.$form.getData()));
        // await authService.login(this.refs.form.getData());
        // this.nav.dispatch(ResetTo('SignedIn'));
    }

    render() {
        return (
            <ScrollView style={[styles.container, styles.spacing('p')]}>
                <ComponentForm ref={(elem) => this.$form = elem}
                               form={compForm}
                               onSubmit={() => this.submit()}/>

                <Switch
                    onValueChange={(value) => this.setState({falseSwitchIsOn: value})}
                    style={{marginBottom: 10}}
                    value={this.state.falseSwitchIsOn} />

                <Button onPress={() => this.submit()}
                        title="Register"/>
            </ScrollView>
        );
    }
}
