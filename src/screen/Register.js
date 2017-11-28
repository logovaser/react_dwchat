import React from 'react';
import {Button, CheckBox, ScrollView, Switch, TextInput, View} from 'react-native';
import { TextField } from 'react-native-material-textfield';

import * as styles from "../@styles";
import ComponentForm from "../RNForms/ComponentForm";
import DwText from "../comp/DwText";


const compForm = [
    <TextField id='first_name' type='text'
               label='first name'/>,
    <TextField id='last_name' type='text'
               label='last name'/>,
    <TextField id='username' type='text'
               label='username'/>,
    <TextField id='password' type='text'
               label='password'
               secureTextEntry={true}/>,
    <TextField id='password_repeat' type='text'
               label='repeat password'
               secureTextEntry={true}/>,
    <CheckBox id='agree1' label='kek'/>,
    <Switch id='agree2' label='kek switch'/>,
];

export default class Register extends React.Component {

    constructor(props) {
        super(props);
    }

    async submit() {
        alert(JSON.stringify(this.$form.getData()));
    }

    render() {
        return (
            <ScrollView style={[styles.container, styles.substrate]}>
                <View style={styles.section}>
                    <DwText style={styles.sectionLabel}>
                        Registration page
                    </DwText>
                    <ComponentForm style={styles.basePadding}
                                   ref={(elem) => this.$form = elem}
                                   form={compForm}
                                   onSubmit={() => this.submit()}/>
                </View>

                <View style={styles.section}>
                    <View style={styles.formGroup}>
                        <Button onPress={() => this.submit()}
                                title="Register"/>
                    </View>
                </View>
            </ScrollView>
        );
    }
}
