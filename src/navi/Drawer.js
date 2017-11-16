import {DrawerNavigator} from 'react-navigation';
import RoomsPanel from "../comp/RoomsPanel";
import DrawerContent from "./DrawerContent";

let routeConfigs = {
    RoomsPanel: {
        screen: RoomsPanel,
    }
};


export default DrawerNavigator(routeConfigs, {
    contentComponent: DrawerContent
});
