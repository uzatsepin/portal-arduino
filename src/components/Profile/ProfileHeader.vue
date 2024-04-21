<script setup lang="ts">
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import type { IUserMetadata } from '@/stores/types'
import type { IProfileLinks } from '@/views/MyProfileView.vue'
import { Icon } from '@iconify/vue'
import { RouterLink } from 'vue-router'

defineProps<{
    link: IProfileLinks[],
    userData: IUserMetadata
}>()

</script>

<template>
    <header class="flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6">
        <Sheet>
            <SheetTrigger as-child>
                <Button variant="outline" size="icon" class="shrink-0 md:hidden">
                    <Icon icon="lucide:menu" class='h-5 w-5' />
                    <span class="sr-only">Меню</span>
                </Button>
            </SheetTrigger>
            <SheetContent side="left" class="flex flex-col">
                <nav class="grid gap-2 text-lg font-medium">
                    <a href='/' class="flex items-center gap-2 text-lg font-semibold">
                        <Icon icon="lucide:package-2" class="h-6 w-6" />
                        <span class="sr-only">Acme Inc</span>
                    </a>

                    <ul>
                        <li v-for='(item, idx) in link' :key='idx'>
                            <RouterLink :to="{ name: item.component, params: { id: $route.params.id } }"
                                class="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
                                :class='{ "bg-muted": item.component === $route.name }'>
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
                <div class="mt-auto">
                    <Card>
                        <CardHeader>
                            <CardTitle>Upgrade to Pro</CardTitle>
                            <CardDescription>
                                Unlock all features and get unlimited access to our
                                support team.
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <Button size="sm" class="w-full">
                                Upgrade
                            </Button>
                        </CardContent>
                    </Card>
                </div>
            </SheetContent>
        </Sheet>
        <div class="w-full flex-1">
            <form>
                <div class="relative">
                    <Icon icon="lucide:search" class="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input type="search" placeholder="Search products..."
                        class="w-full appearance-none bg-background pl-8 shadow-none md:w-2/3 lg:w-1/3" />
                </div>
            </form>
        </div>
        <DropdownMenu>
            <DropdownMenuTrigger as-child>
                <Button variant="secondary" size="icon" class="rounded-full">
                    <Icon icon="lucide:circle-user" class="h-5 w-5" />
                    <span class="sr-only">Toggle user menu</span>
                </Button>
                {{ userData.email }}
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                <DropdownMenuLabel>Мій аккаунт</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Settings</DropdownMenuItem>
                <DropdownMenuItem>Support</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Logout</DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    </header>
</template>

<style scoped></style>