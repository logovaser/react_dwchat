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

const spacingTypeMap = {
    m: 'margin',
    p: 'padding',
};

const spacingSidesMap = {
    t: 'Top',
    b: 'Bottom',
    l: 'Left',
    r: 'Right',
    x: 'Horizontal',
    y: 'Vertical',
};

const spacingConf = {
    spacing: 18,
};

export function spacing(conf, multiplier = 1) {
    let res = {};
    let spacing = spacingConf.spacing * multiplier;

    let propertyName = spacingTypeMap[conf[0]];
    if (!propertyName) return console.warn('No property');

    if (!conf[1]) res[propertyName] = spacing;
    else {
        let side = spacingSidesMap[conf[1]];
        if (side) res[propertyName + side] = spacing;
        else return console.warn('Invalid spacing sides');
    }
    return res;
}

export const substrate = {
    backgroundColor: colors.Gray,
};

export const section = {
    ...spacing('mb', .75),

    backgroundColor: colors.Light,
    elevation: 2,
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

export const bottomBorder = {
    borderBottomWidth: 0.5,
    borderColor: colors.Gray,
};

export const formGroup = {
    ...basePadding,
    ...bottomBorder,
};

export const hintText = {
    color: colors.DarkGray,
    fontSize: 12,
};
