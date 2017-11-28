import {StackNavigator} from 'react-navigation';
import Login from "../screen/Login";
import Register from "../screen/Register";
import Profile from "../screen/Profile";


let routeConfigs = {
    Login: {screen: Login},
    Register: {screen: Register},
    Profile: {screen: Profile},
};

let settings = {
    headerMode: 'none',
};


export default StackNavigator(routeConfigs, settings);
