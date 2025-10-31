<template>
  <div class="d-flex flex-wrap align-items-center justify-content-between gap-3 mb-24">
    <h6 class="fw-semibold mb-0">Добавить кино</h6>
    <ul class="d-flex align-items-center gap-2">
      <li class="fw-medium">
        <router-link to="/" class="d-flex align-items-center gap-1 hover-text-primary">
          <Icon icon="solar:home-smile-angle-outline" class="icon text-lg"></Icon>
          Главная
        </router-link>
      </li>
      <li>-</li>
      <li class="fw-medium">Добавить кино</li>
    </ul>
  </div>
  <div class="card h-100 p-0 radius-12">
    <div class="card-body p-24 ">
      <div class="row justify-content-center">
        <div class="col-lg-12">
          <div class="card border">
            <div class="card-body">

              <form @submit.prevent="save()">
                <div class="row">
                  <div class="col-md-6 col-sm-12 mb-10">
                    <label class="form-label fw-semibold text-primary-light text-sm mb-8">Название</label>
                    <input v-model="formData.title" type="text" class="form-control radius-8"
                           placeholder="Введите название">
                  </div>
                  <div class="col-md-6 col-sm-12 mb-10">
                    <label for="leader_id" class="form-label fw-semibold text-primary-light text-sm mb-8">Автор<span
                      class="text-danger-600">*</span></label>
                    <input v-model="formData.author" type="text" class="form-control radius-8"
                           placeholder="Введите автора">
                    <!--                    <select v-model="formData.movies.curator_id" class="form-control radius-8 form-select" id="leader_id">-->
                    <!--                      <option :value="null">Не выбран</option>-->
                    <!--                      <option v-for="curator in curators" :key="curator.id" :value="curator.id">{{ curator.full_name }}</option>-->
                    <!--                    </select>-->
                  </div>
                  <!--                  <div class="col-6 mb-10">-->
                  <!--                    <label class="form-label fw-semibold text-primary-light text-sm mb-8">Максимальное число</label>-->
                  <!--                    <input v-model="formData.movies.participants_count" type="number" class="form-control radius-8" placeholder="Введите число">-->
                  <!--                  </div>-->
                  <div class="col-md-6 col-sm-12 mb-10">
                    <label for="genre" class="form-label fw-semibold text-primary-light text-sm mb-8">Жанр<span
                      class="text-danger-600">*</span></label>
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
                  <!--                  <div class="col-6 mb-10">-->
                  <!--                    <label class="form-label fw-semibold text-primary-light text-sm mb-8">Ссылка обложку</label>-->
                  <!--                    <input v-model="formData.movies.link_url" type="text" class="form-control radius-8" placeholder="Введите ссылку">-->
                  <!--                  </div>-->
                  <div class="col-md-6 col-sm-12 mb-10">
                    <label for="genre" class="form-label fw-semibold text-primary-light text-sm mb-8">Тип<span
                      class="text-danger-600">*</span></label>
                    <select required v-model="formData.movie_type" class="form-control radius-8 form-select" id="genre">
                      <option :value="null" disabled>Выберите тип</option>
                      <option value="film">Фильм</option>
                      <option value="serial">Сериал</option>
                      <option value="web-serial">Веб сериал</option>
                    </select>
                  </div>
                  <div class="col-md-6 col-sm-12 mb-10">
                    <label class="form-label fw-semibold text-primary-light text-sm mb-8">Премьера</label>
                    <input v-model="formData.premiere_datetime" type="date" class="form-control radius-8"
                           placeholder="Введите ссылку">
                  </div>
                  <div class="col-md-6 col-sm-12 mb-10">
                    <label class="form-label fw-semibold text-primary-light text-sm mb-8">Город</label>
                    <select required v-model="formData.city" class="form-control radius-8 form-select" id="genre">
                      <option :value="null" disabled>Выберите город</option>
                      <option v-for="city in cities" :key="city" :value="city">{{ city }}</option>
                    </select>
                  </div>
                  <div class="col-12 mb-10 d-flex align-items-end justify-content-start">
                    <div>
                      <label class="form-label fw-semibold text-primary-light text-sm mb-8">Изображение трейлера</label>
                      <input accept="image/*" @change="fileChangeHandler($event, 'banner')" type="file"
                             class="form-control w-auto form-control-lg" id="basic-upload">
                      <!--                    <input v-model="formData.movies.banner_url" type="text" class="form-control radius-8" placeholder="Введите ссылку">-->
                    </div>
                    <div v-if="formData.banner" class="mx-12">
                      <a class="cursor-pointer" :href="formData.banner_url" target="_blank">
                        <img class="w-80-px h-80-px radius-8 object-fit-cover" :src="formData.banner_url" alt="">
                      </a>
                    </div>
                  </div>
                  <div class="col-12 mb-10">
                    <div>
                      <label class="form-label fw-semibold text-primary-light text-sm mb-8">Трейлер</label>
                      <input accept="video/*" @change="fileChangeHandler($event, 'trailer')" type="file"
                             class="form-control w-auto form-control-lg" id="basic-upload">
                      <!--                    <input v-model="formData.movies.banner_url" type="text" class="form-control radius-8" placeholder="Введите ссылку">-->
                    </div>
                    <div v-if="formData.trailer" class="mt-12">
                      <a class="cursor-pointer" :href="formData.trailer_url" target="_blank">
                        <video class="w-200-px h-200-px radius-8 object-fit-cover" :src="formData.trailer_url"
                               controls></video>
                      </a>
                    </div>
                  </div>
                  <div class="col-12 mb-10 d-flex align-items-end justify-content-start">
                    <div>
                      <label class="form-label fw-semibold text-primary-light text-sm mb-8">Аватар автора</label>
                      <input accept="image/*" @change="fileChangeHandler($event, 'author_avatar')" type="file"
                             class="form-control w-auto form-control-lg" id="basic-upload">
                      <!--                    <input v-model="formData.movies.banner_url" type="text" class="form-control radius-8" placeholder="Введите ссылку">-->
                    </div>
                    <div v-if="formData.author_avatar" class="mx-12">
                      <a class="cursor-pointer" :href="formData.author_avatar_url" target="_blank">
                        <img class="w-80-px h-80-px radius-8 object-fit-cover" :src="formData.author_avatar_url" alt="">
                      </a>
                    </div>
                  </div>
                  <!--                  <div class="col-6 mb-10">-->
                  <!--                    <label class="form-label fw-semibold text-primary-light text-sm mb-8">Ссылка на трейлер</label>-->
                  <!--                    <input v-model="formData.movies.trailer_url" type="text" class="form-control radius-8" placeholder="Введите ссылку">-->
                  <!--                  </div>-->
                  <div class="col-12 mb-10">
                    <label for="desc" class="form-label fw-semibold text-primary-light text-sm mb-8">Описание</label>
                    <textarea v-model="formData.description" class="form-control" id="desc" rows="4" cols="50"
                              placeholder="Описание"></textarea>
                  </div>
                  <div class="d-flex align-items-center justify-content-between mb-16">
                    <h6 class="text-md text-primary-light mb-0">Персонажи</h6>
                  </div>
                  <template v-if="formData.roles_distribution">
                    <template v-for="(role) in Object.entries(formData.roles_distribution)">
                      <div class="col-12 mt-20 d-flex align-items justify-content-between">
                        <label class="form-label fw-semibold text-primary-light text-sm mb-0">{{ roles[role[0]] }}</label>
                        <button type="button" @click="addRole(role)"
                                class="btn btn-sm btn-primary border border-primary-600 text-md radius-8">Добавить роль
                        </button>
                      </div>
                      <template v-for="(item, index) in role[1]" :key="index">
                        <div class="row">
                          <div class="col-md-3 col-sm-12 mt-10">
                            <label class="form-label fw-semibold text-primary-light text-sm mb-8">Персонаж</label>
                            <input v-model="item.role_name" type="text" class="form-control radius-8"
                                   placeholder="Введите роль">
                          </div>
                          <div class="col-md-3 col-sm-12 mt-10">
                            <label class="form-label fw-semibold text-primary-light text-sm mb-8">Названия роли</label>
                            <input v-model="item.character_description" type="text" class="form-control radius-8"
                                   placeholder="Введите роль">
                          </div>
                          <div class="col-md-3 col-sm-12 mt-10 d-flex flex-column justify-content-end">
                            <multiselect
                              placeholder="Все"
                              deselectLabel="Нажмите чтобы удалить"
                              selectedLabel="Выбран"
                              selectLabel="Нажмите чтобы выбрать"
                              v-model="item.user"
                              :options="children"
                              label="full_name"
                            ></multiselect>
                          </div>
                          <div class="col-2 mt-10 d-flex flex-column justify-content-end">
                            <label class="form-label fw-semibold text-primary-light text-sm mb-8"></label>
                            <a
                              @click="removeRole(role, index)"
                              class="w-44-px h-44-px bg-danger-focus text-danger-main d-inline-flex align-items-center justify-content-center">
                              <Icon icon="mingcute:delete-2-line"/>
                            </a>
                          </div>
                        </div>
                        <div v-if="item.user" class="row mb-10 mt-6">
                          <a :href="`/children/${item.user.id}/show`" target="_blank"
                             class="d-flex align-items-center gap-2 cursor-pointer">
                            <img :src="`https://meyram.kz/${item.user?.avatar_url}`" alt=""
                                 class="w-32-px h-32-px rounded-circle object-fit-cover flex-shrink-0">
                            <div class="flex-grow-1 d-inline-flex flex-column">
                              <h6 class="text-sm mb-0">{{ item.user.full_name }}</h6>
                              <span class="text-xs text-secondary-light">{{ item.user.phone }}</span>
                            </div>
                          </a>
                        </div>
                      </template>
                    </template>
                  </template>
                </div>
                <div class="row mt-20">
                  <div class="col-md-4 col-sm-12 mt-10">
                    <button @click="cancel()" type="button" class="border border-danger-600 bg-hover-danger-200 text-danger-600 text-md py-11 radius-8 w-100 text-center">
                      Отмена
                    </button>
                  </div>
                  <div class="col-md-4 col-sm-12 mt-10">
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
import {useRouter} from 'vue-router'
import {useToast} from 'vue-toastification'
import {Icon} from '@iconify/vue'
import {onMounted, ref} from 'vue'
import api from "@/utils/api.js";
import Multiselect from "vue-multiselect";

const router = useRouter()
const toast = useToast()
const formData = ref({
  title: "",
  author: "",
  genre: null,
  description: "",
  banner_url: "",
  trailer_url: "",
  link_url: "",
  movie_type: null,
  participants_count: 0,
  roles_distribution: {
    main: [
      {name: '', role: ''}
    ],
    supporting: [
      {name: '', role: ''}
    ],
    extra: [
      {name: '', role: ''}
    ]
  },
  premiere_datetime: '',
  city: null,
  banner: '',
  trailer: '',
  author_avatar: ''
})
const cities = [
  "Астана",
  "Алматы",
  "Шымкент",
  "Актобе",
  "Караганда",
  "Павлодар",
  "Костанай",
  "Семей",
  "Тараз",
  "Оскемен",
  "Атырау",
  "Актау",
  "Кызылорда",
  "Петропавловск",
  "Талдыкорган"
]
const children = ref([])
const roles = {
  main: 'Главная роль',
  extra: 'Основная роль',
  supporting: 'Дополнительная роль'
}
const cancel = () => {
  router.go(-1)
}

const save = async () => {
  const formDataForm = new FormData()
  formDataForm.append('title', formData.value.title)
  formDataForm.append('author', formData.value.author)
  formDataForm.append('genre', formData.value.genre)
  formDataForm.append('description', formData.value.description)
  formDataForm.append('movie_type', formData.value.movie_type)
  formDataForm.append('city', formData.value.city)
  formDataForm.append('premiere_datetime', formData.value.premiere_datetime?.slice(0, 10))
  formDataForm.append('total_members', Object.values(formData.value.roles_distribution).reduce((a, c) => a + c.length, 0))
  formDataForm.append('main_roles', formData.value.roles_distribution.main?.length || 0)
  formDataForm.append('support_roles', formData.value.roles_distribution.supporting?.length || 0)
  formDataForm.append('extra_roles', formData.value.roles_distribution.extra?.length || 0)
  formDataForm.append('banner', formData.value.banner)
  formDataForm.append('trailer', formData.value.trailer)
  formDataForm.append('author_avatar', formData.value.author_avatar)

  const roles_distribution = []
  let count = 0
  Object.entries(formData.value.roles_distribution).forEach((e) => {
    e[1].forEach((item) => {
      roles_distribution.push({
        "role_number": ++count,
        "role_type": e[0],
        "role_name": item.role,
        "full_name": item.user?.full_name,
        "age": item.user?.age,
        "avatar_url": item.user?.avatar_url,
        "description": item.description,
        "traits": ["батыр", "сабырлы"],
        "character_description": item.character_description,
        "age_range": "18-25",
        "style": "классикалық",
        "user_id": item.user?.id
      })
    })
  })

  formDataForm.append('roles_distribution', JSON.stringify(roles_distribution))


  await api.post('/movies', formDataForm, {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  })
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
const removeRole = (role, index) => {
  formData.value.roles_distribution[role[0]].splice(index, 1)
}
const fileChangeHandler = (e, index) => {
  const selectedFile = e?.target?.files?.[0]
  if (!selectedFile) return
  formData.value[index] = selectedFile
  formData.value[index + '_url'] = URL.createObjectURL(selectedFile)
}

onMounted(async () => {
  await api.get('/admin/users')
    .then((res) => {
      children.value = res.data.data
    })
})

</script>

<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>