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
                <div class="row">
                  <div class="col-md-6 col-sm-12 mt-10">
                    <button @click="cancel()" type="button" class="border border-danger-600 bg-hover-danger-200 text-danger-600 text-md py-11 radius-8 w-100 text-center">
                      Отмена
                    </button>
                  </div>
                  <div class="col-md-6 col-sm-12 mt-10">
                    <button type="submit" class="btn btn-primary border border-primary-600 text-md py-12 radius-8 w-100">
                      Сохранить
                    </button>
                  </div>
                </div>
              </form>
            </div>
            <div :class="{active: route.params.name === 'show', show: route.params.name === 'show'}"
                 class="tab-pane fade" id="pills-show-profile" role="tabpanel" aria-labelledby="pills-edit-profile-tab"
                 tabindex="1">

              <h6 class="text-md text-primary-light mb-16">Участники сотрудника</h6>
              <form @submit.prevent class="navbar-search mb-10">
                <input v-model="filter.name" @input="filterNameHandler" type="text" class="bg-base h-40-px w-full"
                       name="search" placeholder="Поиск по имени, телефону, instagram">
                <Icon icon="ion:search-outline" class="icon"/>
              </form>
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
                      v-for="item in paginateList"
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
              <div class="d-flex align-items-center justify-content-between flex-wrap gap-2 page-bottom mt-20">
              <span>Показано с {{ (filter.page - 1) * filter.size + 1 }} по {{
                  (filter.page) * Math.min(filter.size, filterList.length)
                }} из {{ Math.ceil(filterList.length / filter.size) }} записей</span>
                <paginate
                  v-model="filter.page"
                  :pages="Math.ceil(filterList.length / filter.size)"
                  :range-size="1"
                  active-color="#DCEDFF"
                  @update:modelValue="changePaginateHandler"

                >
                </paginate>

                <!--          <ul class="pagination d-flex flex-wrap align-items-center gap-2 justify-content-center">-->
                <!--            <li class="page-item">-->
                <!--              <a class="page-link bg-neutral-200 text-secondary-light fw-semibold radius-8 border-0 d-flex align-items-center justify-content-center h-32-px w-32-px text-md" href="javascript:void(0)"><Icon icon="ep:d-arrow-left" class=""></Icon></a>-->
                <!--            </li>-->
                <!--            <li class="page-item">-->
                <!--              <a class="page-link text-secondary-light fw-semibold radius-8 border-0 d-flex align-items-center justify-content-center h-32-px w-32-px text-md bg-primary-600 text-white" href="javascript:void(0)">1</a>-->
                <!--            </li>-->
                <!--            <li class="page-item">-->
                <!--              <a class="page-link bg-neutral-200 text-secondary-light fw-semibold radius-8 border-0 d-flex align-items-center justify-content-center h-32-px w-32-px" href="javascript:void(0)">2</a>-->
                <!--            </li>-->
                <!--            <li class="page-item">-->
                <!--              <a class="page-link bg-neutral-200 text-secondary-light fw-semibold radius-8 border-0 d-flex align-items-center justify-content-center h-32-px w-32-px text-md" href="javascript:void(0)">3</a>-->
                <!--            </li>-->
                <!--            <li class="page-item">-->
                <!--              <a class="page-link bg-neutral-200 text-secondary-light fw-semibold radius-8 border-0 d-flex align-items-center justify-content-center h-32-px w-32-px text-md" href="javascript:void(0)">4</a>-->
                <!--            </li>-->
                <!--            <li class="page-item">-->
                <!--              <a class="page-link bg-neutral-200 text-secondary-light fw-semibold radius-8 border-0 d-flex align-items-center justify-content-center h-32-px w-32-px text-md" href="javascript:void(0)">5</a>-->
                <!--            </li>-->
                <!--            <li class="page-item">-->
                <!--              <a class="page-link bg-neutral-200 text-secondary-light fw-semibold radius-8 border-0 d-flex align-items-center justify-content-center h-32-px w-32-px text-md" href="javascript:void(0)"> <Icon icon="ep:d-arrow-right" class=""></Icon> </a>-->
                <!--            </li>-->
                <!--          </ul>-->
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
import {computed, onMounted, ref} from 'vue'
import api from '@/utils/api.js'
import {useRoute, useRouter} from 'vue-router'
import {useToast} from 'vue-toastification'
import {Icon} from "@iconify/vue"
import Paginate from "@hennge/vue3-pagination";
import '@hennge/vue3-pagination/dist/vue3-pagination.css'
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
const filter = ref({
  name: '',
  page: 1,
  size: 10,
  tariff: 'all'
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

const filterList = computed(() => {
  // let list = children.value.filter((e) => e.fullname.toLowerCase().indexOf(filter.value.name) > -1)
  let list = children.value
  if (filter.value.name) {
    list = children.value.filter((e) =>
      e.full_name.toLowerCase().indexOf(filter.value.name) > -1 ||
      e.phone?.toLowerCase()?.indexOf(filter.value.name) > -1 ||
      e.instagram_username?.toLowerCase()?.indexOf(filter.value.name) > -1
    )
  }
  // if (filter.value.tariff !== 'all') {
  //   list = list.filter((e) => e.tariff === filter.value.tariff)
  // }
  // if (filter.value.curator !== 'all') {
  //   list = list.filter((e) => +e.curator_id === +filter.value.curator)
  // }
  return list
})

const paginateList = computed(() => filterList.value.slice((filter.value.page - 1) * filter.value.size, (filter.value.page) * filter.value.size))

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