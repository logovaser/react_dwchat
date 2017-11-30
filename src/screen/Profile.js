import React from 'react';
import {Animated, Button, ScrollView, StyleSheet, Text, View} from 'react-native';

import * as styles from "../@styles";
import AnimatedHeaderScrollView from 'react-native-animated-header-scroll-view'
import DwText from "../comp/DwText";
import Icon from "react-native-vector-icons/Ionicons";
import CircleButton from "../comp/CircleButton";


const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

export default class Profile extends React.Component {

    data = {};
    state = {
        controlsOpacity: 1,
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
            })
        });
    }

    render() {
        let headerChildren = <Animated.View>
            <DwText>keke</DwText>
        </Animated.View>;
        let rootChildren = <Animated.View style={[
            _styles.headerControls,
            {opacity: this.state.controlsOpacity}
        ]}>
            <CircleButton>
                <Icon name="md-create"/>
            </CircleButton>
        </Animated.View>;

        return (<AnimatedHeaderScrollView style={_styles.container}
                                          ref={elem => {
                                              this.$scrollView = elem;
                                              this.getScroll();
                                          }}
                                          headerChildren={headerChildren}
                                          rootChildren={rootChildren}>
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
});
