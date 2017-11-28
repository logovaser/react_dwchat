import React from 'react';
import {Animated, ScrollView, StyleSheet, View} from 'react-native';

import * as styles from "../@styles";
import * as colors from "../tools/colors";
import DwText from "../comp/DwText";


const HEADER_MAX_HEIGHT = 160;
const HEADER_MIN_HEIGHT = 60;
const HEADER_SCROLL_DISTANCE = HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT;

export default class Profile extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            scrollY: new Animated.Value(0),
        };
    }

    render() {
        const headerHeight = this.state.scrollY.interpolate({
            inputRange: [0, HEADER_SCROLL_DISTANCE],
            outputRange: [HEADER_MAX_HEIGHT, HEADER_MIN_HEIGHT],
            extrapolate: 'clamp',
        });

        return (<View style={styles.container}>
            <ScrollView style={[styles.container, styles.substrate]}
                        scrollEventThrottle={1}
                        onScroll={Animated.event([{nativeEvent: {contentOffset: {y: this.state.scrollY}}}])}>
                <View style={{height: HEADER_MAX_HEIGHT}}/>
                <View style={styles.section}>
                    <DwText style={styles.sectionLabel}>
                        Registration page
                    </DwText>
                    {[1,1,1,1,1,1,1,1,1,1,1,1,1].map(() =>
                        <View style={styles.formGroup}>
                            <DwText>
                                Some button
                            </DwText>
                            <DwText style={styles.hintText}>
                                enter some data about yourself
                            </DwText>
                        </View>
                    )}
                </View>
            </ScrollView>
            <Animated.View style={[_styles.resizingHeader, {height: headerHeight}]}>
            </Animated.View>
        </View>);
    }
}

const _styles = StyleSheet.create({
    resizingHeader: {
        position: 'absolute',
        top: 0, left: 0, right: 0, bottom: 0,

        backgroundColor: '#48e',
        elevation: 10,
    }
});
