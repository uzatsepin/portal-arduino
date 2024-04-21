<script setup lang='ts'>
import ProfileHeader from '@/components/Profile/ProfileHeader.vue'
import ProfileSidebar from '@/components/Profile/ProfileSidebar.vue'
import ProfileLayout from '@/Layout/ProfileLayout.vue'
import { useAuthStore } from '@/stores/auth'
import type { IUserData } from '@/stores/types'
import type { ComputedRef } from 'vue'
import { computed } from 'vue'
import { RouterView } from 'vue-router'

const authStore = useAuthStore()

const authData: ComputedRef = computed((): IUserData | null => authStore.authData)

export interface IProfileLinks {
    name: string
    component: string,
    icon: string
    sales?: string
}

const profileLinks: IProfileLinks[] = [
    { name: 'Мій профіль', component: 'Dashboard', icon: 'lucide:home' },
    { name: 'Мої статті', component: 'Articles', icon: 'lucide:notebook-text' },
    { name: 'Мої товари', component: 'Products', icon: 'lucide:package' },
    { name: 'Продажі', component: 'Sales', icon: 'lucide:shopping-cart', sales: '12' },
    // { name: 'Аналітика', component: 'Analytics', icon: 'lucide:line-chart' }
]


</script>


<template>
    <div class="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
        <div class="hidden border-r bg-muted/40 md:block">
            <!-- SIDEBAR -->
            <ProfileSidebar :link='profileLinks' />
        </div>
        <div class="flex flex-col">
            <ProfileHeader :link='profileLinks' :userData='authData.user_metadata' />
            <ProfileLayout>
                <RouterView />
            </ProfileLayout>
        </div>
    </div>
</template>