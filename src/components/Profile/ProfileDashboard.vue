<script setup lang="ts">
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle
} from '@/components/ui/card'
</script>

<template>
    <div class="flex items-center">
        <h1 class="text-lg font-semibold md:text-2xl">
            Мій профіль
        </h1>
    </div>
    <div class='grid grid-cols-2 gap-6'>
        <Card>
            <CardHeader>
                <CardTitle>Про користувача</CardTitle>
            </CardHeader>
            <CardContent>
                Card Content
            </CardContent>
        </Card>
        <Card>
            <CardHeader>
                <CardTitle>Про користувача</CardTitle>
            </CardHeader>
            <CardContent>
                Card Content
            </CardContent>
        </Card>
    </div>
</template>

<style scoped></style>