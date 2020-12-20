export default {
    name: 'feedbackService',
    methods: {
        showMessage(message: string, type: string) {
            this.$store.commit('app/setFeedbackMessage', { message, type });
        },
    },
};
