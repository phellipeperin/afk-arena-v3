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
        </div>
    </div>
</template>

<script lang="ts">
import UiTitle from '../../ui/text/UiTitle.vue';
import UiTextInput from '../../ui/input/UiTextInput.vue';

export default {
    name: 'AuthPage',
    components: { UiTitle, UiTextInput },
    data() {
        return {
            username: '',
        };
    },
};
</script>
