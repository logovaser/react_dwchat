import {NavigationActions} from "react-navigation";

export const ResetTo = function(routeName, params, action) {
    return NavigationActions.reset({
        index: 0,
        key: null,
        actions: [
            NavigationActions.navigate({routeName, params, action})
        ]
    });
};
