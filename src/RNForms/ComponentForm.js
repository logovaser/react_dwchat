import React from 'react';
import {TextInput, View} from 'react-native';
import * as styles from "../@styles";
import DwText from "../comp/DwText";


export default class ComponentForm extends React.Component {

    constructor(props) {
        super(props);

        this.state = {};

        this.inputs = {};
    }

    getData() {
        return this.state;
    }

    getReturnKeyType(arr, i) {
        if (arr.length > i + 1) return 'next';
        else return 'go';
    }

    onSubmitEditing(arr, i) {
        if (arr.length > i + 1) {
            this.inputs[arr[i + 1].props.id].focus();
        }
        else {
            let onSubmit = this.props.onSubmit;
            if (onSubmit) onSubmit();
        }
    }


    makeAdditionalProps(form, i, component) {
        const {id} = component.props;
        const {displayName} = component.type;

        let newProps = {
            ref: (elem) => this.inputs[id] = elem,
        };

        if (displayName === 'TextInput') {
            newProps.onChangeText = (value) => this.setState({[id]: value});
            newProps.returnKeyType = this.getReturnKeyType(form, i);
            newProps.onSubmitEditing = () => this.onSubmitEditing(form, i);
        }
        else {
            newProps.value = this.state[id];
            newProps.onValueChange = (value) => this.setState({[id]: value});
        }

        return newProps;
    }

    makeAdditionalLayout(component) {
        const {displayName} = component.type;

        if (displayName === 'CheckBox') {
            return <View style={styles.horizontalContainer}>
                {component}
                <DwText style={styles.container}>{component.props.label}</DwText>
            </View>
        }
        else if (displayName === 'Switch') {
            return <View style={styles.horizontalContainer}>
                <DwText style={styles.container}>{component.props.label}</DwText>
                {component}
            </View>
        }
        else {
            return component;
        }
    }

    render() {
        let form = this.props.form;
        return (
            <View style={this.props.style}>
                {form.map((component, i) => {
                    const {id} = component.props;

                    let newComponent = React.cloneElement(component, this.makeAdditionalProps(form, i, component));
                    newComponent = this.makeAdditionalLayout(newComponent);
                    newComponent = React.cloneElement(newComponent, {key: id});
                    return newComponent;
                })}
            </View>
        );
    }
}
