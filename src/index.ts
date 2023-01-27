export function hello(value: any) {
    if (typeof(value) !== 'string') {
        return 'Solo acepta valores strings';
    }
    return `Hello ${value}`;
}

