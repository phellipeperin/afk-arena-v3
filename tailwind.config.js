const primary = '#d24d57';
const accent = '#4DD16C';
// 5c97bf
// 85242C

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
            sans: ['"Jura"'],
        },
    },
    variants: {
        extend: {
            fontSize: ['focus'],
        },
    },
};
