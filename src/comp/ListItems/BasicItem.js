import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

import * as styles from '../../@styles'


export default class BasicItem extends React.Component {

    render = () => <TouchableOpacity style={s.item} {...this.props}>
        <Text style={s.text}>
            {this.props.children}
        </Text>
    </TouchableOpacity>;
}


const s = StyleSheet.create({
    item: {
        ...styles.basePadding,
    },
    text: {
        fontSize: 18,
    }
});
