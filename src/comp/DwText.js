import React from 'react';
import {Text} from 'react-native';

import * as styles from "../@styles";


export default class DwText extends React.Component {
    render() {
        return (
            <Text style={{...styles.font, ...this.props.style}}>
                {this.props.children}
            </Text>
        );
    }
}
