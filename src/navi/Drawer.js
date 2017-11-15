import {DrawerNavigator} from 'react-navigation';
import RoomsPanel from "../comp/RoomsPanel";

let routeConfigs = {
    RoomsPanel: {
        screen: RoomsPanel,
    }
};

const RootDrawer = DrawerNavigator(routeConfigs, {
    // contentComponent: RoomsPanel
});

export default RootDrawer;