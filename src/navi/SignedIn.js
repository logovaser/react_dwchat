import {StackNavigator} from 'react-navigation';
import RootDrawer from './RootDrawer'
import Room from "../comp/Room/Room";
import NewDialog from "../screen/NewDialog";

let routeConfigs = {
    RootDrawer: {
        screen: RootDrawer,
        navigationOptions: {
            header: null,
        }
    },

    Room: {screen: Room},
    NewDialog: {screen: NewDialog},
};

let settings = {
    initialRouteName: 'RootDrawer',
    gesturesEnabled: true,
    headerMode: 'none',
};


export default StackNavigator(routeConfigs, settings);
