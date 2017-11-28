import React from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import * as styles from "../@styles";


export default class Form extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            form: {},
        };
    }

    getData() {
        return this.state.form;
    }

    getReturnKeyType(arr, i) {
        if (arr.length > i + 1) return 'next';
        else return 'go';
    }

    onSubmitEditing(arr, i) {
        if (arr.length > i + 1) {
            this.refs[arr[i + 1].id].focus();
        }
        else {
            let onSubmit = this.props.onSubmit;
            if (onSubmit) onSubmit();
        }
    }

    render() {
        let form = this.props.form;
        return (
            <View>
                {form.map((input, i) =>
                    <TextInput style={s.input}
                               key={input.id}
                               ref={input.id}
                               returnKeyType={this.getReturnKeyType(form, i)}
                               onChangeText={(text) => this.state.form[input.id] = text}
                               onSubmitEditing={() => this.onSubmitEditing(form, i)}
                               {...input.options}
                    />
                )}
            </View>
        );
    }
}


const s = StyleSheet.create({
    input: styles.font,
});
