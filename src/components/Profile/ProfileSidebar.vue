<script setup lang="ts">
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import type { IProfileLinks } from '@/views/MyProfileView.vue'
import { Icon } from '@iconify/vue'

defineProps<{
    link: IProfileLinks[]
}>()
</script>

<template>
    <div class="flex h-full max-h-screen flex-col gap-2">
        <div class="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
            <a href="/" class="flex items-center gap-2 font-semibold">
                <Icon icon="devicon-plain:arduino" class="h-6 w-6" />
                <span class="">ArdCom</span>
            </a>
        </div>
        <div class="flex-1">
            <nav class="grid items-start px-2 text-sm font-medium lg:px-4">

                <ul>
                    <li v-for='(item, idx) in link' :key='idx'>
                        <RouterLink :to="{ name: item.component, params: { id: $route.params.id } }"
                            class="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
                            :class='{ "bg-muted text-primary": item.component === $route.name }'>
                            <Icon :icon="item.icon" class='h-5 w-5' />
                            {{ item.name }}
                            <Badge class="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full"
                                v-if='item.sales'>
                                {{ item.sales }}
                            </Badge>
                        </RouterLink>
                    </li>
                </ul>
            </nav>
        </div>
        <div class="mt-auto p-4">
            <Card>
                <CardHeader class="p-2 pt-0 md:p-4">
                    <CardTitle>Upgrade to Pro</CardTitle>
                    <CardDescription>
                        Unlock all features and get unlimited access to our support
                        team.
                    </CardDescription>
                </CardHeader>
                <CardContent class="p-2 pt-0 md:p-4 md:pt-0">
                    <Button size="sm" class="w-full">
                        Upgrade
                    </Button>
                </CardContent>
            </Card>
        </div>
    </div>
</template>

<style scoped></style>