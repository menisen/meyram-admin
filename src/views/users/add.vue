<template>
  <div class="d-flex flex-wrap align-items-center justify-content-between gap-3 mb-24">
    <h6 class="fw-semibold mb-0">Добавить сотрудника</h6>
    <ul class="d-flex align-items-center gap-2">
      <li class="fw-medium">
        <router-link to="/" class="d-flex align-items-center gap-1 hover-text-primary">
          <Icon icon="solar:home-smile-angle-outline" class="icon text-lg"></Icon>
          Главная
        </router-link>
      </li>
      <li>-</li>
      <li class="fw-medium">Добавить сотрудника</li>
    </ul>
  </div>
  <div class="card h-100 p-0 radius-12">
    <div class="card-body p-24">
      <div class="row justify-content-center">
        <div class="col-xxl-6 col-xl-8 col-lg-10">
          <div class="card border">
            <div class="card-body">
              <h6 class="text-md text-primary-light mb-16">Аватар</h6>

              <!-- Upload Image Start -->
              <div class="mb-24 mt-16">
                <div class="avatar-upload">
                  <div class="avatar-edit position-absolute bottom-0 end-0 me-24 mt-16 z-1 cursor-pointer">
                    <input type="file" id="imageUpload" accept=".png, .jpg, .jpeg" hidden="">
                    <label for="imageUpload" class="w-32-px h-32-px d-flex justify-content-center align-items-center bg-primary-50 text-primary-600 border border-primary-600 bg-hover-primary-100 text-lg rounded-circle">
                      <Icon icon="solar:camera-outline" class="icon"></Icon>
                    </label>
                  </div>
                  <div class="avatar-preview">
                    <div id="imagePreview"> </div>
                  </div>
                </div>
              </div>
              <!-- Upload Image End -->

              <form @submit.prevent="save()">
                <div class="mb-20">
                  <label for="name" class="form-label fw-semibold text-primary-light text-sm mb-8">ФИО<span class="text-danger-600">*</span></label>
                  <input required v-model="profile.full_name" type="text" class="form-control radius-8" id="name" placeholder="Введите ФИО">
                </div>
                <div class="mb-20">
                  <label for="number" class="form-label fw-semibold text-primary-light text-sm mb-8">Номер телефона</label>
                  <input required v-model="profile.phone" type="tel" class="form-control radius-8" id="number" placeholder="Введите номер телефона">
                </div>
                <div class="mb-20">
                  <label for="password" class="form-label fw-semibold text-primary-light text-sm mb-8">Пароль</label>
                  <input required v-model="profile.password" type="text" class="form-control radius-8" id="password" placeholder="Введите номер телефона">
                </div>
                <div class="mb-10">
                  <label for="number" class="form-label fw-semibold text-primary-light text-sm mb-8">Роль</label>
                  <select required v-model="profile.role" class="form-control radius-8 form-select" id="desig">
                    <option value="curator">Куратор </option>
                    <option value="producer">Продюсер </option>
                    <option value="admin">Админ</option>
                    <option value="users">Участник</option>
                  </select>
                </div>
                <div class="row">
                  <div class="col-lg-6 col-sm-12 mt-10">
                    <button @click="cancel()" type="button" class="border border-danger-600 bg-hover-danger-200 text-danger-600 text-md py-11 radius-8 w-100 text-center">
                      Отмена
                    </button>
                  </div>
                  <div class="col-lg-6 col-sm-12 mt-10">
                    <button type="submit" class="btn btn-primary border border-primary-600 text-md py-12 radius-8 w-100">
                      Сохранить
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { useToast } from 'vue-toastification'
import {ref} from 'vue'
import api from '@/utils/api.js'
import { Icon } from '@iconify/vue'

const router = useRouter()
const toast = useToast()

const profile = ref({
  full_name: '',
  password: '',
  phone: '',
  role: 'curator'
})

const cancel = () => {
  router.go(-1)
}

const save = async () => {
  await api.post('/admin/staff', profile.value)
    .then(() => {
      toast.success('Успешно!')
      router.go(-1)
    })
}

</script>