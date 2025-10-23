<template>
  <div class="d-flex flex-wrap align-items-center justify-content-between gap-3 mb-24">
    <h6 class="fw-semibold mb-0">Добавить участника</h6>
    <ul class="d-flex align-items-center gap-2">
      <li class="fw-medium">
        <router-link to="/" class="d-flex align-items-center gap-1 hover-text-primary">
          <Icon icon="solar:home-smile-angle-outline" class="icon text-lg"></Icon>
          Главная
        </router-link>
      </li>
      <li>-</li>
      <li class="fw-medium">Добавить участника</li>
    </ul>
  </div>
  <div class="card h-100 p-0 radius-12">
    <div class="card-body p-24">
      <div class="row justify-content-center">
        <div class="col-lg-12">
          <div class="card border">
            <div class="card-body">

              <form @submit.prevent="save()">
                <div class="row">
                  <div class="col-6 mb-10">
                    <label class="form-label fw-semibold text-primary-light text-sm mb-8">Название</label>
                    <input v-model="formData.title" type="text" class="form-control radius-8" placeholder="Введите название">
                  </div>
                  <div class="col-6 mb-10">
                    <label for="leader_id" class="form-label fw-semibold text-primary-light text-sm mb-8">Автор<span class="text-danger-600">*</span></label>
                    <input v-model="formData.author" type="text" class="form-control radius-8" placeholder="Введите автора">
                    <!--                    <select v-model="formData.curator_id" class="form-control radius-8 form-select" id="leader_id">-->
                    <!--                      <option :value="null">Не выбран</option>-->
                    <!--                      <option v-for="curator in curators" :key="curator.id" :value="curator.id">{{ curator.full_name }}</option>-->
                    <!--                    </select>-->
                  </div>
                  <div class="col-6 mb-10">
                    <label class="form-label fw-semibold text-primary-light text-sm mb-8">Максимальное число</label>
                    <input v-model="formData.participants_count" type="number" class="form-control radius-8" placeholder="Введите число">
                  </div>
                  <div class="col-6 mb-10">
                    <label for="genre" class="form-label fw-semibold text-primary-light text-sm mb-8">Жанр<span class="text-danger-600">*</span></label>
                    <select required v-model="formData.genre" class="form-control radius-8 form-select" id="genre">
                      <option :value="null" disabled>Выберите жанр</option>
                      <option value="Историческая драма">Историческая драма</option>
                      <option value="Драма">Драма</option>
                      <option value="Комедия">Комедия</option>
                      <option value="Боевик">Боевик</option>
                      <option value="Триллер">Триллер</option>
                      <option value="Фантастика">Фантастика</option>
                      <option value="Хоррор">Хоррор</option>
                      <option value="Детектив">Детектив</option>
                      <option value="Мелодрама">Мелодрама</option>
                      <option value="Вестерн">Вестерн</option>
                    </select>
                  </div>
                  <div class="col-6 mb-10">
                    <label class="form-label fw-semibold text-primary-light text-sm mb-8">Ссылка</label>
                    <input v-model="formData.link_url" type="text" class="form-control radius-8" placeholder="Введите ссылку">
                  </div>
                  <div class="col-6 mb-10">
                    <label class="form-label fw-semibold text-primary-light text-sm mb-8">Ссылка на трейлер</label>
                    <input v-model="formData.trailer_url" type="text" class="form-control radius-8" placeholder="Введите ссылку">
                  </div>
                  <div class="col-6 mb-10">
                    <label class="form-label fw-semibold text-primary-light text-sm mb-8">Ссылка на изображение</label>
                    <input v-model="formData.banner_url" type="text" class="form-control radius-8" placeholder="Введите ссылку">
                  </div>
                  <div class="col-6 mb-10">
                    <label for="genre" class="form-label fw-semibold text-primary-light text-sm mb-8">Тип<span class="text-danger-600">*</span></label>
                    <select required v-model="formData.movie_type" class="form-control radius-8 form-select" id="genre">
                      <option :value="null" disabled>Выберите тип</option>
                      <option value="film">Фильм</option>
                      <option value="serial">Сериал</option>
                      <option value="web-serial">Веб сериал</option>
                    </select>
                  </div>
                  <div class="col-6 mb-10">
                    <label class="form-label fw-semibold text-primary-light text-sm mb-8">Премьера</label>
                    <input v-model="formData.premiere_datetime" type="date" class="form-control radius-8" placeholder="Введите ссылку">
                  </div>
                  <div class="col-6 mb-10">
                    <label class="form-label fw-semibold text-primary-light text-sm mb-8">Город</label>
                    <input v-model="formData.city" type="text" class="form-control radius-8" placeholder="Введите город">
                  </div>
                  <div class="col-12 mb-10">
                    <label for="desc" class="form-label fw-semibold text-primary-light text-sm mb-8">Описание</label>
                    <textarea v-model="formData.description" class="form-control" id="desc" rows="4" cols="50" placeholder="Описание"></textarea>
                  </div>
                  <h6 class="text-md text-primary-light mb-16">Участники проекта</h6>
                  <template v-for="(roles) in Object.entries(formData.roles_distribution)">
                    <div class="col-12 mt-10 d-flex align-items justify-content-between">
                      <label class="form-label fw-semibold text-primary-light text-sm mb-0">{{ roles[0] }}</label>
                      <button type="button" @click="addRole(roles)" class="btn btn-sm btn-primary border border-primary-600 text-md radius-8">Добавить роль</button>
                    </div>
                    <template v-for="(item, index) in roles[1]" :key="index">
                      <div class="col-6 mb-10">
                        <label class="form-label fw-semibold text-primary-light text-sm mb-8">Роль</label>
                        <input v-model="item.role" type="text" class="form-control radius-8" placeholder="Введите роль">
                      </div>
                      <div class="col-6 mb-10">
                        <label class="form-label fw-semibold text-primary-light text-sm mb-8">Названия роли</label>
                        <input v-model="item.name" type="text" class="form-control radius-8" placeholder="Введите роль">
                      </div>
                    </template>
                  </template>
                </div>
                <div class="d-flex align-items-center justify-content-center gap-3 mt-20">
                  <button @click="cancel()" type="button"
                          class="border border-danger-600 bg-hover-danger-200 text-danger-600 text-md px-56 py-11 radius-8">
                    Отмена
                  </button>
                  <button type="submit" class="btn btn-primary border border-primary-600 text-md px-56 py-12 radius-8">
                    Сохранить
                  </button>
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
import { Icon } from '@iconify/vue'
import {ref} from 'vue'
import api from "@/utils/api.js";

const router = useRouter()
const toast = useToast()
const formData = ref({
  title: "",
  author: "",
  genre: "",
  description: "",
  banner_url: "",
  trailer_url: "",
  link_url: "",
  movie_type: "",
  participants_count: 0,
  roles_distribution: {
    main: [
      { name: '', role: '' }
    ],
    supporting: [
      { name: '', role: '' }
    ],
    extra: [
      { name: '', role: '' }
    ]
  },
  premiere_datetime: '',
  city: ''
})

const cancel = () => {
  router.go(-1)
}

const save = async () => {
  await api.post('/movies', formData.value)
    .then(() => {
      toast.success('Успешно!')
      router.push('/news')
    })
}
const addRole = (role) => {
  formData.value.roles_distribution[role[0]].push({
    name: '',
    role: ''
  })
}

</script>