/* eslint-disable no-param-reassign */
export default {
    namespaced: true,
    state: {
        request: {
            active: 0,
        },
        // feedbackMessage: {},
    },
    mutations: {
        // Request
        openRequest(state: any) { state.request.active++; },
        closeRequest(state: any) { state.request.active--; },

        // Feedback
        // setFeedbackMessage(state: any, payload: any) { state.feedbackMessage = payload; },
    },
};
