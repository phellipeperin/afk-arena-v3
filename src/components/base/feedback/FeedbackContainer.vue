<template>
    <div>
        {{ messageList }}
    </div>
</template>

<script>
export default {
    name: 'FeedbackContainer',
    data() {
        return {
            messageList: [],
        };
    },
    watch: {
        '$store.state.app.feedbackMessage': function (value) {
            console.log(value);
        },
    },
};
</script>
