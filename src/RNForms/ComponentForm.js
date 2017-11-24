import React from 'react';
import {StyleSheet, TextInput, View} from 'react-native';


export default class ComponentForm extends React.Component {

    constructor(props) {
        super(props);
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
                {form.map((Component, i) =>
                    <Component/>
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
