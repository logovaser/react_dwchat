import React from 'react';
import {StyleSheet, Text, View} from 'react-native';


export default class Avatar extends React.Component {

    static getShortenedName(full) {
        let words = full.split(' ');
        return words[0][0] + words[1][0];
    }

    static stringToColor(str) {
        let hash = 0;
        for (let i = 0; i < str.length; i++) {
            hash = str.charCodeAt(i) + ((hash << 5) - hash);
        }
        let colour = '#';
        for (let i = 0; i < 3; i++) {
            let value = (hash >> (i * 8)) & 0xFF;
            colour += ('00' + Math.floor(value * 0.7).toString(16)).substr(-2);
        }
        return colour;
    }

    constructor(props) {
        super(props);
    }

    componentWillUpdate() {
        this.circleStyle = {
            width: this.props.size,
            height: this.props.size,

            backgroundColor: Avatar.stringToColor(this.props.name),
            borderRadius: this.props.size * .5,
        };
        this.shortTextStyle = {
            fontSize: this.props.size / 3,
        };

        if (this.props.src) {

        }
        else {
            this.child = <Text style={[styles.shortText, this.shortTextStyle]}>
                {Avatar.getShortenedName(this.props.name)}
            </Text>;
        }
    }

    render() {

        return (<View style={[styles.circle, this.circleStyle, this.props.style]}>
            {this.child}
        </View>);
    }
}


const styles = StyleSheet.create({
    circle: {
        borderWidth: 1,
        borderColor: 'transparent',
        justifyContent: 'center',
        alignItems: 'center'
    },
    shortText: {
        color: '#fff',
    }
});
