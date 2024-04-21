<script setup lang="ts">
import MainLayout from "@/Layout/MainLayout.vue"
import Header from "@/components/Header.vue"
import Loader from "@/components/Loader.vue"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Toaster } from "@/components/ui/toast"
import { useToast } from "@/components/ui/toast/use-toast"
import { useAuthStore } from "@/stores/auth"
import { supabase } from "@/supabase/supabase"
import { computed, ref } from "vue"

interface IArticleData {
    title: string
    image: string
    short_descr: string
    full_text: string
    category: string
    author?: string
}

const authStore = useAuthStore()
const { toast } = useToast()

const authorId = computed(() => {
    return authStore.authData?.id
})

const articleData = ref<IArticleData>({
    title: "",
    image: "",
    short_descr: "",
    full_text: "",
    category: "",
})

const isLoading = ref<boolean>(false)

async function sendArticle() {
    try {
        isLoading.value = true
        const response = await supabase.from("articles").insert({
            ...articleData.value,
            author: authorId.value,
        })

        if (response.error) {
            toast({
                title: "Помилка",
                description: response.error.message,
                variant: "destructive",
            })
        } else {
            toast({
                title: "Статтю опубліковано",
                description: `Статтю ${articleData.value.title} опубліковано`,
            })

            articleData.value = {
                title: "",
                image: "",
                short_descr: "",
                full_text: "",
                category: "",
            }

            isLoading.value = false
        }
    } catch (error) {
        console.log(error)
    }
}
</script>

<template>
    <MainLayout>
        <Toaster />
        <Header />
        <div class="max-w-[480px] mx-auto" v-if='!isLoading'>
            <div class="grid gap-4 py-4">
                <div class="grid grid-cols-4 items-center gap-4">
                    <Label for="name" class="text-right"> Назва новини </Label>
                    <Input id="name" class="col-span-3" placeholder="Назва статті..." v-model="articleData.title" />
                </div>
                <div class="grid grid-cols-4 items-center gap-4">
                    <Label for="name" class="text-right"> Зображення </Label>
                    <Input id="name" class="col-span-3" placeholder="Зображення..." v-model="articleData.image" />
                </div>
                <div class="grid grid-cols-4 items-center gap-4">
                    <Label for="name" class="text-right"> Короткий опис </Label>
                    <Input id="name" class="col-span-3" placeholder="Короткий опис" v-model="articleData.short_descr" />
                </div>
                <div class="grid grid-cols-4 items-center gap-4">
                    <Label for="name" class="text-right"> Повний текст </Label>
                    <Input id="name" class="col-span-3" placeholder="Повний текст..." v-model="articleData.full_text" />
                </div>
                <div class="grid grid-cols-4 items-center gap-4">
                    <Label for="name" class="text-right"> Категорія </Label>
                    <Input id="name" class="col-span-3" placeholder="Пропишіть категорію"
                        v-model="articleData.category" />
                </div>
                <Button @click="sendArticle">Опублікувати статтю</Button>
            </div>
        </div>

        <div class="max-w-[480px] min-h-[300px] mx-auto flex justify-center items-center" v-else>
            <Loader />
        </div>

    </MainLayout>
</template>

<style scoped></style>
