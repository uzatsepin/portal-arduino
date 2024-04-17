<script setup lang="ts">
import type { IQuestion } from '@/mockdata'

defineProps<{
    question: IQuestion
}>()
</script>

<template>
    <div class="rounded-lg bg-gray-100 p-5">
        <div class="mb-4 flex items-center justify-between gap-4 border-b pb-4">
            <h3 class="font-semibold text-slate-800 sm:text-lg md:text-xl">{{ question.question }}</h3>

            <span
                class="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gray-300 text-gray-500">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd"
                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                        clip-rule="evenodd" />
                </svg>
            </span>
        </div>

        <p class="text-muted-foreground">
            {{ question.answer }}
        </p>
    </div>
</template>