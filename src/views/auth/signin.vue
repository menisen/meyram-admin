<template>
  <div class="auth-right py-32 px-24 d-flex flex-column justify-content-center">
    <div class="max-w-464-px mx-auto w-100">
      <div>
        <a href="index.html" class="mb-40 max-w-290-px">
          <img class="logo" src="@/assets/images/logo.png" alt="">
        </a>
        <h4 class="mb-12">Вход в аккаунт</h4>
        <p class="mb-32 text-secondary-light text-lg">Добро пожаловать! Пожалуйста, введите свои данные</p>
      </div>
      <form @submit.prevent="signin()">
        <div class="icon-field mb-16">
          <span class="icon top-50 translate-middle-y">
            <Icon icon="mage:email"></Icon>
          </span>
          <MaskInput mask="+7 (7##) ### ####" required v-model="formData.phone" type="text" class="form-control h-56-px bg-neutral-50 radius-12" placeholder="Логин" />
        </div>
        <div class="position-relative mb-20">
          <div class="icon-field">
            <span class="icon top-50 translate-middle-y">
                <Icon icon="solar:lock-password-outline"></Icon>
            </span>
            <input required v-model="formData.password" type="password" class="form-control h-56-px bg-neutral-50 radius-12" id="your-password" placeholder="Пароль">
          </div>
          <span
            class="toggle-password ri-eye-line cursor-pointer position-absolute end-0 top-50 translate-middle-y me-16 text-secondary-light"
            data-toggle="#your-password"></span>
        </div>

        <button type="submit" class="btn btn-primary text-sm btn-sm px-12 py-16 w-100 radius-12 mt-32">Войти</button>
      </form>
    </div>
  </div>
</template>

<script setup>
import {ref} from 'vue'
import api from '../../utils/api.js'
import Cookies from 'js-cookie'
import { useRouter } from 'vue-router'
import {useToast} from 'vue-toastification'
import { Icon } from '@iconify/vue'
import { MaskInput } from 'vue-3-mask'

const router = useRouter()
const toast = useToast()

const formData = ref({
  phone: '',
  password: ''
})

const signin = async () => {
  await api.post('/auth/login', {
    phone: formData.value.phone?.replace('(', '')?.replace(')', '')?.replaceAll(' ', ''),
    password: formData.value.password,
  })
  .then((res) => {
    Cookies.set('admin-meyram-token', res.data?.data?.token)
    Cookies.set('admin-meyram-role', res.data?.data?.role)
    Cookies.set('admin-meyram-uid', res.data?.data?.uid)
    api.defaults.headers['Authorization'] = 'Bearer ' + res.data?.data?.token
  })
  .catch((e) => {
    console.log(e, e.response, e.request)
  })
  if (Cookies.get('admin-meyram-role') === 'user') {
    toast.warning('Нет доступа')
  }
  if (Cookies.get('admin-meyram-uid') && Cookies.get('admin-meyram-role') !== 'user') {
    await api.get(`/users/profile?uid=${Cookies.get('admin-meyram-uid')}`)
      .then((res) => {
        Cookies.set('admin-meyram-profile-id', res.data?.data?.id)
        toast.success('Добро пожаловать!')
        router.push('/')
      })
      .catch((e) => {
        console.log(e, e.response, e.request)
      })
  }
}
</script>

<style scoped>
.logo {
  height: 40px;
}
</style>
