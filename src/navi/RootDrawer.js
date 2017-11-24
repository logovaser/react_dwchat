import {DrawerNavigator} from 'react-navigation';
import RoomsPanel from "../comp/RoomsPanel";
import SidePanel from "../comp/SidePanel/SidePanel";


let routes = {
    RoomsPanel: {screen: RoomsPanel},
};

let config = {
    contentComponent: SidePanel,
    initialRouteName: 'RoomsPanel',
};


export default DrawerNavigator(routes, config);
