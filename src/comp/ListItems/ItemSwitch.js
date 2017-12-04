import React from 'react';
import {StyleSheet, View} from 'react-native';


export default class ItemSwitch extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (<View>
            {this.props.children}

            </View>);
    }
}


const s = StyleSheet.create({

});
