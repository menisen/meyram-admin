<template>
  <div class="d-flex flex-wrap align-items-center justify-content-between gap-3 mb-24">
    <h6 class="fw-semibold mb-0">Проект</h6>
    <ul class="d-flex align-items-center gap-2">
      <li class="fw-medium">
        <router-link to="/" class="d-flex align-items-center gap-1 hover-text-primary">
          <Icon icon="solar:home-smile-angle-outline" class="icon text-lg"></Icon>
          Главная
        </router-link>
      </li>
      <li>-</li>
      <li class="fw-medium">Проект</li>
    </ul>
  </div>
  <div class="row gy-4">
    <div class="col-lg-12">
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
                Участники
              </button>
            </li>
            <li class="nav-item" role="presentation">
              <button
                :class="{active: route.params.name === 'request'}"
                class="nav-link d-flex align-items-center px-24"
                id="pills-request-profile-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-edit-profile"
                type="button"
                role="tab"
                aria-controls="pills-edit-profile"
                aria-selected="true"
                @click="openTab('request')"
              >
                Заявки
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
          </ul>

          <div class="tab-content" id="pills-tabContent">
            <div :class="{active: route.params.name === 'edit', show: route.params.name === 'edit'}"
                 class="tab-pane fade" id="pills-edit-profile" role="tabpanel" aria-labelledby="pills-edit-profile-tab"
                 tabindex="0">
              <!-- Upload Image End -->
              <form @submit.prevent="save()">
                <div class="row">
                  <div class="col-6 mb-10">
                    <label class="form-label fw-semibold text-primary-light text-sm mb-8">Название</label>
                    <input v-model="formData.project.title" type="text" class="form-control radius-8" placeholder="Введите название">
                  </div>
                  <div class="col-6 mb-10">
                    <label for="leader_id" class="form-label fw-semibold text-primary-light text-sm mb-8">Куратор<span class="text-danger-600">*</span></label>
                    <select v-model="formData.project.curator_id" class="form-control radius-8 form-select" id="leader_id">
                      <option :value="null">Не выбран</option>
                      <option v-for="curator in curators" :key="curator.id" :value="curator.id">{{ curator.full_name }}</option>
                    </select>
                  </div>
                  <div class="col-12 mb-10">
                    <label for="desc" class="form-label fw-semibold text-primary-light text-sm mb-8">Описание</label>
                    <textarea v-model="formData.project.description" class="form-control" id="desc" rows="4" cols="50" placeholder="Описание"></textarea>
                  </div>
                  <div class="col-6 mb-10">
                    <label class="form-label fw-semibold text-primary-light text-sm mb-8">Максимальное число</label>
                    <input v-model="formData.project.max_members" type="number" class="form-control radius-8" placeholder="Введите число">
                  </div>
                  <div class="col-6 mb-10">
                    <label class="form-label fw-semibold text-primary-light text-sm mb-8">Ссылка на обложку</label>
                    <input v-model="formData.project.link_url" type="text" class="form-control radius-8" placeholder="Введите ссылку">
                  </div>
                  <div class="col-6 mb-10">
                    <label class="form-label fw-semibold text-primary-light text-sm mb-8">Ссылка на трейлер</label>
                    <input v-model="formData.project.trailer_url" type="text" class="form-control radius-8" placeholder="Введите ссылку">
                  </div>
                  <div class="col-6 mb-10">
                    <label class="form-label fw-semibold text-primary-light text-sm mb-8">Ссылка на изображение трейлера</label>
                    <input v-model="formData.project.banner_url" type="text" class="form-control radius-8" placeholder="Введите ссылку">
                  </div>
                  <div class="col-6 mb-10">
                    <label class="form-label fw-semibold text-primary-light text-sm mb-8">Город</label>
                    <input v-model="formData.project.city" type="text" class="form-control radius-8" placeholder="Введите город">
                  </div>
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
            <div :class="{active: route.params.name === 'show', show: route.params.name === 'show'}"
                 class="tab-pane fade" id="pills-show-profile" role="tabpanel" aria-labelledby="pills-edit-profile-tab"
                 tabindex="1">

              <h6 class="text-md text-primary-light mb-16">Участники проекта</h6>
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
                      :key="item.id"
                    >
                      <td class="sorting_1">
                        <div class="form-check style-check d-flex align-items-center">
                          <label class="form-check-label">
                            {{ item.user_id }}
                          </label>
                        </div>
                      </td>
                      <td>{{ item.full_name }}</td>
                      <td>
                        <router-link :to="`/children/${item.user_id}/show`" class="w-32-px h-32-px bg-primary-light text-primary-600 rounded-circle d-inline-flex align-items-center justify-content-center ma-2">
                          <Icon icon="iconamoon:eye-light" />
                        </router-link>
                        <a
                          @click="rewardUser(item)"
                          class="w-32-px h-32-px bg-success-focus text-success-main rounded-circle d-inline-flex align-items-center justify-content-center mx-4">
                          <Icon icon="streamline-freehand:money-bag"/>
                        </a>
                        <a
                          @click="deleteFromProject(item.user_id)"
                          class="w-32-px h-32-px bg-danger-focus text-danger-main rounded-circle d-inline-flex align-items-center justify-content-center mx-4">
                          <Icon icon="solar:close-circle-bold"/>
                        </a>
<!--                        <a-->
<!--                          @click=""-->
<!--                          class="w-32-px h-32-px bg-danger-focus text-danger-main rounded-circle d-inline-flex align-items-center justify-content-center">-->
<!--                          <Icon icon="mingcute:delete-2-line"/>-->
<!--                        </a>-->
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
              </div>

            </div>
            <div :class="{active: route.params.name === 'request', show: route.params.name === 'request'}"
                 class="tab-pane fade" id="pills-request-profile" role="tabpanel" aria-labelledby="pills-edit-profile-tab"
                 tabindex="1">

              <h6 class="text-md text-primary-light mb-16">Заявки на проект</h6>
              <div class="table-responsive scroll-sm">
                <div class="dt-layout-cell ">
                  <table
                    class="table bordered-table mb-0 dataTable"
                    id="dataTable1"
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
                      v-for="item in formData.applications"
                      :key="item.id"
                    >
                      <td class="sorting_1">
                        <div class="form-check style-check d-flex align-items-center">
                          <label class="form-check-label">
                            {{ item.user_id }}
                          </label>
                        </div>
                      </td>
                      <td>{{ item.full_name }}</td>
                      <td>
                        <router-link :to="`/children/${item.id}/show`" class="w-32-px h-32-px bg-primary-light text-primary-600 rounded-circle d-inline-flex align-items-center justify-content-center ma-2">
                          <Icon icon="iconamoon:eye-light" />
                        </router-link>
                        <a
                          @click="approveChild(item.id)"
                          class="w-32-px h-32-px bg-success-focus text-success-main rounded-circle mx-10 d-inline-flex align-items-center justify-content-center">
                          <Icon icon="solar:check-circle-linear"/>
                        </a>
                        <a
                          @click="rejectChild(item.id)"
                          class="w-32-px h-32-px bg-danger-focus text-danger-main rounded-circle d-inline-flex align-items-center justify-content-center">
                          <Icon icon="solar:close-circle-bold"/>
                        </a>
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
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-if="rewardModalData" @click="closeModalReward()" class="modal fade show" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-modal="true" role="dialog" style="display: block;">
      <div @click.stop class="modal-dialog modal-lg modal-dialog modal-dialog-centered">
        <div class="modal-content radius-16 bg-base">
          <div class="modal-header py-16 px-24 border border-top-0 border-start-0 border-end-0">
            <h1 class="modal-title fs-5" id="exampleModalLabel">Награждения</h1>
            <button @click="closeModalReward()" type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body p-24">
            <form @submit.prevent="saveRewardUser()">
              <div class="row">
                <div class="col-12 mb-10">
                  <label class="form-label fw-semibold text-primary-light text-sm mb-8">Коин</label>
                  <input v-model="rewardModalData.coin" type="text" class="form-control radius-8" placeholder="Введите название">
                </div>

                <div class="d-flex align-items-center justify-content-center gap-3 mt-24">
                  <button @click="closeModalReward()" type="reset" class="border border-danger-600 bg-hover-danger-200 text-danger-600 text-md px-40 py-11 radius-8">
                    Отмена
                  </button>
                  <button type="submit" class="btn btn-primary border border-primary-600 text-md px-48 py-12 radius-8">
                    Наградить
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    <div v-if="rewardModalData" class="modal-backdrop fade show"></div>
  </div>
</template>

<script setup>
import {onMounted, ref} from 'vue'
import api from '@/utils/api.js'
import {useRoute, useRouter} from 'vue-router'
import {useToast} from 'vue-toastification'
import {Icon} from '@iconify/vue'
import Cookies from 'js-cookie'

const curators = ref([])
const route = useRoute()
const router = useRouter()
const toast = useToast()
const role = Cookies.get('admin-meyram-role') || null
const rewardModalData = ref(null)

const formData = ref({
  applications: [],
  members: [],
  project: {
    title: '',
    description: '',
    banner_url: '',
    trailer_url: '',
    link_url: '',
    city: '',
    curator_id: null,
    max_members: 0
  }
})

const data = async () => {
  await api.get(`/projects/${route.params.id}`)
    .then((res) => {
      formData.value = res.data.data
    })
    .catch((e) => {
      console.log(e, e.response, e.request)
    })
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
const save = async () => {
  await api.put(`/projects/${route.params.id}`, formData.value.project)
    .then((res) => {
      toast.success('Успешно сохранено')
    })
    .catch((e) => {
      console.log(e, e.response, e.request)
    })
}
const getCurators = async () => {
  if (role === 'admin') {
    await api.get(`/admin/staff`)
      .then((res) => {
        curators.value = res.data.data
      })
      .catch((e) => {
        console.log(e, e.response, e.request)
      })
  }
}
const approveChild = async (id) => {
  await api.put(`/projects/${route.params.id}/applications/${id}`, {
    status: 'approved'
  })
    .then((res) => {
      toast.success('Успешно сохранено')
      data()
    })
    .catch((e) => {
      console.log(e, e.response, e.request)
    })
}
const rejectChild = async (id) => {
  await api.put(`/projects/${route.params.id}/applications/${id}`, {
    status: 'rejected'
  })
    .then((res) => {
      toast.success('Успешно сохранено')
      data()
    })
    .catch((e) => {
      console.log(e, e.response, e.request)
    })
}
const deleteFromProject = async (id) => {
  await api.delete(`/projects/${route.params.id}/members/${id}`, {
    status: 'rejected'
  })
    .then((res) => {
      toast.success('Успешно сохранено')
      data()
    })
    .catch((e) => {
      console.log(e, e.response, e.request)
    })
}
const rewardUser = (item) => {
  console.log(item)
  rewardModalData.value = {
    ...item,
    coin: 0
  }
}
const closeModalReward = () => {
  rewardModalData.value = null
}
const saveRewardUser = async () => {
  await api.post(`/admin/projects/${route.params.id}/reward-user`, {
    user_id: rewardModalData.value.user_id,
    amount: rewardModalData.value.coin
  })
    .then((res) => {
      toast.success('Успешно награжден!')
      closeModalReward()
    })
    .catch((e) => {
      console.log(e, e.response, e.request)
    })
}

onMounted(() => {
  data()
  getCurators()
})


</script>