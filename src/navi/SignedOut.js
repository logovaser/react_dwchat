import {StackNavigator} from 'react-navigation';
import Login from "../screen/Login";
import Register from "../screen/Register";


let routeConfigs = {
    Login: {screen: Login},
    Register: {screen: Register},
};

let settings = {
    headerMode: 'none',
};


export default StackNavigator(routeConfigs, settings);
