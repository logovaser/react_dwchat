import {StackNavigator} from 'react-navigation';
import RootDrawer from "./Drawer";
import Room from "../comp/Room";
import * as colors from '../tools/colors'
import * as React from "react";
import NewDialog from "../screen/NewDialog";
import Login from "../screen/Login";

let routeConfigs = {
    Home: {
        screen: ({navigation}) => <RootDrawer screenProps={{parentNavigation: navigation}}/>,
    },
    Room: {screen: Room},
    NewDialog: {screen: NewDialog},
    Login: {screen: Login},
};

let settings = {
    navigationOptions: {
        headerStyle: {
            backgroundColor: colors.DarkBlue,
        },
        headerTitleStyle: {
            color: colors.Light
        },
        headerBackTitleStyle: {
            color: colors.Light
        },
        gesturesEnabled: true,
    },
};


export default StackNavigator(routeConfigs, settings);
