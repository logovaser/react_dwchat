import {StackNavigator} from 'react-navigation';
import Login from "../screen/Login";


let routeConfigs = {
    Login: {screen: Login},
};

let settings = {
    headerMode: 'none',
};


export default StackNavigator(routeConfigs, settings);
