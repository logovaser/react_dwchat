import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';


export default class CircleButton extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (<TouchableOpacity style={[styles.btn, this.props.style]}>
            {this.props.children}
        </TouchableOpacity>);
    }
}


const styles = StyleSheet.create({
    btn: {
        borderWidth: 1,
        borderColor: 'rgba(0,0,0,0.2)',
        alignItems: 'center',
        justifyContent: 'center',
        width: 60,
        height: 60,
        backgroundColor: '#fff',
        borderRadius: 100,
    }
});
