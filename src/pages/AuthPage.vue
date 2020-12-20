<template>
    <div class="h-full grid grid-cols-1 md:grid-cols-2">
        <auth-banner />
        <auth-form />
    </div>
</template>

<script lang="ts">
import AuthBanner from '../components/pages/auth/AuthBanner.vue';
import AuthForm from '../components/pages/auth/AuthForm.vue';

export default {
    name: 'AuthPage',
    components: { AuthBanner, AuthForm },
};
</script>
