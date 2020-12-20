<template>
    <p
        class="text-4xl font-serif"
        :class="`${whiteColor ? 'text-white' : ''} ${extraClasses}`"
    >
        {{ text }}
    </p>
</template>

<script lang="ts">
export default {
    name: 'UiTitle',
    props: {
        text: { type: String, required: true },
        whiteColor: { type: Boolean, default: false },
        extraClasses: { type: String, default: '' },
    },
};
</script>
