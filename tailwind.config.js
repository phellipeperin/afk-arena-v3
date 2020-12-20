const primary = '#2C5673';
const accent = '#58CCBC';
const success = '#2ecc71';
const warning = '#f89406';
const error = '#cf000f';
const disabled = '#e8e8e8';

const themeColors = (theme) => ({
    ...theme('colors'),
    primary,
    accent,
    success,
    warning,
    error,
    disabled,
});

module.exports = {
    theme: {
        textColor: themeColors,
        backgroundColor: themeColors,
        borderColor: themeColors,
        ringColor: themeColors,
        fontFamily: {
            sans: ['"Quicksand"'],
            serif: ['"Antic Slab"'],
        },
    },
    variants: {
        extend: {
            width: ['hover'],
            // fontSize: ['focus'],
            // fontWeight: ['focus'],
        },
    },
};
