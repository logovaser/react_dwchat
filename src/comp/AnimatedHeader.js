import React from 'react';
import {Animated, ScrollView, StyleSheet, View} from 'react-native';


export default class Profile extends React.Component {

    state = {
        scrollY: new Animated.Value(0),
    };

    constructor(props) {
        super(props);

        this.conf = {
            headerMaxHeight: this.props.headerMaxHeight || 160,
            headerMinHeight: this.props.headerMinHeight || 60,
            headerScrollDistance: this.headerMaxHeight - this.headerMinHeight,
        }
    }

    render() {
        const headerHeight = this.state.scrollY.interpolate({
            inputRange: [0, this.conf.headerScrollDistance],
            outputRange: [this.conf.headerMaxHeight, this.conf.headerMinHeight],
            extrapolate: 'clamp',
        });

        return (<View style={styles.container}>
            <ScrollView style={styles.container}
                        scrollEventThrottle={16}
                        onScroll={Animated.event([{nativeEvent: {contentOffset: {y: this.state.scrollY}}}])}>
                <View style={{height: this.conf.headerMaxHeight}}/>
                {this.props.children}
            </ScrollView>
            <Animated.View style={[styles.resizingHeader, {height: headerHeight}]}>
            </Animated.View>
        </View>);
    }
}

const styles = StyleSheet.create({
    container: {flex: 1},
    resizingHeader: {
        position: 'absolute',
        top: 0, left: 0, right: 0, bottom: 0,

        backgroundColor: '#48e',
        elevation: 10,
    },
});
