import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Icon from "react-native-vector-icons/Ionicons";
import {NavigationActions} from 'react-navigation'


const COLOR = '#fff';
const SIZE = 60;

export default class FloatingNavi extends React.Component {

    conf = {};
    styles = {};

    constructor(props) {
        super(props);

        if (!this.props.navigation) console.warn('No navigation prop passed');
    }

    componentWillUpdate() {
        this.conf.color = this.props.color || COLOR;
        this.conf.size = this.props.size || SIZE;
        this.styles.defaultColor = {
            color: this.conf.color
        };
    }

    render() {
        let heading;
        if (this.props.heading)
            heading = <View style={[styles.flex, styles.heading]}>
                <Text style={[styles.headingFont, this.styles.defaultColor]}>{this.props.heading}</Text>
            </View>;
        else heading = <View style={styles.flex}>{this.props.children}</View>;

        return (<View style={[styles.floatingNavi, {height: this.conf.size}, this.props.style]}>
            <TouchableOpacity style={[styles.iconWrapper, {width: this.conf.size}]}
                              onPress={() => this.props.navigation.dispatch(NavigationActions.back())}>
                <Icon name="md-arrow-round-back"
                      style={[styles.icon, this.styles.defaultColor]}/>
            </TouchableOpacity>
            {heading}
            <TouchableOpacity style={[styles.iconWrapper, {width: this.conf.size}]}>
                <Icon name="md-more"
                      style={[styles.icon, this.styles.defaultColor]}/>
            </TouchableOpacity>
        </View>);
    }
}


const styles = StyleSheet.create({
    floatingNavi: {
        position: 'absolute',
        top: 0, left: 0, right: 0,
        flexDirection: 'row',
        elevation: 1000,
    },
    flex: {
        flex: 1,
    },
    heading: {
        paddingHorizontal: 20,
        justifyContent: 'center',
    },
    headingFont: {
        fontSize: 18,
    },
    iconWrapper: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    icon: {
        fontSize: 24,
    },
});
