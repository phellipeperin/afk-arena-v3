<template>
    <div class="h-full flex items-center justify-center">
        <div class="flex flex-col w-1/2 text-center">
            <ui-title
                text="Login"
                extra-classes="mb-8"
            />
            <ui-text-input
                center
                placeholder="Username"
            />
            <ui-text-input
                center
                type="password"
                placeholder="Password"
            />
            <ui-button
                size="lg"
                text="Login"
            />
            <ui-button
                size="sm"
                variant="text"
                text="Don't have an account?"
            />
        </div>
    </div>
</template>

<script lang="ts">
import firebase from 'firebase';

import feedbackService from '../../../application/services/feedbackService';

import UiTitle from '../../ui/text/UiTitle.vue';
import UiTextInput from '../../ui/input/UiTextInput.vue';
import UiButton from '../../ui/button/UiButton.vue';

export default {
    name: 'AuthPage',
    components: { UiTitle, UiTextInput, UiButton },
    mixins: [feedbackService],
    data() {
        return {
            username: '',
            password: '',
            onSignUp: false,
        };
    },
    methods: {
        register() {
            firebase.auth().createUserWithEmailAndPassword(this.username, this.password).then(() => {
                this.showMessage('Account created successfully! :)', 'success');
                // this.$router.push('/');
            }).catch((error) => {
                this.showMessage(error.message, 'warning');
            });
        },
    },
};
</script>
