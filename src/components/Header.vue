<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { Avatar, AvatarImage } from '@/components/ui/avatar'
import { Checkbox } from '@/components/ui/checkbox'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Toaster } from "@/components/ui/toast"
import { useToast } from '@/components/ui/toast/use-toast'
import { useAuthStore } from '@/stores/auth'
import { supabase } from '@/supabase/supabase'
import { Icon } from '@iconify/vue'
import { computed, ref } from 'vue'
import Button from './ui/button/Button.vue'

const { toast } = useToast()
interface IAuthData {
  email: string
  password: string
}

interface IRegData {
  email: string,
  password: string,
  first_name: string,
  last_name: string,
  is_seller: boolean,
  avatar: string | null | number,
}

interface InputFileEvent extends Event {
  target: HTMLInputElement
}

const authData = ref<IAuthData>({
  email: '',
  password: '',
})

const regData = ref<IRegData>({
  email: '',
  password: '',
  first_name: '',
  last_name: '',
  is_seller: false,
  avatar: '',
})

const authStore = useAuthStore()

const userData = computed(() => authStore.authData)

const isLoading = ref<boolean>(false)

async function signInWithEmail() {
  try {
    const { data, error } = await supabase.auth.signInWithPassword({
      email: authData.value.email,
      password: authData.value.password
    })
    if (error) {
      toast({
        title: 'Error',
        description: error.message,
        variant: 'destructive'
      })
    }

    if (data.user && data.session) {
      toast({
        title: 'Success',
        description: 'Вхід успішний',
      })
    }
  } catch (e) {
    console.log(e)
  }
}

async function signUpNewUser() {
  try {
    isLoading.value = true
    const { data, error } = await supabase.auth.signUp({
      email: regData.value.email,
      password: regData.value.password,
      options: {
        data: {
          first_name: regData.value.first_name,
          last_name: regData.value.last_name,
          is_seller: regData.value.is_seller,
          avatar: regData.value.avatar,
          rating: null,
        }
      }
    })
    if (error) {
      isLoading.value = false
      toast({
        title: 'Виникла помилка',
        description: error.message,
        variant: 'destructive'
      })
    } else {
      isLoading.value = false
      toast({
        title: 'Успішно',
        description: 'Реєстрація успішна',
      })
    }
  } catch (e) {
    console.log(e)
    isLoading.value = false
  }
}

async function signOut() {
  await supabase.auth.signOut().then(() => {
    toast({
      title: 'Success',
      description: 'Вихід успішний',
    })
  }).catch((error) => {
    toast({
      title: 'Error',
      description: error.message,
      variant: 'destructive'
    })
  })
}

async function uploadFile(file: any) {
  const { data, error } = await supabase.storage.from('avatars').upload(`${regData.value.email ? regData.value.email : Math.random()}_avatar`, file)

  const link = 'https://qejuzbwufjbldqnrceyj.supabase.co/storage/v1/object/public/avatars/'

  if (error) {
    console.log(error)
    toast({
      title: 'Помилка',
      description: error.message,
      variant: 'destructive'
    })
  } else {
    toast({
      title: 'Завантажено',
      description: 'Аватар успішно завантажено',
    })
    regData.value.avatar = link + data.path
  }
}


</script>

<template>

  <Toaster />

  <header class="mb-8 flex items-center justify-between py-4 md:mb-12 md:py-8 xl:mb-16">
    <a href="/" class="inline-flex items-center gap-2.5 text-2xl font-bold text-black md:text-3xl" aria-label="logo">
      <Icon icon="devicon-plain:arduino" class='h-auto w-10' />
      ArdCom
    </a>

    <!-- nav - start -->
    <nav class="hidden gap-12 lg:flex">
      <a href="#" class="text-lg font-semibold text-slate-800">
        Домашня
      </a>
      <a href="#"
        class="text-lg font-semibold text-slate-500 transition duration-100 hover:text-slate-800 active:text-slate-900">
        Статті
      </a>
      <a href="#"
        class="text-lg font-semibold text-slate-500 transition duration-100 hover:text-slate-800 active:text-slate-900">
        Товари
      </a>
      <a href="#"
        class="text-lg font-semibold text-slate-500 transition duration-100 hover:text-slate-800 active:text-slate-900">
        Подробиці
      </a>
    </nav>
    <!-- nav - end -->

    <!-- buttons - start -->

    <div class='hidden gap-2 items-center lg:flex' v-if='!authStore.authData'>
      <Dialog>
        <DialogTrigger as-child>
          <Button>
            Вхід
          </Button>
        </DialogTrigger>
        <DialogContent class="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Авторизація</DialogTitle>
            <DialogDescription>
              Для того, щоб увійти у свій аккаунт, необхідно авторизуватися.
            </DialogDescription>
          </DialogHeader>
          <div class="grid gap-4 py-4">
            <div class="grid grid-cols-4 items-center gap-4">
              <Label for="name" class="text-right">
                Email
              </Label>
              <Input id="name" v-model='authData.email' class="col-span-3" placeholder='Введіть ваш email...' />
            </div>
            <div class="grid grid-cols-4 items-center gap-4">
              <Label for="username" class="text-right">
                Пароль
              </Label>
              <Input id="username" v-model='authData.password' class="col-span-3" placeholder='******'
                type='password' />
            </div>
          </div>
          <DialogFooter class='mx-auto'>
            <Button @click='signInWithEmail'>
              Авторизуватись
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>


      <Dialog>
        <DialogTrigger as-child>
          <Button variant="secondary">
            Реєстрація
          </Button>
        </DialogTrigger>
        <DialogContent class="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Реєстрація</DialogTitle>
            <DialogDescription>
              Для публікацій статей та товарів необхідно зареєструватись
            </DialogDescription>
          </DialogHeader>
          <div class="grid gap-4 py-4">
            <div class="grid grid-cols-4 items-center gap-4">
              <Label for="email" class="text-right">
                Email
              </Label>
              <Input id="email" class="col-span-3" placeholder='Введіть ваш email...' v-model='regData.email' />
            </div>
            <div class="grid grid-cols-4 items-center gap-4">
              <Label for="password" class="text-right">
                Password
              </Label>
              <Input id="password" v-model='regData.password' class="col-span-3" placeholder='******' type='password' />
            </div>
            <div class="grid grid-cols-4 items-center gap-4">
              <Label for="name" class="text-right">
                Імʼя
              </Label>
              <Input id="name" class="col-span-3" placeholder='Введіть ваше імʼя...' v-model='regData.first_name' />
            </div>
            <div class="grid grid-cols-4 items-center gap-4">
              <Label for="last_name" class="text-right">
                Прізвище
              </Label>
              <Input id="last_name" class="col-span-3" placeholder='Введіть ваше прізвище...'
                v-model='regData.last_name' />
            </div>
            <div class="grid grid-cols-4 items-center gap-4">
              <label for="terms2"
                class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 col-span-1">
                Продавець?
              </label>
              <Checkbox id="terms1" :checked='regData.is_seller'
                @update:checked='() => regData.is_seller = !regData.is_seller' class='col-span-3' />

            </div>
            <div class="grid grid-cols-4 items-center gap-4">
              <Label for="avatar" class='text-right'>Аватар</Label>
              <Input id="avatar" class="col-span-3" type="file" placeholder='Введіть ваше прізвище...'
                @change='(e: InputFileEvent) => uploadFile(e.target.files ? e.target.files[0] : null)' />
            </div>
          </div>
          <DialogFooter>
            <Button type="submit" @click='signUpNewUser' class='mx-auto' :disabled='isLoading'>
              <Icon icon="zondicons:reload" class='w-4 h-4 mr-2 animate-spin' v-if='isLoading' />
              Зареєструватись
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>

    <div v-else>
      <DropdownMenu>
        <DropdownMenuTrigger class='flex items-start gap-4'>
          <Avatar class='w-12 h-12'>
            <AvatarImage :src='userData?.user_metadata.avatar'>
            </AvatarImage>
          </Avatar>
          <div class='flex flex-col gap-1 items-start'>
            <div class='text-muted-foreground text-sm'>{{ userData?.user_metadata.first_name }} {{
              userData?.user_metadata.last_name }}</div>
            <div class='text-sm'>{{ userData?.email }}</div>
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>
            Меню
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <RouterLink to='/addarticle' class='flex'>
              <Icon icon="gridicons:add" class='h-5 w-5 mr-2' />Додати статтю
            </RouterLink>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <Icon icon="mdi:account" class='h-5 w-5 mr-2' />Мій аккаунт
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Icon icon="material-symbols:article" class='h-5 w-5 mr-2' />Мої статті
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Icon icon="mingcute:chip-fill" class='h-5 w-5 mr-2' />
            Мої товари
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Icon icon="mingcute:exit-line" class='h-5 w-5 mr-2' />
            Вихід
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>



    <button type="button"
      class="inline-flex items-center gap-2 rounded-lg bg-gray-200 px-2.5 py-2 text-sm font-semibold text-gray-500 ring-indigo-300 hover:bg-gray-300 focus-visible:ring active:text-gray-700 md:text-base lg:hidden">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd"
          d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
          clip-rule="evenodd" />
      </svg>
      Menu
    </button>
    <!-- buttons - end -->
  </header>

</template>