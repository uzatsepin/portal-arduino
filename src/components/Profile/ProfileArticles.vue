<script setup lang="ts">
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle
} from '@/components/ui/card'
import { useArticleStore } from '@/stores/articles'
import type { IArticle } from '@/stores/types'
import { computed, onMounted, ref, type ComputedRef } from 'vue'
import { useRoute } from 'vue-router'

const articleStore = useArticleStore()
const profileId: ComputedRef = computed(() => useRoute().params.id)

const articlesData = ref<IArticle[]>([])

onMounted(async () => {
    await articleStore.getUsersArticles(profileId.value)

    articlesData.value = articleStore.authorArticles

})
</script>

<template>
    <div class="flex items-center">
        <h1 class="text-lg font-semibold md:text-2xl">
            Мої статті
        </h1>
    </div>

    <div class='grid grid-cols-2 gap-6'>
        <Card v-for='article in articlesData' :key='article.id'>
            <CardHeader>
                <CardTitle>{{ article.title }}</CardTitle>
                <CardDescription>{{ article.short_descr }}</CardDescription>
            </CardHeader>
            <CardContent>
                {{ article.created_at }}
            </CardContent>
        </Card>
    </div>


</template>



<style scoped></style>