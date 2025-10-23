<template>
  <div class="d-flex flex-wrap align-items-center justify-content-between gap-3 mb-24">
    <h6 class="fw-semibold mb-0">Сотрудник</h6>
    <ul class="d-flex align-items-center gap-2">
      <li class="fw-medium">
        <router-link to="/" class="d-flex align-items-center gap-1 hover-text-primary">
          <Icon icon="solar:home-smile-angle-outline" class="icon text-lg"></Icon>
          Главная
        </router-link>
      </li>
      <li>-</li>
      <li class="fw-medium">Сотрудник</li>
    </ul>
  </div>
  <div class="row gy-4">
    <div class="col-lg-4">
      <div class="user-grid-card position-relative border radius-16 overflow-hidden bg-base h-100">
        <img src="https://wowdash.wowtheme7.com/bundlelive/demo/assets/images/user-grid/user-grid-bg1.png" alt=""
             class="w-100 object-fit-cover">
        <div class="pb-24 ms-16 mb-24 me-16  mt--100">
          <div class="text-center border border-top-0 border-start-0 border-end-0">
            <img v-if="child.avatar" :src="'https://meyram-academy.kz/' + child.avatar" alt=""
                 class="border br-white border-width-2-px w-200-px h-200-px rounded-circle object-fit-cover">
            <img v-else src="@/assets/images/default-avatar.jpg" alt=""
                 class="border br-white border-width-2-px w-200-px h-200-px rounded-circle object-fit-cover">
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
                <a :href="`tel:${child.phone}`" class="w-70 text-secondary-light fw-medium text-end"> {{
                    child.phone
                  }}</a>
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
          </ul>

          <div class="tab-content" id="pills-tabContent">
            <div :class="{active: route.params.name === 'edit', show: route.params.name === 'edit'}"
                 class="tab-pane fade" id="pills-edit-profile" role="tabpanel" aria-labelledby="pills-edit-profile-tab"
                 tabindex="0">
              <!-- Upload Image End -->
              <form @submit.prevent="save()">
                <div class="row">
                  <div class="col-sm-6">
                    <div class="mb-20">
                      <label for="name" class="form-label fw-semibold text-primary-light text-sm mb-8">Полное имя <span
                        class="text-danger-600">*</span></label>
                      <input v-model="profile.full_name" type="text" class="form-control radius-8" id="name"
                             placeholder="Редактировать имя">
                    </div>
                  </div>
                  <div class="col-sm-6">
                    <div class="mb-20">
                      <label for="number" class="form-label fw-semibold text-primary-light text-sm mb-8">Телефон
                        номер</label>
                      <input v-model="profile.phone" type="tel" class="form-control radius-8" id="number"
                             placeholder="Редактировать телефон">
                    </div>
                  </div>
                  <div class="col-sm-6">
                    <div class="mb-20">
                      <label for="role" class="form-label fw-semibold text-primary-light text-sm mb-8">Роль</label>
                      <select required v-model="profile.role" class="form-control radius-8 form-select" id="role">
                        <option value="curator">Куратор</option>
                        <option value="producer">Продюсер</option>
                        <option value="admin">Админ</option>
                        <option value="user">Участник</option>
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

              <h6 class="text-md text-primary-light mb-16">Участники сотрудника</h6>
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
                      v-for="item in children"
                      :key="item.id"
                    >
                      <td class="sorting_1">
                        <div class="form-check style-check d-flex align-items-center">
                          <label class="form-check-label">
                            {{ item.id }}
                          </label>
                        </div>
                      </td>
                      <td>{{ item.full_name }}</td>
                      <td>
                        <router-link :to="`/children/${item.id}/show`" class="w-32-px h-32-px bg-primary-light text-primary-600 rounded-circle d-inline-flex align-items-center justify-content-center ma-2">
                          <Icon icon="iconamoon:eye-light" />
                        </router-link>
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
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {onMounted, ref} from 'vue'
import api from '@/utils/api.js'
import {useRoute, useRouter} from 'vue-router'
import {useToast} from 'vue-toastification'
import {Icon} from "@iconify/vue"
// import { vMaska } from "maska"

const child = ref([])
const children = ref([])
const route = useRoute()
const router = useRouter()
const toast = useToast()

const profile = ref({
  full_name: '',
  phone: '',
  role: ''
})

const data = async () => {
  await api.get(`/admin/users/${route.params.id}`)
    .then((res) => {
      child.value = res.data.data
      profile.value.full_name = res.data?.data?.full_name
      profile.value.phone = res.data?.data?.phone
      profile.value.role = res.data?.data?.role
    })
    .catch((e) => {
      console.log(e, e.response, e.request)
    })
  await api.get(`/admin/curators/${route.params.id}/users`)
    .then((res) => {
      children.value = res.data.data
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
  await api.patch(`/admin/staff/${route.params.id}`, profile.value)
    .then((res) => {
      toast.success('Успешно сохранено')
    })
    .catch((e) => {
      console.log(e, e.response, e.request)
    })
}

onMounted(() => {
  data()
})


</script>