const primary = '#3a539b';

const setThemeColors = (theme) => ({
    ...theme('colors'),
    primary,
});

module.exports = {
    theme: {
        textColor: setThemeColors,
        backgroundColor: setThemeColors,
        borderColor: setThemeColors,
    },
};
