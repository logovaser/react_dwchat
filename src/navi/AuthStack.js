import {StackNavigator} from 'react-navigation';
import authService from '../service/auth'
import SignedIn from "./SignedIn";
import SignedOut from "../navi/SignedOut";


export function get() {

    let routeConfigs = {
        SignedIn: {screen: SignedIn},
        SignedOut: {screen: SignedOut},
    };

    let settings = {
        headerMode: 'none',
        mode: 'modal',
        gesturesEnabled: false,
        // initialRouteName: !!authService.token ? 'SignedOut' : 'SignedIn',
        initialRouteName: !!authService.token ? 'SignedIn' : 'SignedOut',
    };

    return StackNavigator(routeConfigs, settings);
}
