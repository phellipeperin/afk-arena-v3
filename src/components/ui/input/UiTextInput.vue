<template>
    <input
        :value="value"
        :type="type"
        :placeholder="placeholder"
        class="h-10 w-full m-1 text-lg shadow rounded-md border border-transparent
            focus:outline-none focus:ring-2 focus:ring-accent focus:text-xl
            transition-all duration-300 ease-in-out"
        :class="`${extraClasses} ${center ? 'text-center' : ''}`"
        @input="handleChange"
    >
</template>

<script lang="ts">
export default {
    name: 'UiTextInput',
    props: {
        value: { type: String, required: true },
        type: { type: String, default: 'text' },
        placeholder: { type: String, default: '' },
        center: { type: Boolean, default: false },
        extraClasses: { type: String, default: '' },
    },
    methods: {
        handleChange() {
            this.$emit('input', this.value);
        },
    },
};
</script>
