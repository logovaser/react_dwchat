export function getProp(obj, ...props) {
    let temp = obj;

    props.forEach(prop => temp = (temp || {})[prop]);

    return temp;
}

export function update(state, path, value) {
    Object.assign(state,
}
