<template>
  <div class="d-flex flex-wrap align-items-center justify-content-between gap-3 mb-24">
    <h6 class="fw-semibold mb-0">Клан</h6>
    <ul class="d-flex align-items-center gap-2">
      <li class="fw-medium">
        <router-link to="/" class="d-flex align-items-center gap-1 hover-text-primary">
          <Icon icon="solar:home-smile-angle-outline" class="icon text-lg"></Icon>
          Главная
        </router-link>
      </li>
      <li>-</li>
      <li class="fw-medium">Клан</li>
    </ul>
  </div>
  <div class="row gy-4">
    <div class="col-lg-4">
      <div class="user-grid-card position-relative border radius-16 overflow-hidden bg-base h-100">
        <img src="https://wowdash.wowtheme7.com/bundlelive/demo/assets/images/user-grid/user-grid-bg1.png" alt=""
             class="w-100 object-fit-cover">
        <div class="pb-24 ms-16 mb-24 me-16  mt--100">
          <div class="text-center border border-top-0 border-start-0 border-end-0">
            <img v-if="formData.icon" :src="'https://meyram.kz/' + formData.icon" alt=""
                 class="border br-white border-width-2-px w-200-px h-200-px rounded-circle object-fit-cover">
            <img v-else src="@/assets/images/default-avatar.jpg" alt=""
                 class="border br-white border-width-2-px w-200-px h-200-px rounded-circle object-fit-cover">
            <h6 class="mb-0 mt-16">{{ formData.name }}</h6>
          </div>
          <div class="mt-24">
            <h6 class="text-xl mb-16">Персональная информация</h6>
            <ul>
              <li class="d-flex align-items-center gap-1 mb-12">
                <span class="w-30 text-md fw-semibold text-primary-light">Название</span>
                <span class="w-70 text-secondary-light fw-medium text-end"> {{ formData.name }}</span>
              </li>
              <li class="d-flex align-items-center gap-1 mb-12">
                <span class="w-30 text-md fw-semibold text-primary-light"> Создан</span>
                <span v-if="formData.created_at" class="w-70 text-secondary-light fw-medium text-end">{{ formData.created_at?.slice(0, 10)?.split('-')?.reverse()?.join('.') }}</span>
              </li>
              <li class="d-flex align-items-center gap-1 mb-12">
                <span class="w-30 text-md fw-semibold text-primary-light">Продюсер</span>
                <span class="w-70 text-secondary-light fw-medium text-end"> {{ formData.leader_id }}</span>
              </li>
              <li class="d-flex align-items-center gap-1 mb-12">
                <span class="w-30 text-md fw-semibold text-primary-light">Количество участников</span>
                <span class="w-70 text-secondary-light fw-medium text-end"> {{ formData.member_count }}</span>
              </li>
              <li class="d-flex align-items-center gap-1 mb-12">
                <span class="w-30 text-md fw-semibold text-primary-light">Балл</span>
                <span class="w-70 text-secondary-light fw-medium text-end"> {{ formData.points }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="col-lg-8">
      <div class="card h-100">
        <div class="card-body p-24">
          <ul class="nav border-gradient-tab nav-pills mb-20 d-inline-flex" id="pills-tab" role="tablist">
            <li class="nav-item" role="presentation">
              <button
                :class="{active: route.params.name === 'show'}"
                class="nav-link d-flex align-items-center px-24"
                id="pills-show-profile-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-edit-profile"
                type="button"
                role="tab"
                aria-controls="pills-edit-profile"
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
                id="pills-chats"
                data-bs-toggle="pill"
                data-bs-target="#pills-edit-profile"
                type="button"
                role="tab"
                aria-controls="pills-edit-profile"
                aria-selected="true"
                @click="openTab('chat')"
              >
                Чат
              </button>
            </li>
          </ul>

          <div class="tab-content" id="pills-tabContent">
            <div :class="{active: route.params.name === 'edit', show: route.params.name === 'edit'}"
                 class="tab-pane fade" id="pills-edit-profile" role="tabpanel" aria-labelledby="pills-edit-profile-tab"
                 tabindex="0">
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


              <form @submit.prevent="save()">
                <div class="row">
                  <div class="col-sm-6">
                    <div class="mb-20">
                      <label for="name" class="form-label fw-semibold text-primary-light text-sm mb-8">Название <span class="text-danger-600">*</span></label>
                      <input v-model="formData.name" type="text" class="form-control radius-8" id="name" placeholder="Редактировать название">
                    </div>
                  </div>
                  <div class="col-sm-6">
                    <div class="mb-20">
                      <label for="member_count" class="form-label fw-semibold text-primary-light text-sm mb-8">Кол-во участников <span class="text-danger-600">*</span></label>
                      <input v-model="formData.member_count" type="text" class="form-control radius-8" id="member_count" placeholder="Редактировать кол-во">
                    </div>
                  </div>
                  <div class="col-sm-6">
                    <div class="mb-20">
                      <label for="role" class="form-label fw-semibold text-primary-light text-sm mb-8">Продюсер</label>
                      <select required v-model="formData.leader_id" class="form-control radius-8 form-select" id="role">
                        <option :value="null">Выберите продюсера</option>
                        <option v-for="item in users" :key="item.id" :value="item.id">{{ item.full_name }}</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div class="d-flex align-items-center justify-content-center gap-3">
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
            <div :class="{active: route.params.name === 'show', show: route.params.name === 'show'}"
                 class="tab-pane fade" id="pills-show-profile" role="tabpanel" aria-labelledby="pills-edit-profile-tab"
                 tabindex="1">

              <div class="d-flex align-items-center flex-wrap gap-3 justify-content-between mb-10">
                <h6 class="text-md text-primary-light mb-16">Участники клана</h6>
                <button v-if="formData.member_count < 6" @click="openModal()" class="btn btn-primary text-sm btn-sm px-12 py-12 radius-8 d-flex align-items-center gap-2">
                  <Icon icon="ic:baseline-plus" class="icon text-xl line-height-1"/>
                  Добавить участника
                </button>
              </div>
              <div class="table-responsive scroll-sm">
                <div class="dt-layout-cell ">
                  <table
                    class="table bordered-table mb-0 dataTable"
                    id="dataTable"
                    data-page-length="10"
                    aria-describedby="dataTable_info"
                  >
                    <thead>
                    <tr role="row">
                      <th
                        scope="col"
                        data-dt-column="0"
                        rowspan="1"
                        colspan="1"
                        class="dt-orderable-asc dt-orderable-desc"
                        aria-sort="ascending"
                        aria-label="S.L: Activate to invert sorting"
                        tabindex="0"
                      >
                        <span class="dt-column-title" role="button">
                          <div class="form-check style-check d-flex align-items-center">
                            <label class="form-check-label">
                              ID
                            </label>
                          </div>
                        </span>
                        <span class="dt-column-order"></span>
                      </th>
                      <th
                        scope="col"
                        data-dt-column="0"
                        rowspan="1"
                        colspan="1"
                        class="dt-orderable-asc dt-orderable-desc"
                        aria-sort="ascending"
                        aria-label="S.L: Activate to invert sorting"
                        tabindex="0"
                      >
                        <span class="dt-column-title" role="button">
                          <div class="form-check style-check d-flex align-items-center">
                            <label class="form-check-label">
                              ФИО
                            </label>
                          </div>
                        </span>
                        <span class="dt-column-order"></span>
                      </th>
                      <th
                        scope="col"
                        data-dt-column="0"
                        rowspan="1"
                        colspan="1"
                        class="dt-orderable-asc dt-orderable-desc dt-ordering-asc"
                        aria-sort="ascending"
                        aria-label="S.L: Activate to invert sorting"
                        tabindex="0"
                      >
                        <span class="dt-column-title" role="button">
                          <div class="form-check style-check d-flex align-items-center">
                            <label class="form-check-label">
                              Действие
                            </label>
                          </div>
                        </span>
                      </th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr
                      v-for="item in formData.members"
                      :key="item.user_id"
                    >
                      <td class="sorting_1">
                        <div class="form-check style-check d-flex align-items-center">
                          <label class="form-check-label">
                            {{ item.user_id }}
                          </label>
                        </div>
                      </td>
                      <td>
                        <router-link :to="`/children/${item.user_id}/show`">{{ item.full_name }}</router-link>
                      </td>
                      <td>
                        <a
                          v-if="formData.leader_id !== item.user_id"
                          @click="removeMember(item.user_id)"
                          class="w-32-px h-32-px bg-danger-focus text-danger-main rounded-circle d-inline-flex align-items-center justify-content-center">
                          <Icon icon="mingcute:delete-2-line"/>
                        </a>
                        <a v-else>Продюсер</a>
                      </td>
                    </tr>
                    </tbody>
                    <tfoot></tfoot>
                  </table>
                </div>
              </div>

              <div class="mt-24">
                <button @click="back()" type="button" class="border text-md px-56 py-11 radius-8">
                  Назад
                </button>
                <button @click="removeClan()" type="button" class="border border-danger-400 mx-10 btn btn-danger text-md px-56 py-11 radius-8">
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
                      'left': chat.user_id !== formData.leader_id,
                      'right': chat.user_id === formData.leader_id,
                    }"
                  >
                    <div class="d-flex align-items-center">
                      <img v-if="chat.role === 'user'" src="@/assets/images/default-avatar.jpg" alt="image" class="avatar-lg object-fit-cover rounded-circle">
                      <img v-else src="@/assets/images/user.png" alt="image" class="avatar-lg object-fit-cover rounded-circle">
                      <p class="mb-0 mx-4">{{ chat.full_name }}</p>
                    </div>
                    <div class="chat-message-content">
                      <p class="mb-3">{{ chat.message }}</p>
                      <p class="chat-time mb-0">
                        <span v-if="chat.created_at">{{ chat.created_at?.slice(0, 10).split('-').reverse().join('.') }} {{ chat.created_at?.slice(11, 16) }}</span>
                      </p>
                    </div>
                  </div><!-- chat-single-message end -->
                </div>
                <form @submit.prevent="sendMessage()" class="chat-message-box">
                  <input v-model="chatFormData.message" type="text" name="chatMessage" placeholder="Написать...">
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

    <div @click="closeModal()" v-if="showModal" class="modal fade show" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-modal="true" role="dialog" style="display: block;">
      <div @click.stop class="modal-dialog modal modal-dialog modal-dialog-centered">
        <div class="modal-content radius-16 bg-base">
          <div class="modal-header py-16 px-24 border border-top-0 border-start-0 border-end-0">
            <h1 class="modal-title fs-5" id="exampleModalLabel">Добавить участника</h1>
            <button @click="closeModal()" type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body p-24">
            <form @submit.prevent="addMember()">
              <div class="row">
                <div class="col-12 mb-20">
                  <label class="form-label fw-semibold text-primary-light text-sm mb-8">Участник</label>
                  <multiselect
                    placeholder="Все"
                    label="full_name"
                    deselectLabel="Нажмите чтобы удалить"
                    selectedLabel="Выбран"
                    selectLabel="Нажмите чтобы выбрать"
                    v-model="member.user_id"
                    :options="childrens"
                  ></multiselect>
<!--                  <select required v-model="member.user_id" class="form-control radius-8 form-select" id="leader_id">-->
<!--                    <option :value="null">Все</option>-->
<!--                    <option v-for="child in childrens" :key="child.id" :value="child.id">{{ child.full_name }}</option>-->
<!--                  </select>-->
                </div>

                <div class="d-flex align-items-center justify-content-center gap-3 mt-24">
                  <button @click="closeModal()" type="reset" class="border border-danger-600 bg-hover-danger-200 text-danger-600 text-md px-40 py-11 radius-8">
                    Отмена
                  </button>
                  <button type="submit" class="btn btn-primary border border-primary-600 text-md px-48 py-12 radius-8">
                    Сохранить
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    <div v-if="showModal" @click="closeModal()" class="modal-backdrop fade show mt-0"></div>

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
import Multiselect from 'vue-multiselect'
// import { vMaska } from "maska"

const childrens = ref([])
const users = ref([])
const route = useRoute()
const router = useRouter()
const toast = useToast()
const showModal = ref(false)
const role = Cookies.get('admin-meyram-role') || null

const formData = ref({
  id: 16,
  name: '',
  description: '',
  leader_id: null,
  icon: '',
  color: '',
  brightness: '',
  members: [],
  points: 0,
  member_count: 0
})
const chatListContent = ref(null)
const chatFormData = ref({
  message: ''
})
const chatHistories = ref([])
let intervalId = null

const member = ref({
  user_id: null
})

const data = async () => {
  await api.get(`/clans/${route.params.id}`)
    .then((res) => {
      formData.value = res.data.data
    })
    .catch((e) => {
      console.log(e, e.response, e.request)
    })
}
const getUsers = async () => {
  if (role === 'admin') {
    await api.get('/admin/staff')
      .then((res) => {
        users.value = res.data.data
      })
      .catch((e) => {
        console.log(e, e.response, e.request)
      })
  }
}

const openTab = (tab) => {
  router.replace({params: {name: tab}})
}

const back = () => {
  router.go(-1)
}
const cancel = () => {
  back()
}
const removeClan = () => {
  Swal.fire({
    title: "Удалить?",
    text: 'Внимание, процесс не обратим',
    showDenyButton: true,
    confirmButtonText: "Удалить",
    denyButtonText: `Отмена`
  }).then(async (result) => {
    /* Read more about isConfirmed, isDenied below */
    if (result.isConfirmed) {
      await api.delete(`/clans/${route.params.id}`)
      toast.success('Успешно удален!')
      router.go(-1)
    }
  });
}

const save = async () => {
  formData.value.members_count = formData.value.member_count
  await api.put(`/clans/${route.params.id}`, formData.value)
    .then((res) => {
      toast.success('Успешно сохранено')
    })
    .catch((e) => {
      console.log(e, e.response, e.request)
    })
}

const removeMember = (id) => {
  Swal.fire({
    title: "Удалить?",
    text: 'Внимание, процесс не обратим',
    showDenyButton: true,
    confirmButtonText: "Удалить",
    denyButtonText: `Отмена`
  }).then(async (result) => {
    /* Read more about isConfirmed, isDenied below */
    if (result.isConfirmed) {
      await api.delete(`/clans/${route.params.id}/members/${id}`)
      await data()
      toast.success('Успешно')
    } else if (result.isDenied) {

    }
  });

}

function sortCustom(arr, key, order = "asc") {
  const categoryOrderAsc = ["latin", "cyrillic", "digit", "other"];
  const categoryOrderDesc = ["digit", "cyrillic", "latin", "other"];

  const getCategory = (str) => {
    if (/^[A-Za-z]/.test(str)) return "latin";
    if (/^[А-Яа-яЁё]/.test(str)) return "cyrillic";
    if (/^\d/.test(str)) return "digit";
    return "other";
  };

  return arr.sort((a, b) => {
    const va = a[key] ?? "";
    const vb = b[key] ?? "";

    const ca = getCategory(va);
    const cb = getCategory(vb);

    const orderArr = order === "desc" ? categoryOrderDesc : categoryOrderAsc;

    const catDiff = orderArr.indexOf(ca) - orderArr.indexOf(cb);
    if (catDiff !== 0) return catDiff;

    // если категории одинаковые → сортируем по значению
    const result = va.toString().toLowerCase().localeCompare(vb.toString().toLowerCase(), undefined, { numeric: true });
    return order === "desc" ? -result : result;
  });
}

const getChildrens = async () => {
  await api.get(`/admin/users`)
    .then((res) => {
      childrens.value = res.data.data
      childrens.value = sortCustom(childrens.value, 'full_name', 'asc')
      // childrens.value = childrens.value?.sort((a, b) => a?.toString().toLowerCase()?.full_name.localeCompare(b?.toString().toLowerCase()?.full_name))
    })
    .catch((e) => {
      console.log(e, e.response, e.request)
    })
}

const addMember = async () => {
  await api.post(`/clans/${route.params.id}/members`, {
    user_id: member.value.user_id?.id
  })
    .then((res) => {
      childrens.value = res.data.data
      toast.success('Успешно сохранено')
      closeModal()
      data()
    })
    .catch((e) => {
      console.log(e, e.response, e.request)
    })
}

const openModal = () => {
  showModal.value = true
  if (!childrens.value.length) {
    getChildrens()
  }
}
const closeModal = () => {
  showModal.value = false
}


const sendMessage = async () => {
  await api.post(`/clans/${route.params.id}/chat`, {
    message: chatFormData.value.message,
    // user_id: Cookies.get('admin-meyram-profile-id'),
    user_id: formData.value.leader_id
  })
    .then(async (res) => {
      chatFormData.value.message = ''
      await getChatData()
    })
}
const getChatData = async () => {
  await api.get(`/clans/${route.params.id}/chat`)
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

const chooseAvatarIcon = (item) => {
  formData.value.icon = `/icons/clan/clan-bg-${item}.png`
}


onMounted(async () => {
  data()
  getUsers()
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

<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
<style scoped>
.border-size-3 {
  border-width: 3px !important;
}
</style>