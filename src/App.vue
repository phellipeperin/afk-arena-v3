<template>
    <div class="bg-gray-200 py-16 min-h-screen h-screen min-w-screen">
        <div class="container h-full bg-white shadow-md mx-auto">
            <router-view />
        </div>

        <feedback-container />
    </div>
</template>

<script lang="ts">
import FeedbackContainer from './components/base/feedback/FeedbackContainer.vue';

export default {
    name: 'App',
    components: { FeedbackContainer },
};
</script>
