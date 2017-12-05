import React from 'react';
import {StyleSheet, Modal, TouchableOpacity, ScrollView, View} from 'react-native';
import DwText from "../DwText";


export default class Menu extends React.Component {

    state = {visible: false};

    show() {
        this.setState({visible: true});
    }

    hide() {
        this.setState({visible: false});
    }

    render() {
        const {visible} = this.state;
        const {children} = this.props;

        return (<Modal visible={visible}
                       transparent={true}
                       animationType="fade"
                       onRequestClose={() => this.hide()}>
            <TouchableOpacity style={styles.modalContent} onPress={() => this.hide()}>
                <ScrollView style={styles.menu}>{children}</ScrollView>
            </TouchableOpacity>
        </Modal>);
    }
}


const styles = StyleSheet.create({
    modalContent: {
        padding: 10,
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'flex-end',
    },
    menu: {
        flexGrow: 0,
        backgroundColor: '#fff',
        shadowColor: 'black',
        shadowOpacity: 0.3,
        shadowOffset: {width: 3, height: 3},
        shadowRadius: 4,
        elevation: 15
    },
});
