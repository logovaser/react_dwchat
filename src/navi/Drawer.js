import {DrawerNavigator} from 'react-navigation';
import RoomsPanel from "../comp/RoomsPanel";
import DrawerContent from "./DrawerContent";

let routeConfigs = {
    RoomsPanel: {
        screen: RoomsPanel,
    }
};

const RootDrawer = DrawerNavigator(routeConfigs, {
    contentComponent: DrawerContent
});

export default RootDrawer;