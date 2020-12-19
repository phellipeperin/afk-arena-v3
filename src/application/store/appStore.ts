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
        openRequest(state: any) { state.request.active += 1; },
        closeRequest(state: any) { state.request.active -= 1; },

        // Feedback
        // setFeedbackMessage(state: any, payload: any) { state.feedbackMessage = payload; },
    },
};
