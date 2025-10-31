<template>
  <div class="d-flex flex-wrap align-items-center justify-content-between gap-3 mb-24">
    <h6 class="fw-semibold mb-0">Добавить клан</h6>
    <ul class="d-flex align-items-center gap-2">
      <li class="fw-medium">
        <router-link to="/" class="d-flex align-items-center gap-1 hover-text-primary">
          <Icon icon="solar:home-smile-angle-outline" class="icon text-lg"></Icon>
          Главная
        </router-link>
      </li>
      <li>-</li>
      <li class="fw-medium">Добавить клан</li>
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
<!--              <div class="mb-24 mt-16">-->
<!--                <div class="avatar-upload">-->
<!--                  <div class="avatar-edit position-absolute bottom-0 end-0 me-24 mt-16 z-1 cursor-pointer">-->
<!--                    <input type="file" id="imageUpload" accept=".png, .jpg, .jpeg" hidden="">-->
<!--                    <label for="imageUpload" class="w-32-px h-32-px d-flex justify-content-center align-items-center bg-primary-50 text-primary-600 border border-primary-600 bg-hover-primary-100 text-lg rounded-circle">-->
<!--                      <Icon icon="solar:camera-outline" class="icon"></Icon>-->
<!--                    </label>-->
<!--                  </div>-->
<!--                  <div class="avatar-preview">-->
<!--                    <div id="imagePreview"> </div>-->
<!--                  </div>-->
<!--                </div>-->
<!--              </div>-->
              <!-- Upload Image End -->

              <div class="d-flex flex-wrap">
                <div
                  v-for="item in 25"
                  :key="item"
                  class="d-block cursor-pointer"
                  :class="{'border-size-3 rounded-circle border border-success-600 text-success-600 radius-10 mx-4': `/icons/clan/clan-bg-${item}.png` === formData.icon}"
                  @click="chooseAvatarIcon(item)"
                >
                  <img class="w-56-px h-56-px rounded-circle object-fit-cover" :src="`https://meyram.kz/icons/clan/clan-bg-${item}.png`" alt="">
                </div>
              </div>

              <form @submit.prevent>
                <div class="mb-20">
                  <label for="name" class="form-label fw-semibold text-primary-light text-sm mb-8">Название<span class="text-danger-600">*</span></label>
                  <input required v-model="formData.name" type="text" class="form-control radius-8" id="name" placeholder="Введите название">
                </div>
                <div class="mb-20">
                  <label for="leader_id" class="form-label fw-semibold text-primary-light text-sm mb-8">Продюсер<span class="text-danger-600">*</span></label>
                  <select v-model="formData.leader_id" class="form-control radius-8 form-select" id="leader_id">
                    <option :value="null">Все</option>
                    <option v-for="curator in curators" :key="curator.id" :value="curator.id">{{ curator.full_name }}</option>
                  </select>
                </div>
                <div class="mb-20">
                  <label for="description" class="form-label fw-semibold text-primary-light text-sm mb-8">Описание</label>
                  <textarea v-model="formData.description" required class="form-control radius-8" name="description" id="description" cols="30" rows="5"></textarea>
                </div>

                <div class="row">
                  <div class="col-md-6 col-sm-12 mt-10">
                    <button @click="cancel()" type="button" class="border border-danger-600 bg-hover-danger-200 text-danger-600 text-md py-11 radius-8 w-100 text-center">
                      Отмена
                    </button>
                  </div>
                  <div @click="save()" class="col-md-6 col-sm-12 mt-10">
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
import {onMounted, ref} from 'vue'
import api from '@/utils/api.js'
import Cookies from 'js-cookie'
import { Icon } from '@iconify/vue'

const router = useRouter()
const toast = useToast()
const role = Cookies.get('admin-meyram-role') || null

const formData = ref({
  name: '',
  description: '',
  leader_id: null,
  color: '',
  brightness: '',
  icon: ''
})
const curators = ref([])

const getCurators = async () => {
  if (role === 'admin') {
    await api.get('/admin/staff')
      .then((res) => {
        curators.value = res.data.items
      })
      .catch((e) => {
        console.log(e, e.response, e.request)
      })
  }
}

const chooseAvatarIcon = (item) => {
  formData.value.icon = `/icons/clan/clan-bg-${item}.png`
}

const cancel = () => {
  router.go(-1)
}

const save = async () => {
  await api.post('/clans', formData.value)
    .then(() => {
      toast.success('Успешно!')
      router.push('/clan')
    })
}

onMounted(() => {
  getCurators()
})

</script>

<style scoped>
.border-size-3 {
  border-width: 3px !important;
}
</style>