<script setup lang="ts">
import Footer from '@/components/Footer.vue'
import Header from '@/components/Header.vue'
import HeroSection from '@/components/HeroSection.vue'
import MainPageArticle from '@/components/MainPage/MainPageArticle.vue'
import MainPageProduct from '@/components/MainPage/MainPageProduct.vue'
import MainPageQuestion from '@/components/MainPage/MainPageQuestion.vue'
import MainPageStats from '@/components/MainPage/MainPageStats.vue'
import MainLayout from '@/Layout/MainLayout.vue'
import MainSectionLayout from '@/Layout/MainSectionLayout.vue'
import { products, questions } from '@/mockdata'
import { useArticleStore } from '@/stores/articles'
import { computed } from 'vue'


const articleStore = useArticleStore()

const articles = computed(() => articleStore.articlesList);


</script>

<template>
  <MainLayout>
    <Header />
    <HeroSection />
    <MainPageStats />

    <MainSectionLayout title="Останні статті" text="Останні статті нашого блогу ардуінщика">
      <div class="grid gap-4 sm:grid-cols-1 md:gap-6 lg:grid-cols-2 xl:grid-cols-3 xl:gap-8">
        <MainPageArticle v-for='article in articles.slice(0, 3)' :key='article.id' :article='article' />
      </div>
    </MainSectionLayout>
    <MainSectionLayout title="Останні надходження" text="Останні товари, які надійшли до магазину">
      <div class="grid gap-x-4 gap-y-8 sm:grid-cols-2 md:gap-x-6 lg:grid-cols-3 xl:grid-cols-4">
        <MainPageProduct v-for='product in products' :key='product.id' :product='product' />
      </div>
    </MainSectionLayout>

    <MainSectionLayout title='Часті запитання' text='Відповіді на запитання, які нам задають частіше за все'>
      <div class="grid gap-4 sm:grid-cols-2 md:gap-8">
        <MainPageQuestion v-for='question in questions' :key='question.id' :question='question' />
      </div>
    </MainSectionLayout>

    <Footer />
  </MainLayout>
</template>
