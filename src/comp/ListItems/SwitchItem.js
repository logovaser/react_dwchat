import React from 'react';
import {StyleSheet, Switch, TouchableNativeFeedback, View} from 'react-native';

import * as styles from '../../@styles'


export default class SwitchItem extends React.Component {

    state = {
        value: false,
    };

    componentWillUpdate() {

    }

    render = () => <TouchableNativeFeedback onPress={() => this.setState({value: !this.state.value})}>
        <View style={s.button}>
            <View style={[s.wrapper, s.label]}>
                {this.props.children}
            </View>
            <View style={s.wrapper}>
                <Switch value={this.state.value} onValueChange={value => this.setState({value})}/>
            </View>
        </View>
    </TouchableNativeFeedback>;
}


const s = StyleSheet.create({
    button: {
        ...styles.bottomBorder,

        flexDirection: 'row',
    },
    wrapper: {
        ...styles.basePadding,
        justifyContent: 'center',
    },
    label: {
        flex: 1,
    },
});
