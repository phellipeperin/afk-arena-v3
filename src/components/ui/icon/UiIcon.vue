<template>
    <img
        :src="path"
        class="w-6"
    >
</template>

<script lang="ts">
export default {
    name: 'UiTextInput',
    props: {
        path: { type: String, required: true },
    },
};
</script>
