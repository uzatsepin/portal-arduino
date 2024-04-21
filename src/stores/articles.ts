import { supabase } from '@/supabase/supabase'
import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { IArticle } from './types'

export const useArticleStore = defineStore('articles', () => {
  const articlesList = ref<IArticle[]>([])

  const authorArticles = ref<IArticle[]>([])

  async function getMainPageArticles() {
    try {
      const { data, error } = await supabase
        .from('articles')
        .select('*, author(*)')
        .order('created_at', { ascending: false })

      if (error) {
        console.log(error)
      } else {
        articlesList.value = data
      }
    } catch (e) {
      console.log(e)
    }
  }

  async function getUsersArticles(id: string) {
    try {
      const { data, error } = await supabase
        .from('articles')
        .select('*, author(*)')
        .eq('author.id', id)
        .order('created_at', { ascending: false })

      if (data) {
        authorArticles.value = data.filter((article) => article.author !== null)
      }
    } catch (e) {
      console.log(e)
    }
  }

  getMainPageArticles()
  return { articlesList, getMainPageArticles, getUsersArticles, authorArticles }
})
