<template>
    <div class="bg-gray-200 py-16 min-h-screen min-w-screen">
        <div class="container bg-white shadow-md rounded mx-auto py-8 px-4">
            <router-view />
        </div>
    </div>
</template>

<script lang="ts">
export default {
    name: 'App',
};
</script>
