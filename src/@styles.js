import * as colors from './tools/colors'


export const container = {
    flex: 1,
};

export const horizontalContainer = {
    flexDirection: 'row',
};

export const font = {
    color: colors.Black,
    fontSize: 18,
};

export function spacing(conf, multiplier = 1) {
    let res = {};
    let propertyName;
    let spacing = 18 * multiplier;

    if (conf[0] === 'm') propertyName = 'margin';
    else if (conf[0] === 'p') propertyName = 'padding';
    else return console.warn('No property');

    if (!conf[1]) res[propertyName] = spacing;
    else if (conf[1] === 't') res[propertyName + 'Top'] = spacing;
    else if (conf[1] === 'b') res[propertyName + 'Bottom'] = spacing;
    else if (conf[1] === 'l') res[propertyName + 'Left'] = spacing;
    else if (conf[1] === 'r') res[propertyName + 'Right'] = spacing;
    else if (conf[1] === 'x') res[propertyName + 'Horizontal'] = spacing;
    else if (conf[1] === 'y') res[propertyName + 'Vertical'] = spacing;
    else return console.warn('Invalid spacing sides');

    return res;
}

export const substrate = {
    backgroundColor: colors.Gray,
};

export const section = {
    ...spacing('mb', .75),

    backgroundColor: colors.Light,
    borderBottomWidth: .5,
    borderColor: colors.DarkGray,
};

export const sectionLabel = {
    ...spacing('px'),
    ...spacing('pt', .75),
    ...spacing('pb', 0),

    color: colors.Blue,
    fontSize: 14,
    fontWeight: 'bold',
};

export const basePadding = {
    ...spacing('px'),
    ...spacing('py', .5),
};

export const formGroup = {
    ...basePadding,

    borderBottomWidth: 0.5,
    borderColor: colors.Gray,
};

export const hintText = {
    color: colors.DarkGray,
    fontSize: 12,
};
