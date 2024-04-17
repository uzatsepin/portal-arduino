<script setup lang="ts">
import { Icon } from '@iconify/vue'
import Button from './ui/button/Button.vue'
</script>

<template>
    <section class="mb-8 flex flex-col justify-between gap-6 sm:gap-10 md:mb-16 md:gap-16 lg:flex-row">
        <!-- content - start -->
        <div class="flex flex-col justify-center sm:text-center lg:py-12 lg:text-left xl:w-5/12">
            <p class="mb-4 font-semibold text-slate-600 md:mb-6 md:text-lg xl:text-xl">Arduino спільнота</p>

            <h1 class="mb-8 text-4xl font-bold text-slate-900 sm:text-5xl md:mb-12 md:text-6xl">
                Цікаві статті та товари
            </h1>

            <div class="flex flex-col gap-2.5 sm:flex-row sm:justify-center lg:justify-start">
                <Button>
                    <Icon icon="jam:write" class='w-5 h-5 mr-2' />
                    Стати автором
                </Button>
                <Button variant='secondary'>
                    <Icon icon="ic:outline-sell" class='w-5 h-5 mr-2' />
                    Стати продавцем
                </Button>
            </div>
        </div>
        <!-- content - end -->

        <!-- image - start -->
        <div class="h-48 overflow-hidden rounded-lg bg-gray-100 shadow-lg lg:h-96 xl:w-5/12">
            <img src="https://images.unsplash.com/photo-1557855506-3619a44bab73?q=80&w=3213&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                loading="lazy" alt="Arduino Title photo" class="h-full w-full object-cover object-center" />
        </div>
        <!-- image - end -->
    </section>
</template>


<style scoped></style>