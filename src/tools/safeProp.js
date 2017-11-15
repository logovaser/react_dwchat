export function getProp(obj, ...props) {
    let temp = obj;

    props.forEach(prop => temp = (temp || {})[prop]);

    return temp;
}
