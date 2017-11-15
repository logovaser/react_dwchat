import {StackNavigator} from 'react-navigation';
import RootDrawer from "./Drawer";
import Room from "../comp/Room";
import * as colors from '../tools/colors'

let routeConfigs = {
    Home: {
        screen: RootDrawer,
    },
    Room: {
        screen: Room,
    },
};

let settings = {
    navigationOptions: {
        headerStyle: {
            backgroundColor: colors.DarkBlue,
        },
        headerTitleStyle: {
            color: colors.Light
        },
        headerBackTitleStyle : {
            color: colors.Light
        },
        gesturesEnabled: true,
    },
};


export default StackNavigator(routeConfigs, settings);
