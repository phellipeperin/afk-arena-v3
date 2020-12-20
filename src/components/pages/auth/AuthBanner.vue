<template>
    <div class="h-full bg-primary flex items-center justify-center">
        <div class="w-2/3 text-center">
            <ui-title
                white-color
                text="AFK Arena"
            />
            <ui-title
                white-color
                extra-classes="mb-10"
                text="Manager"
            />
            <img
                src="../../../assets/images/flora.png"
                alt="auth art"
                class="w-2/3 mx-auto"
            >
        </div>
    </div>
</template>

<script lang="ts">
import UiTitle from '../../ui/text/UiTitle.vue';

export default {
    name: 'AuthBanner',
    components: { UiTitle },
};
</script>
