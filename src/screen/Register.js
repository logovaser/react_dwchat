import React from 'react';
import {Animated, Button, CheckBox, ScrollView, Switch, TextInput, View} from 'react-native';

import * as styles from "../@styles";
import ComponentForm from "../RNForms/ComponentForm";
import DwText from "../comp/DwText";


const compForm = [
    <TextInput id='first_name'
               placeholder='first name'/>,
    <TextInput id='last_name'
               placeholder='last name'/>,
    <TextInput id='username'
               placeholder='username'/>,
    <TextInput id='password'
               placeholder='password'
               secureTextEntry={true}/>,
    <TextInput id='password_repeat'
               placeholder='repeat password'
               secureTextEntry={true}/>,
    <CheckBox id='agree1' label='kek'/>,
    <Switch id='agree2' label='kek switch'/>,
];

const HEADER_MAX_HEIGHT = 200;
const HEADER_MIN_HEIGHT = 60;
const HEADER_SCROLL_DISTANCE = HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT;

export default class Register extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            scrollY: new Animated.Value(0),
        };
    }

    handleScroll(e) {
        this.setState({scroll: e.nativeEvent.contentOffset.y});
    }

    calcJumboHeight() {
        return Math.max(20, 200 - this.state.scroll);
    }

    async submit() {
        alert(JSON.stringify(this.$form.getData()));
    }

    render() {
        const headerHeight = this.state.scrollY.interpolate({
            inputRange: [0, HEADER_SCROLL_DISTANCE],
            outputRange: [HEADER_MAX_HEIGHT, HEADER_MIN_HEIGHT],
            extrapolate: 'clamp',
        });

        return (<View style={styles.container}>
            <Animated.View style={{
                height: headerHeight,
                position: 'absolute',
                top: 0, left: 0, right: 0, bottom: 0,
                backgroundColor: '#48e',
                zIndex: 10,
            }}>
            </Animated.View>
            <ScrollView style={[styles.container, styles.substrate]}
                        scrollEventThrottle={16}
                        onScroll={Animated.event(
                            [{nativeEvent: {contentOffset: {y: this.state.scrollY}}}]
                        )}>
                <View style={styles.section}>
                    <DwText style={styles.sectionLabel}>
                        Registration page
                    </DwText>
                    <View style={styles.basePadding}>
                        <DwText>
                            Some button
                        </DwText>
                        <DwText style={styles.hintText}>
                            enter some data about yourself
                        </DwText>
                    </View>

                    <ComponentForm style={styles.formGroup}
                                   ref={(elem) => this.$form = elem}
                                   form={compForm}
                                   onSubmit={() => this.submit()}/>
                </View>

                <View style={styles.section}>
                    <View style={styles.formGroup}>
                        <Button onPress={() => this.submit()}
                                title="Register"/>
                    </View>
                </View>
            </ScrollView>
        </View>);
    }
}
