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
import { useAuthStore } from '@/stores/auth'
import { onMounted, ref } from 'vue'

export interface IArticle {
  id: number,
  title: string,
  image: string,
  text: string,
  date: string,
  category: string,
  views: number | null,
  comments: number | null

  author: {
    id: number,
    name: string,
    avatar: string
  }
}

const articles = ref<IArticle[]>([
  {
    id: 1,
    title: '8 High performance Notebooks',
    image: 'https://images.unsplash.com/photo-1610465299996-30f240ac2b1c?auto=format&q=75&fit=crop&w=600',
    text: 'This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a real written text but is random or otherwise generated.',
    date: 'January 27, 2021',
    category: 'Article',
    views: 21,
    comments: 2,

    author: {
      id: 1,
      name: 'Ann Park',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&q=75&fit=crop&w=64'
    }
  },
  {
    id: 2,
    title: "Top 10 Productivity Apps for Remote Work",
    image: "https://images.unsplash.com/photo-1603176284824-52e6e42b14c5?auto=format&q=75&fit=crop&w=600",
    text: "In the era of remote work, productivity apps have become essential tools for staying organized and efficient. Here are the top 10 productivity apps to streamline your remote work experience.",
    date: "March 10, 2023",
    category: "Article",
    views: 323,
    comments: 4,
    author: {
      id: 2,
      name: "John Smith",
      avatar: "https://images.unsplash.com/photo-1599568612129-e14b0c7fa93b?auto=format&q=75&fit=crop&w=64"
    }
  },
  {
    id: 3,
    title: "The Ultimate Guide to Smartphone Photography",
    image: "https://images.unsplash.com/photo-1529250747883-eaecb0056f12?auto=format&q=75&fit=crop&w=600",
    text: "Capture stunning photos with your smartphone using these expert tips and techniques. From composition to editing, this guide covers everything you need to know to take your smartphone photography to the next level.",
    date: "August 5, 2022",
    category: "Article",
    views: 32,
    comments: 1,
    author: {
      id: 3,
      name: "Emily Brown",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&q=75&fit=crop&w=64"
    }
  },
  {
    id: 4,
    title: "Healthy Eating Habits: Tips for a Balanced Diet",
    image: "https://images.unsplash.com/photo-1521633276610-7a19e2f26ae6?auto=format&q=75&fit=crop&w=600",
    text: "Maintaining a balanced diet is essential for overall health and well-being. Learn about healthy eating habits, including portion control, meal planning, and incorporating a variety of nutritious foods into your diet.",
    date: "June 20, 2023",
    category: "Article",
    views: 22,
    comments: null,
    author: {
      id: 4,
      name: "Michael Johnson",
      avatar: "https://images.unsplash.com/photo-1551173757-1d3a27217b31?auto=format&q=75&fit=crop&w=64"
    }
  },
  {
    id: 4,
    title: "Healthy Eating Habits: Tips for a Balanced Diet",
    image: "https://images.unsplash.com/photo-1521633276610-7a19e2f26ae6?auto=format&q=75&fit=crop&w=600",
    text: "Maintaining a balanced diet is essential for overall health and well-being. Learn about healthy eating habits, including portion control, meal planning, and incorporating a variety of nutritious foods into your diet.",
    date: "June 20, 2023",
    category: "Article",
    views: 12,
    comments: null,
    author: {
      id: 4,
      name: "Michael Johnson",
      avatar: "https://images.unsplash.com/photo-1551173757-1d3a27217b31?auto=format&q=75&fit=crop&w=64"
    }
  },
  {
    id: 5,
    title: "Exploring the Benefits of Meditation",
    image: "https://images.unsplash.com/photo-1567497665774-8f442f1b245e?auto=format&q=75&fit=crop&w=600",
    text: "Discover the numerous benefits of meditation for mental and physical well-being. From reducing stress and anxiety to improving focus and concentration, meditation has transformative effects on overall health.",
    date: "November 12, 2022",
    category: "Article",
    views: 78,
    comments: 1,
    author: {
      id: 5,
      name: "Sophia Rodriguez",
      avatar: "https://images.unsplash.com/photo-1547941020-9eb4fb7e3d00?auto=format&q=75&fit=crop&w=64"
    }
  },
  {
    id: 6,
    title: "The Rise of Virtual Reality: A Look into the Future",
    image: "https://images.unsplash.com/photo-1505734161895-79b16c38ae6d?auto=format&q=75&fit=crop&w=600",
    text: "Virtual reality technology is revolutionizing various industries, from gaming to healthcare. Explore the potential applications of VR and its impact on the future of entertainment, education, and beyond.",
    date: "April 3, 2023",
    category: "Article",
    views: 98,
    comments: 2,
    author: {
      id: 6,
      name: "David Williams",
      avatar: "https://images.unsplash.com/photo-1560493676-ea3df6c9e5e5?auto=format&q=75&fit=crop&w=64"
    }
  },
  {
    id: 7,
    title: "The Art of Storytelling: Engage Your Audience",
    image: "https://images.unsplash.com/photo-1544022615-b68e9c61f087?auto=format&q=75&fit=crop&w=600",
    text: "Master the art of storytelling to captivate and engage your audience. Whether you're a marketer, educator, or entertainer, effective storytelling techniques can enhance your communication skills and leave a lasting impact.",
    date: "September 18, 2022",
    category: "Article",
    views: 33,
    comments: 1,
    author: {
      id: 7,
      name: "Sarah Johnson",
      avatar: "https://images.unsplash.com/photo-1525185934229-37ff29e6c8a9?auto=format&q=75&fit=crop&w=64"
    }
  },
  {
    id: 8,
    title: "Beginner's Guide to Yoga: Poses and Benefits",
    image: "https://images.unsplash.com/photo-1516467508483-a7212febea95?auto=format&q=75&fit=crop&w=600",
    text: "Embark on your yoga journey with this beginner's guide. Learn about basic yoga poses, breathing techniques, and the physical and mental benefits of incorporating yoga into your daily routine.",
    date: "July 9, 2023",
    category: "Article",
    views: 5,
    comments: null,
    author: {
      id: 8,
      name: "Jessica Lee",
      avatar: "https://images.unsplash.com/photo-1556054692-8f36d291bccf?auto=format&q=75&fit=crop&w=64"
    }
  },
  {
    id: 9,
    title: "The Power of Positive Thinking: Benefits and Strategies",
    image: "https://images.unsplash.com/photo-1502444330041-5f1ae25b52e5?auto=format&q=75&fit=crop&w=600",
    text: "Discover the transformative power of positive thinking. Learn about the benefits of cultivating a positive mindset and explore practical strategies to adopt a more optimistic outlook on life.",
    date: "December 30, 2022",
    category: "Article",
    views: 3,
    comments: null,
    author: {
      id: 9,
      name: "Daniel Adams",
      avatar: "https://images.unsplash.com/photo-1521402492424-04780e4f5a9e?auto=format&q=75&fit=crop&w=64"
    }
  },
  {
    id: 10,
    title: "The Future of Artificial Intelligence: Trends and Challenges",
    image: "https://images.unsplash.com/photo-1568320131236-e156db476f44?auto=format&q=75&fit=crop&w=600",
    text: "Explore the latest trends and future prospects of artificial intelligence. From machine learning to robotics, delve into the exciting advancements, potential challenges, and ethical considerations shaping the AI landscape.",
    date: "May 15, 2023",
    category: "Article",
    views: 765,
    comments: 12,
    author: {
      id: 10,
      name: "Chris Wilson",
      avatar: "https://images.unsplash.com/photo-1552664730-ffe8779f6f37?auto=format&q=75&fit=crop&w=64"
    }
  }
])

const authStore = useAuthStore()
const isLoading = ref<boolean>(false)

onMounted(async () => {
  try {
    isLoading.value = true
    await authStore.getIsAuth()
    isLoading.value = false
  } catch (e) {
    isLoading.value = false
    console.log(e)

  }
})

</script>

<template>
  <MainLayout v-if='!isLoading'>
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
  <MainLayout v-else>
    <div class='h-screen flex items-center justify-center '>
      <div class='h-48 w-48'>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
          <radialGradient id="a11" cx=".66" fx=".66" cy=".3125" fy=".3125" gradientTransform="scale(1.5)">
            <stop offset="0" stop-color="#3E3E3E"></stop>
            <stop offset=".3" stop-color="#3E3E3E" stop-opacity=".9"></stop>
            <stop offset=".6" stop-color="#3E3E3E" stop-opacity=".6"></stop>
            <stop offset=".8" stop-color="#3E3E3E" stop-opacity=".3"></stop>
            <stop offset="1" stop-color="#3E3E3E" stop-opacity="0"></stop>
          </radialGradient>
          <circle transform-origin="center" fill="none" stroke="url(#a11)" stroke-width="26" stroke-linecap="round"
            stroke-dasharray="200 1000" stroke-dashoffset="0" cx="100" cy="100" r="70">
            <animateTransform type="rotate" attributeName="transform" calcMode="spline" dur="2" values="360;0"
              keyTimes="0;1" keySplines="0 0 1 1" repeatCount="indefinite"></animateTransform>
          </circle>
          <circle transform-origin="center" fill="none" opacity=".2" stroke="#3E3E3E" stroke-width="26"
            stroke-linecap="round" cx="100" cy="100" r="70"></circle>
        </svg>
      </div>
    </div>
  </MainLayout>
</template>
