export const isAvailable = (target) => {
    return !(
        target === undefined ||
        target === null ||
        (typeof target === 'Object' && Object.keys(target).length === 0)||
        (typeof target === 'string' && target === '')
    )
}