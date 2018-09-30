export default function theme(name, values) {
    return (props) => getThemeValue(name, props, values);
}

const getThemeValue = (name, props, values) => {
    emptyDefaultError(name, values);

    if (props[name] !== undefined && values[props[name]] !== undefined) {
        return values[props[name]];
    } else {
        return values.default;
    }
}

const emptyDefaultError = (name, values) => {
    if (!values['default'])
        throw new Error('Function theme expect default value of mode, please define values default for the current mode: ' + name);
};