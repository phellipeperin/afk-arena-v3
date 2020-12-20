const primary = '#2C5673';
const accent = '#58CCBC';
// 5c97bf

const themeColors = (theme) => ({
    ...theme('colors'),
    primary,
    accent,
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
