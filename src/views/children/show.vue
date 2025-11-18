<template>
  <div class="d-flex flex-wrap align-items-center justify-content-between gap-3 mb-24">
    <h6 class="fw-semibold mb-0">Участник</h6>
    <ul class="d-flex align-items-center gap-2">
      <li class="fw-medium">
        <router-link to="/" class="d-flex align-items-center gap-1 hover-text-primary">
          <Icon icon="solar:home-smile-angle-outline" class="icon text-lg"></Icon>
          Главная
        </router-link>
      </li>
      <li>-</li>
      <li class="fw-medium">Участник</li>
    </ul>
  </div>
  <div class="row gy-4">
    <div class="col-lg-4">
      <div class="user-grid-card position-relative border radius-16 overflow-hidden bg-base h-100">
        <img src="https://wowdash.wowtheme7.com/bundlelive/demo/assets/images/user-grid/user-grid-bg1.png" alt="" class="w-100 object-fit-cover">
        <div class="pb-24 ms-16 mb-24 me-16  mt--100">
          <div class="text-center border border-top-0 border-start-0 border-end-0">
            <img v-if="child.avatar" :src="'https://meyram-academy.kz/' + child.avatar" alt="" class="border br-white border-width-2-px w-200-px h-200-px rounded-circle object-fit-cover">
            <img v-else src="@/assets/images/default-avatar.jpg" alt="" class="border br-white border-width-2-px w-200-px h-200-px rounded-circle object-fit-cover">
            <h6 class="mb-0 mt-16">{{ child.full_name }}</h6>
            <span class="text-secondary-light mb-16">{{ child.phone }}</span>
          </div>
          <div class="mt-24">
            <h6 class="text-xl mb-16">Персональная информация</h6>
            <ul>
              <li class="d-flex align-items-center gap-1 mb-12">
                <span class="w-30 text-md fw-semibold text-primary-light">Полное имя</span>
                <span class="w-70 text-secondary-light fw-medium text-end"> {{ child.full_name }}</span>
              </li>
              <li class="d-flex align-items-center gap-1 mb-12">
                <span class="w-30 text-md fw-semibold text-primary-light"> Номер</span>
                <a :href="`tel:${child.phone}`" class="w-70 text-secondary-light fw-medium text-end"> {{ child.phone }}</a>
              </li>
              <li class="d-flex align-items-center gap-1 mb-12">
                <span class="w-30 text-md fw-semibold text-primary-light"> Instagram</span>
                <a target="_blank" :href="`https://instagram.com/${ child.instagram_username }`" class="w-70 text-secondary-light fw-medium text-end">
                  {{ child.instagram_username }}
                </a>
              </li>
              <li class="d-flex align-items-center gap-1 mb-12">
                <span class="w-30 text-md fw-semibold text-primary-light">Куратор</span>
                <span class="w-70 text-secondary-light fw-medium text-end"> {{ child.curator_name }}</span>
              </li>
              <li class="d-flex align-items-center gap-1 mb-12">
                <span class="w-30 text-md fw-semibold text-primary-light">Тариф</span>
                <span class="w-70 text-secondary-light fw-medium text-end"> {{ child.tariff }}</span>
              </li>
              <li class="d-flex align-items-center gap-1 mb-12">
                <span class="w-30 text-md fw-semibold text-primary-light"> День рождения</span>
                <span class="w-70 text-secondary-light fw-medium text-end"> {{ child.birth_date?.slice(0, 10)?.split('-')?.reverse()?.join('.') }}</span>
              </li>
              <li class="d-flex align-items-center gap-1 mb-12">
                <span class="w-30 text-md fw-semibold text-primary-light"> Пол</span>
                <span v-if="child.gender" class="w-70 text-secondary-light fw-medium text-end"> {{ child.gender === 'male' ? 'Мужчина' : 'Женщина' }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="col-lg-8">
      <div class="card h-100">
        <div class="card-body p-24">
          <ul class="nav border-gradient-tab nav-pills mb-20 d-inline-flex overflow-scroll flex-nowrap w-100" id="pills-tab" role="tablist">
            <li class="nav-item" role="presentation">
              <button
                :class="{active: route.params.name === 'show'}"
                class="nav-link d-flex align-items-center px-24"
                id="pills-show-profile-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-show-profile"
                type="button"
                role="tab"
                aria-controls="pills-show-profile"
                aria-selected="true"
                @click="openTab('show')"
              >
                Данные
              </button>
            </li>
            <li class="nav-item" role="presentation">
              <button
                :class="{active: route.params.name === 'edit'}"
                class="nav-link d-flex align-items-center px-24"
                id="pills-edit-profile-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-edit-profile"
                type="button"
                role="tab"
                aria-controls="pills-edit-profile"
                aria-selected="true"
                @click="openTab('edit')"
              >
                Редактировать
              </button>
            </li>
            <li class="nav-item" role="presentation">
              <button
                :class="{active: route.params.name === 'chat'}"
                class="nav-link d-flex align-items-center px-24"
                id="pills-chat-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-chat"
                type="button"
                role="tab"
                aria-controls="pills-chat"
                aria-selected="true"
                @click="openTab('chat')"
              >
                Чат
              </button>
            </li>
          </ul>

          <div class="tab-content" id="pills-tabContent">
            <div :class="{active: route.params.name === 'edit', show: route.params.name === 'edit'}" class="tab-pane fade" id="pills-edit-profile" role="tabpanel" aria-labelledby="pills-edit-profile-tab" tabindex="0">
              <h6 class="text-md text-primary-light mb-16">Редактировать данные</h6>
              <p class="text-md text-primary-light mb-16">Аватар участника</p>
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
                    <div
                      id="imagePreview"
                      :style="{backgroundImage: `url(https://meyram-academy.kz/ + ${child.avatar})`}"
                    >
                    </div>
                  </div>
                </div>
              </div>
              <!-- Upload Image End -->
              <form action="#">
                <div class="row">
                  <div class="col-sm-6">
                    <div class="mb-20">
                      <label for="name" class="form-label fw-semibold text-primary-light text-sm mb-8">Полное имя <span class="text-danger-600">*</span></label>
                      <input v-model="profile.full_name" type="text" class="form-control radius-8" id="name" placeholder="Редактировать имя">
                    </div>
                  </div>
                  <div class="col-sm-6">
                    <div class="mb-20">
                      <label for="number" class="form-label fw-semibold text-primary-light text-sm mb-8">Телефон номер</label>
                      <MaskInput v-model="profile.phone" mask="+7 (7##) ### ####" type="email" class="form-control radius-8" id="number" placeholder="Редактировать телефон" />
                    </div>
                  </div>
                </div>
                <div class="d-flex align-items-center justify-content-end gap-3">
<!--                  <button @click="cancel()" type="button" class="border border-danger-600 bg-hover-danger-200 text-danger-600 text-md px-56 py-11 radius-8">-->
<!--                    Отмена-->
<!--                  </button>-->
<!--                  <button @click="save()" type="button" class="btn btn-primary border border-primary-600 text-md px-56 py-12 radius-8">-->
<!--                    Сохранить-->
<!--                  </button>-->
                </div>
              </form>

              <div class="mb-24" v-if="true">
                <h6 class="text-md text-primary-light my-16">Редактировать чат с ИИ</h6>
                <div class="form-switch switch-primary d-flex align-items-center gap-3">
                  <input v-model="profile.ai_chat_enabled" @change="toggleChatWithAI" class="form-check-input" type="checkbox" role="switch" id="switch1" checked="">
                  <label class="form-check-label line-height-1 fw-medium text-secondary-light" for="switch1">Включить ИИ для чатов</label>
                </div>
              </div>

              <template v-if="role === 'admin'">
                <h6 class="text-md text-primary-light my-16">Редактировать куратора</h6>
                <!-- Upload Image End -->
                <form @submit.prevent="editCurator()">
                  <div class="row">
                    <div class="col-sm-6">
                      <div class="">
                        <label for="curator" class="form-label fw-semibold text-primary-light text-sm mb-8">Куратор <span class="text-danger-600">*</span></label>
                        <select required v-model="profile.curator_id" class="form-control radius-8 form-select" id="curator">
                          <option :value="null">Все</option>
                          <option v-for="curator in curators" :key="curator.id" :value="curator.id">{{ curator.full_name }}</option>
                        </select>
                      </div>
                    </div>
                    <div class="col-md-6 col-sm-12 d-flex flex-column justify-content-end mt-10">
                      <button type="submit" class="btn btn-primary border border-primary-600 text-md py-12 radius-8 w-100">
                        Сохранить
                      </button>
                    </div>
                  </div>
                </form>
              </template>

              <template v-if="role === 'admin'">
                <h6 class="text-md text-primary-light my-16">Редактировать тариф</h6>
                <!-- Upload Image End -->
                <form @submit.prevent="editTariff()">
                  <div class="row">
                    <div class="col-sm-6">
                      <div class="mb-20">
                        <label for="tariff" class="form-label fw-semibold text-primary-light text-sm mb-8">тариф <span class="text-danger-600">*</span></label>
                        <select required v-model="profile.tariff" class="form-control radius-8 form-select" id="tariff">
                          <option :value="null">Все</option>
                          <option value="free">Free</option>
                          <option value="standard">Standard</option>
                          <option value="vip">VIP</option>
                        </select>
                      </div>
                    </div>
                    <div class="col-sm-6">
                      <div class="mb-20">
                        <label for="tariff-days" class="form-label fw-semibold text-primary-light text-sm mb-8">Срок тарифа<span class="text-danger-600">*</span></label>
                        <select required v-model="profile.tariff_duration" class="form-control radius-8 form-select" id="tariff-days">
                          <option :value="null">Все</option>
                          <option value="30">1 месяц</option>
                          <option value="90">3 месяца</option>
                          <option value="365">1 год</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-6 col-sm-12"></div>
                    <div class="col-md-6 col-sm-12 d-flex justify-content-end">
                      <button type="submit" class="btn btn-primary border border-primary-600 text-md py-12 radius-8 w-100">
                        Сохранить
                      </button>
                    </div>
                  </div>
                </form>
              </template>
              <template v-if="true">
                <h6 class="text-md text-primary-light my-16">Обнулить коины</h6>
                <!-- Upload Image End -->
                <form @submit.prevent="resetCoins()">
                  <div class="col-md-6 col-sm-12">
                    <div class="mb-20">
                      <button type="submit" class="btn btn-primary border border-primary-600 text-md px-56 py-12 radius-8 w-100">
                        Обнулить
                      </button>
                    </div>
                  </div>
                </form>
              </template>
            </div>
            <div :class="{active: route.params.name === 'show', show: route.params.name === 'show'}" class="tab-pane fade" id="pills-show-profile" role="tabpanel" aria-labelledby="pills-edit-profile-tab" tabindex="1">

              <h6 class="text-xl mb-16">Данные</h6>
              <ul>
                <li class="d-flex align-items-center gap-1 mb-12">
                  <span class="w-30 text-md fw-semibold text-primary-light">Куратор</span>
                  <span class="w-70 text-secondary-light fw-medium">- {{ child.curator_name }}</span>
                </li>
                <li class="d-flex align-items-center gap-1 mb-12">
                  <span class="w-30 text-md fw-semibold text-primary-light">Тариф</span>
                  <span class="w-70 text-secondary-light fw-medium">- {{ child.tariff }}</span>
                </li>
                <li class="d-flex align-items-center gap-1 mb-12">
                  <span class="w-30 text-md fw-semibold text-primary-light">Срок выбранного тарифа</span>
                  <span class="w-70 text-secondary-light fw-medium">- {{ child.tariff_duration }}</span>
                </li>
                <li class="d-flex align-items-center gap-1 mb-12">
                  <span class="w-30 text-md fw-semibold text-primary-light">Срок окончания тарифа</span>
                  <span
                    v-if="child.tariff_expires"
                    class="w-70 text-secondary-light fw-medium"
                    :class="{
                      'text-warning': (new Date(child.tariff_expires) - new Date()) / (1000 * 60 * 60 * 24) < 0,
                      'text-danger': (new Date(child.tariff_expires) - new Date()) / (1000 * 60 * 60 * 24) < 10,
                    }"
                  >
                    - {{ child.tariff_expires && child.tariff_expires?.slice(0, 10)?.split('-').reverse()?.join('.') }}
                  </span>
                </li>
                <li class="d-flex align-items-center gap-1 mb-12">
                  <span class="w-30 text-md fw-semibold text-primary-light">Промокод</span>
                  <span class="w-70 text-secondary-light fw-medium">- {{ child.promo_code }}</span>
                </li>
              </ul>
              <h6 class="text-xl mb-16 mt-24">Достижения участника</h6>
              <ul>
                <li class="d-flex align-items-center gap-1 mb-12">
                  <span class="w-30 text-md fw-semibold text-primary-light">Коин</span>
                  <span class="w-70 text-secondary-light fw-medium">- {{ profile.coins || 0 }}</span>
                </li>
                <li class="d-flex align-items-center gap-1 mb-12">
                  <span class="w-30 text-md fw-semibold text-primary-light">Лига</span>
                  <span class="w-70 text-secondary-light fw-medium">- {{ stats.league }}</span>
                </li>
                <li class="d-flex align-items-center gap-1 mb-12">
                  <span class="w-30 text-md fw-semibold text-primary-light">Общий балл</span>
                  <span class="w-70 text-secondary-light fw-medium">- {{ stats.total_score }}</span>
                </li>
                <li class="d-flex align-items-center gap-1 mb-12">
                  <span class="w-30 text-md fw-semibold text-primary-light">Позиция в лиге</span>
                  <span class="w-70 text-secondary-light fw-medium">- {{ stats.league_rank }}</span>
                </li>
                <li class="d-flex align-items-center gap-1 mb-12">
                  <span class="w-30 text-md fw-semibold text-primary-light">Общая позиция</span>
                  <span class="w-70 text-secondary-light fw-medium">- {{ stats.global_rank }}</span>
                </li>
                <li class="d-flex align-items-center gap-1 mb-12">
                  <span class="w-30 text-md fw-semibold text-primary-light">Подписчики</span>
                  <span class="w-70 text-secondary-light fw-medium">- {{ stats.followers }}</span>
                </li>
                <li class="d-flex align-items-center gap-1 mb-12">
                  <span class="w-30 text-md fw-semibold text-primary-light">Лайки</span>
                  <span class="w-70 text-secondary-light fw-medium">- {{ stats.likes }}</span>
                </li>
              </ul>

              <div class="d-flex align-items-center justify-content-center gap-3">
                <button @click="back()" type="button" class="border text-md px-56 py-11 radius-8">
                  Назад
                </button>
                <button @click="remove()" type="button" class="border border-danger-400 text-danger-400 text-md px-56 py-11 radius-8">
                  Удалить
                </button>
              </div>

            </div>

            <div :class="{active: route.params.name === 'chat', show: route.params.name === 'chat'}" class="tab-pane fade" id="pills-chat" role="tabpanel" aria-labelledby="pills-edit-profile-tab" tabindex="1">

              <div class="chat-main card">
                <div class="chat-message-list" ref="chatListContent">
                  <div
                    v-for="(chat) in chatHistories"
                    :key="chat.created_at"
                    class="chat-single-message"
                    :class="{
                      'left': chat.role === 'user',
                      'right': chat.role !== 'user',
                    }"
                  >
                    <img v-if="chat.role === 'user'" src="@/assets/images/default-avatar.jpg" alt="image" class="avatar-lg object-fit-cover rounded-circle">
                    <img v-else src="@/assets/images/user.png" alt="image" class="avatar-lg object-fit-cover rounded-circle">
                    <div class="chat-message-content">
                      <p class="mb-3">{{ parseJson(chat.content) }}</p>
                      <p class="chat-time mb-0">
                        <span v-if="chat.created_at">{{ chat.created_at?.slice(0, 10).split('-').reverse().join('.') }} {{ chat.created_at?.slice(11, 16) }}</span>
                      </p>
                    </div>
                  </div><!-- chat-single-message end -->
                </div>
                <form @submit.prevent="sendMessage()" class="chat-message-box d-flex flex-nowrap">
                  <textarea v-model="chatFormData.message" type="text" name="chatMessage" placeholder="Написать..."></textarea>
                  <div class="chat-message-box-action">
<!--                    <button type="button" class="text-xl">-->
<!--                      <Icon icon="ph:link"></Icon>-->
<!--                    </button>-->
<!--                    <button type="button" class="text-xl">-->
<!--                      <Icon icon="solar:gallery-linear"></Icon>-->
<!--                    </button>-->
                    <button type="submit" class="btn btn-sm btn-primary-600 radius-8 d-inline-flex align-items-center gap-1">
                      Отправить
                      <Icon icon="f7:paperplane"></Icon>
                    </button>
                  </div>
                </form>
              </div>


            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {nextTick, onMounted, onUnmounted, ref, watch} from 'vue'
import api from '@/utils/api.js'
import {useRoute, useRouter} from 'vue-router'
import {useToast} from 'vue-toastification'
import { Icon } from '@iconify/vue'
import Swal from 'sweetalert2'
import Cookies from 'js-cookie'
import { MaskInput } from 'vue-mask-next'
// import { vMaska } from "maska"
import { useGlobalStore } from '@/store/globalStore'

const globalStore = useGlobalStore()

const child = ref([])
const chatHistories = ref([])
const curators = ref([])
const stats = ref({})
const route = useRoute()
const router = useRouter()
const toast = useToast()
const role = Cookies.get('admin-meyram-role') || null
let intervalId = null
const chatListContent = ref(null)
const chatFormData = ref({
  message: ''
})


const profile = ref({
  full_name: '',
  phone: '',
  curator_id: null,
  tariff: '',
  tariff_days: null,
  tariff_duration: '',
  ai_chat_enabled: false
})

const data = async () => {
  await api.get(`/admin/users/${route.params.id}`)
    .then((res) => {
      child.value = res.data.data
      profile.value = { ...res.data.data}
    })
    .catch((e) => {
      console.log(e, e.response, e.request)
    })
  if (child.value.uid) {
    await api.get(`https://api.meyram.kz/user_stats?uid=${child.value.uid}`)
      .then((res) => {
        stats.value = res.data?.data
      })
  }

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

const openTab = (tab) => {
  router.replace({ params: { name: tab } })
}

const back = () => {
  router.go(-1)
}
const cancel = () => {
  back()
}
const save = async () => {
  await api.post(`/admin/users/${route.params.id}/save`)
    .then((res) => {
      toast.success('Успешно сохранено')
    })
    .catch((e) => {
      console.log(e, e.response, e.request)
    })
}
const editCurator = async () => {
  await api.post(`/admin/curators/${profile.value.curator_id}/users`, {
    userId: route.params.id
  })
    .then((res) => {
      toast.success('Успешно сохранено')
    })
    .catch((e) => {
      console.log(e, e.response, e.request)
    })
}
const editTariff = async () => {
  await api.patch(`/admin/users/${route.params.id}/tariff`, {
    tariff: profile.value.tariff,
    days: +profile.value.tariff_duration // 30, 90, 365
  })
    .then((res) => {
      toast.success('Успешно сохранено')
    })
    .catch((e) => {
      console.log(e, e.response, e.request)
    })
}
const remove = async () => {
  Swal.fire({
    title: "Удалить?",
    text: 'Внимание, процесс не обратим',
    showDenyButton: true,
    confirmButtonText: "Удалить",
    denyButtonText: `Отмена`
  }).then((result) => {
    /* Read more about isConfirmed, isDenied below */
    if (result.isConfirmed) {
      api.delete(`/admin/staff/${id}`)
      router.go(-1)
    } else if (result.isDenied) {

    }
  });
}

const sendMessage = async () => {
  if (!child.value.uid) {
    return
  }
  const message = chatFormData.value.message
  await api.post(`/admin/chat/${child.value.uid}/send`, {
    message: chatFormData.value.message
  })
    .then(async (res) => {
      chatFormData.value.message = ''
      await getChatData()
    })
    
  await api.post('/admin/fcm/send',{
    title: globalStore.profile.name,
    body:message ,
    to:child.value.uid
  }).then(res =>{
    toast.success('Уведомления успешно отправлена')
  })
}

const getChatData = async () => {
  if (child.value?.uid) {
    await api.get(`https://api.meyram.kz/admin/chat/${child.value.uid}`)
      .then((res) => {
        const chatHistoriesCount = chatHistories.value?.length
        chatHistories.value = res.data?.data

        if (chatHistoriesCount < res.data?.data?.length) {
          nextTick(() => {
            toScrollBottom()
          }, 100)
        }
      })
  }
}

const toggleChatWithAI = async () => {
  if (!child.value?.uid) {
    return
  }
  await api.patch(`/admin/users/${child.value.uid}/chat-toggle`, {
    enabled: profile.value.ai_chat_enabled
  })
    .then(() => {
      toast.success('Сохранено!')
    })
}

const resetCoins = async () => {
  if (!child.value?.uid) {
    return
  }
  await api.post(`/admin/users/${child.value.uid}/reset-coins`)
    .then(() => {
      toast.success('Успешно обнулено')
    })
}

const toScrollBottom = () => {
  chatListContent.value.scrollTo({
    top: chatListContent.value.scrollHeight,
  })
}

const setChatInterval = async () => {
  await getChatData()
  intervalId = setInterval(getChatData, 5000)
  // toScrollBottom()
}
const parseJson = (str) => {
  try {
    const data = JSON.parse(str)
    return data.text || data
  } catch (e) {
    return str
  }
}

onMounted(async () => {
  await data()
  if (route.params.name === 'chat') {
    await setChatInterval()
  }
})

onUnmounted(() => {
  clearInterval(intervalId)
  intervalId = null
})

watch(route, async () => {
  if (route.params.name === 'chat') {
    await setChatInterval()
  } else {
    clearInterval(intervalId)
    intervalId = null
  }
})


</script>