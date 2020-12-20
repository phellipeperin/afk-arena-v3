<template>
    <div
        class="w-96 h-16 px-4 flex items-center absolute right-4 bottom-4 rounded shadow text-white font-medium cursor-pointer transition-opacity"
        :class="`bg-${type} ${show ? 'opacity-100' : 'opacity-0'}`"
        @click="close"
    >
        {{ message }}
    </div>
</template>

<script>
export default {
    name: 'FeedbackContainer',
    data() {
        return {
            message: '',
            type: '',
            show: false,
            timeout: null,
        };
    },
    watch: {
        '$store.state.app.feedbackMessage': function (newMessage) {
            this.message = newMessage.message;
            this.type = newMessage.type;
            this.show = true;

            clearTimeout(this.timeout);
            this.timeout = setTimeout(() => {
                this.show = false;
            }, 5000);
        },
    },
    methods: {
        close() {
            clearTimeout(this.timeout);
            this.show = false;
        },
    },
};
</script>
