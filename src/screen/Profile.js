import React from 'react';
import {Animated, Button, ScrollView, StyleSheet, Text, View} from 'react-native';

import * as styles from "../@styles";
import * as colors from "../tools/colors";
import AnimatedHeaderScrollView from 'react-native-animated-header-scroll-view'
import DwText from "../comp/DwText";
import Icon from "react-native-vector-icons/Ionicons";
import CircleButton from "../comp/CircleButton";
import Avatar from "../comp/Avatar";
import {hintText} from "../@styles";


const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

export default class Profile extends React.Component {

    data = {};
    state = {
        controlsOpacity: 1,
        headerX: 20,
        headerY: 20,
    };

    constructor(props) {
        super(props);
    }

    getScroll() {
        if (this.data.scrollY || !this.$scrollView) return;
        let elem = this.$scrollView;
        let conf = elem.getConfig();
        this.data.scrollY = elem.getScroll();

        this.setState({
            controlsOpacity: this.data.scrollY.interpolate({
                inputRange: [0, conf.headerScrollDistance],
                outputRange: [1, 0],
                extrapolate: 'clamp',
            }),
            headerX: this.data.scrollY.interpolate({
                inputRange: [0, conf.headerScrollDistance],
                outputRange: [20, 60],
                extrapolate: 'clamp',
            }),
            headerY: this.data.scrollY.interpolate({
                inputRange: [0, conf.headerScrollDistance],
                outputRange: [80, 5],
                extrapolate: 'clamp',
            }),
        });
    }

    render() {
        let headerChildren = <Animated.View style={[_styles.header, {
            transform: [{translateX: this.state.headerX}, {translateY: this.state.headerY}]
        }]}>
            <Avatar size={50} name='Lol Prudnikov' style={_styles.avatar}/>
            <View>
                <DwText style={_styles.white}>Lol Prudnikov</DwText>
                <DwText style={[_styles.hintText, _styles.white]}>kek barakek</DwText>
            </View>
        </Animated.View>;
        let rootChildren = <Animated.View style={[
            _styles.headerControls,
            {opacity: this.state.controlsOpacity}
        ]}>
            <CircleButton>
                <Icon name="md-create"/>
            </CircleButton>
        </Animated.View>;

        return (<AnimatedHeaderScrollView
            style={_styles.container}
            ref={elem => {
                this.$scrollView = elem;
                this.getScroll();
            }}
            headerChildren={headerChildren}
            rootChildren={rootChildren}
        >
            <View style={_styles.section}>
                <DwText style={_styles.sectionLabel}>
                    Registration page
                </DwText>
                {arr.map(num =>
                    <View key={num} style={_styles.formGroup}>
                        <DwText>Some button</DwText>
                        <DwText style={[_styles.hintText]}>
                            enter some data about yourself
                        </DwText>
                    </View>
                )}
            </View>
        </AnimatedHeaderScrollView>);
    }
}

const _styles = StyleSheet.create({
    container: styles.container,
    section: styles.section,
    sectionLabel: styles.sectionLabel,
    formGroup: styles.formGroup,
    hintText: styles.hintText,
    headerControls: {
        ...styles.spacing('px'),
        alignItems: 'flex-end',
    },
    header: {
        flexDirection: 'row',
    },
    avatar: {
        ...styles.spacing('mr'),
    },
    white: {
        color: colors.Light,
    },
});
