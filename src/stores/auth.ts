import { supabase } from '@/supabase/supabase'
import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { IUserData } from './types'

export const useAuthStore = defineStore('auth', () => {
  const authData = ref<IUserData | null>(null)

  async function getIsAuth() {
    const response = await supabase.auth.getUser()
    if (response.data.user) {
      authData.value = response.data.user
      console.log(response.data.user)
    }
  }

  return { authData, getIsAuth }
})
