<template>
    <button
        :disabled="disabled"
        :class="`${classes}`"
        @click="handleClick"
    >
        <ui-icon :path="require('../../../assets/icons/circle-notch.svg')" />
        {{ text }}
    </button>
</template>

<script lang="ts">
import UiIcon from '../icon/UiIcon.vue';

export default {
    name: 'UiButton',
    components: { UiIcon },
    props: {
        text: { type: String, required: true },
        variant: { type: String, default: 'filled', validator: (value: string) => ['filled', 'text'].indexOf(value) !== -1 },
        size: { type: String, default: 'md', validator: (value: string) => ['sm', 'md', 'lg'].indexOf(value) !== -1 },
        disabled: { type: Boolean, default: false },
        loading: { type: Boolean, default: false },
        extraClasses: { type: String, default: '' },
    },
    computed: {
        classes() {
            const baseClasses = 'w-full m-1 rounded uppercase font-medium focus:outline-none';
            const transitionClasses = 'transition-all duration-400 ease-in-out';
            let sizeClasses = '';
            let colorClasses = '';
            let hoverClasses = '';

            if (this.variant === 'filled') {
                if (this.disabled) {
                    colorClasses = 'bg-disabled text-white shadow';
                } else {
                    colorClasses = 'bg-accent text-white shadow';
                    hoverClasses = 'hover:bg-primary';
                }
            }
            if (this.variant === 'text') {
                colorClasses = 'bg-transparent text-accent';
                hoverClasses = 'hover:text-primary';
            }

            if (this.size === 'sm') {
                sizeClasses = 'h-8 text-sm';
            }
            if (this.size === 'md') {
                sizeClasses = 'h-10 text-base';
            }
            if (this.size === 'lg') {
                sizeClasses = 'h-12 text-lg';
            }

            return `${baseClasses} ${sizeClasses} ${colorClasses} ${hoverClasses} ${transitionClasses} ${this.extraClasses}`;
        },
    },
    methods: {
        handleClick() {
            this.$emit('click');
        },
    },
};
</script>
