<script setup lang="ts">
import type { IArticle } from '@/stores/types'
import { Icon } from '@iconify/vue'
import dayjs from 'dayjs'
import 'dayjs/locale/ru'
import Badge from '../ui/badge/Badge.vue'

const props = defineProps<{
    article: IArticle
}>()

const date = dayjs(props.article.created_at).locale('ru').format('D MMMM YYYY в H:mm')

</script>

<template>
    <div class="">
        <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden relative">
            <img class="lg:h-64 md:h-36 w-full object-cover object-center" :src="article.image" alt="blog">
            <Badge variant='secondary' class='absolute top-4 left-4'>{{ article.category }}</Badge>
            <div class="p-6">
                <h1 class="title-font text-lg font-medium text-gray-900 mb-3 min-h-[56px] line-clamp-2">
                    {{ article.title }}
                </h1>
                <p class="leading-relaxed mb-3 line-clamp-3">
                    {{ article.short_descr }}
                </p>

                <div class="flex items-center justify-between mt-6">
                    <div class="flex items-center gap-2">
                        <div class="h-10 w-10 shrink-0 overflow-hidden rounded-full bg-gray-100">
                            <img :src="article.author.avatar_url" loading="lazy" alt="Photo by Aiony Haust"
                                class="h-full w-full object-cover object-center" />
                        </div>

                        <div>
                            <span class="block text-slate-700">{{ article.author.first_name }} {{
                                article.author.last_name }}</span>
                            <span class="block text-sm text-muted-foreground">{{ date }}</span>
                        </div>
                    </div>
                    <div class="flex items-center flex-wrap">
                        <span
                            class="text-slate-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                            <Icon icon="ant-design:eye-twotone" class='w-4 h-4 mr-1' />
                            {{ article.views ? article.views : 0 }}
                        </span>

                        <span class="text-gray-400 inline-flex items-center leading-none text-sm">
                            <Icon icon="ant-design:comment-outlined" class='w-4 h-4 mr-1' />
                            {{ article.comments ? article.comments : 0 }}
                        </span>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>


<style scoped></style>