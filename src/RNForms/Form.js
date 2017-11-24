import React from 'react';
import {StyleSheet, TextInput, View} from 'react-native';


export default class Form extends React.Component {

    constructor(props) {
        super(props);

        this.form = {};
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
            if (onSubmit) onSubmit(this.form);
        }
    }

    render() {
        let form = this.props.form;
        return (
            <View>
                {form.map((input, i) =>
                    <TextInput style={styles.input}
                               key={input.id}
                               ref={input.id}
                               returnKeyType={this.getReturnKeyType(form, i)}
                               onChangeText={(text) => this.form[input.id] = text}
                               onSubmitEditing={() => this.onSubmitEditing(form, i)}
                               {...input.options}
                    />
                )}
            </View>
        );
    }
}


const styles = StyleSheet.create({
    input: {
        fontSize: 18,
    }
});
