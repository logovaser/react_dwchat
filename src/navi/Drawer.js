import {DrawerNavigator} from 'react-navigation';
import RoomsPanel from "../comp/RoomsPanel";
import DrawerContent from "./DrawerContent";
import Login from "../screen/Login";
import authService from '../service/auth'


let routes = {
    Login: {
        screen: Login,
    },
    RoomsPanel: {
        screen: RoomsPanel,
    }
};

let config = {
    contentComponent: DrawerContent,
    initialRouteName: !!authService.token ? 'RoomsPanel' : 'Login',
};


export default DrawerNavigator(routes, config);
