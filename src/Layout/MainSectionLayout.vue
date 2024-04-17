<script setup lang="ts">
defineProps<{
    title: string
    text: string
}>()
</script>

<template>
    <div class='mt-10 md:mt-16'>
        <div class="mb-10">
            <h2 class="mb-4 text-2xl font-bold text-slate-800 md:mb-2 lg:text-3xl">
                {{ title }}
            </h2>

            <p class=" max-w-screen-md text-muted-foreground md:text-lg">
                {{ text }}
            </p>
        </div>

        <slot />
    </div>
</template>

<style scoped></style>