import React from 'react';
import {Animated, StyleSheet, View} from 'react-native';

import * as styles from "../@styles";
import * as colors from "../tools/colors";
import AnimatedHeaderScrollView from 'react-native-animated-header-scroll-view'
import DwText from "../comp/DwText";
import Icon from "react-native-vector-icons/Ionicons";
import CircleButton from "../comp/CircleButton";
import Avatar from "../comp/Avatar";
import FloatingNavi from "../comp/FloatingNavi";
import SwitchItem from "../comp/ListItems/SwitchItem";


const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

export default class Profile extends React.Component {

    data = {};
    state = {
        controlsOpacity: 1,
        headerX: 20,
        headerY: 80,
    };

    constructor(props) {
        super(props);
    }

    getScroll(elem) {
        if (this.data.scroll || !elem) return;
        let conf = elem.getConfig();
        let scroll = elem.getScroll();
        this.data.scroll = scroll;

        this.setState({
            controlsOpacity: scroll.interpolate({
                inputRange: [0, conf.headerScrollDistance],
                outputRange: [1, 0],
                extrapolate: 'clamp',
            }),
            headerX: scroll.interpolate({
                inputRange: [0, conf.headerScrollDistance],
                outputRange: [20, 60],
                extrapolate: 'clamp',
            }),
            headerY: scroll.interpolate({
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

        return (<View style={_styles.container}>
            <AnimatedHeaderScrollView
                style={_styles.container}
                ref={elem => this.getScroll(elem)}
                headerChildren={headerChildren}
                rootChildren={rootChildren}
            >
                <View style={_styles.section}>
                    <DwText style={_styles.sectionLabel}>
                        Registration page
                    </DwText>
                    <SwitchItem>
                        <DwText>Some button</DwText>
                        <DwText style={[_styles.hintText]}>
                            enter some data about yourself
                        </DwText>
                    </SwitchItem>
                    {arr.map(num =>
                        <View key={num} style={_styles.formGroup}>
                            <DwText>Some button</DwText>
                            <DwText style={[_styles.hintText]}>
                                enter some data about yourself
                            </DwText>
                        </View>
                    )}
                </View>
            </AnimatedHeaderScrollView>
            <FloatingNavi navigation={this.props.navigation}/>
        </View>);
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
