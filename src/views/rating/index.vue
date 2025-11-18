<template>
  <div class="d-flex flex-wrap align-items-center justify-content-between gap-3 mb-24">
    <h6 class="fw-semibold mb-0">Рейтинг</h6>
    <ul class="d-flex align-items-center gap-2">
      <li class="fw-medium">
        <router-link to="/" class="d-flex align-items-center gap-1 hover-text-primary">
          <Icon icon="solar:home-smile-angle-outline" class="icon text-lg"/>
          Главная
        </router-link>
      </li>
      <li>-</li>
      <li class="fw-medium">Рейтинг</li>
    </ul>
  </div>
  <div class="card basic-data-table">
    <div
      class="card-header border-bottom bg-base py-16 px-24">
      <div class="row">
        <div class="col-md-6 col-sm-12 d-flex flex-column justify-content-end mb-10">
          <label for="leagues" class="form-label fw-semibold text-primary-light text-sm mb-8">Поиск</label>
          <form @submit.prevent class="navbar-search d-block w-100">
            <!--          <label for="search" class="form-label fw-semibold text-primary-light text-sm mb-8">Поиск</label>-->
            <input v-model="filter.name" @input="filterNameHandler" type="text" class="bg-base h-40-px w-full w-100"
                   name="search" placeholder="Поиск по имени, instagram">
            <Icon icon="ion:search-outline" class="icon"/>
          </form>
        </div>
        <div class="col-md-3 col-sm-6 mb-10">
          <label for="leagues" class="form-label fw-semibold text-primary-light text-sm mb-8">Бренд-менеджер</label>
          <select @change="changeCuratorHandler" required v-model="filter.curator" class="form-control radius-8 form-select" id="leagues">
            <option value="all">Все</option>
            <option value="">Без менеджера</option>
            <option v-for="(item, index) in curators" :key="index" :value="item.full_name">{{ item.full_name }}</option>
          </select>
        </div>
        <div class="col-md-3 col-sm-6 mb-10">
          <label for="leagues" class="form-label fw-semibold text-primary-light text-sm mb-8">Лига</label>
          <select required v-model="filter.league" class="form-control radius-8 form-select" id="leagues">
            <option value="all">Все</option>
            <option value="">Без лиги</option>
            <option v-for="(item, index) in leagues" :key="index" :value="index">{{ item }}</option>
          </select>
        </div>
      </div>
    </div>
    <div class="card-body pb-48">
      <div id="dataTable_wrapper" class="dt-container dt-empty-footer">
        <div class="dt-layout-row dt-layout-table table-responsive scroll-sm">
          <div class="dt-layout-cell ">
            <table
              class="table bordered-table mb-0 dataTable"
              id="dataTable"
              data-page-length="10"
              aria-describedby="dataTable_info"
            >
              <colgroup>
                <col data-dt-column="0" style="width: 70px;">
                <col data-dt-column="2" style="width: 250px;">
                <!--                <col data-dt-column="3" style="width: 150px;">-->
                <!--                <col data-dt-column="4" style="width: 150px;">-->
                <col data-dt-column="5" style="width: 152px;">
                <col data-dt-column="6" style="width: 100px;">
                <col data-dt-column="6" style="width: 150px;">
                <col data-dt-column="6" style="width: 100px;">
<!--                <col data-dt-column="7" style="width: 150px;">-->
<!--                <col data-dt-column="8" style="width: 160px;">-->
              </colgroup>
              <thead>
              <tr role="row">
                <th
                  scope="col"
                  data-dt-column="0"
                  rowspan="1"
                  colspan="1"
                  class="dt-orderable-asc dt-orderable-desc"
                  :class="{
                    'dt-ordering-asc': sort.orderBy === 'id' && sort.order === 'asc',
                    'dt-ordering-desc': sort.orderBy === 'id' && sort.order === 'desc'
                  }"
                  aria-sort="ascending"
                  aria-label="S.L: Activate to invert sorting"
                  tabindex="0"
                  @click="sortBy('id')"
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
                  data-dt-column="2"
                  rowspan="1"
                  colspan="1"
                  class="dt-orderable-asc dt-orderable-desc"
                  :class="{
                    'dt-ordering-asc': sort.orderBy === 'full_name' && sort.order === 'asc',
                    'dt-ordering-desc': sort.orderBy === 'full_name' && sort.order === 'desc'
                  }"
                  aria-sort="ascending"
                  aria-label="S.L: Activate to invert sorting"
                  tabindex="0"
                  @click="sortBy('full_name')"
                >
                  <span class="dt-column-title" role="button">
                    <div class="form-check style-check d-flex align-items-center">
                      <label class="form-check-label">
                        Данные профиля
                      </label>
                    </div>
                  </span>
                  <span class="dt-column-order"></span>
                </th>
                <th
                  scope="col"
                  data-dt-column="5"
                  rowspan="1"
                  colspan="1"
                  class="dt-orderable-asc dt-orderable-desc"
                  :class="{
                    'dt-ordering-asc': sort.orderBy === 'instagram_username' && sort.order === 'asc',
                    'dt-ordering-desc': sort.orderBy === 'instagram_username' && sort.order === 'desc'
                  }"
                  aria-sort="ascending"
                  aria-label="S.L: Activate to invert sorting"
                  tabindex="0"
                  @click="sortBy('instagram_username')"
                >
                  <span class="dt-column-title" role="button">
                    <div class="form-check style-check d-flex align-items-center">
                      <label class="form-check-label">
                        Instagram
                      </label>
                    </div>
                  </span>
                  <span class="dt-column-order"></span>
                </th>
                <th
                  scope="col"
                  data-dt-column="6"
                  rowspan="1"
                  colspan="1"
                  class="dt-orderable-asc dt-orderable-desc"
                  :class="{
                    'dt-ordering-asc': sort.orderBy === 'rating' && sort.order === 'asc',
                    'dt-ordering-desc': sort.orderBy === 'rating' && sort.order === 'desc'
                  }"
                  aria-sort="ascending"
                  aria-label="S.L: Activate to invert sorting"
                  tabindex="0"
                  @click="sortBy('rating')"
                >
                  <span class="dt-column-title" role="button">
                    <div class="form-check style-check d-flex align-items-center">
                      <label class="form-check-label">
                         Рейтинг
                      </label>
                    </div>
                  </span>
                  <span class="dt-column-order"></span>
                </th>
                <th
                  scope="col"
                  data-dt-column="6"
                  rowspan="1"
                  colspan="1"
                  :class="{
                    'dt-ordering-asc': sort.orderBy === 'rating' && sort.order === 'asc',
                    'dt-ordering-desc': sort.orderBy === 'rating' && sort.order === 'desc'
                  }"
                  aria-sort="ascending"
                  aria-label="S.L: Activate to invert sorting"
                  tabindex="0"
                  @click="sortBy('rating')"
                >
                  <span class="dt-column-title" role="button">
                    <div class="form-check style-check d-flex align-items-center">
                      <label class="form-check-label">
                         Бренд-менеджер
                      </label>
                    </div>
                  </span>
                  <span class="dt-column-order"></span>
                </th>
                <th
                  scope="col"
                  data-dt-column="6"
                  rowspan="1"
                  colspan="1"
                  aria-sort="ascending"
                  aria-label="S.L: Activate to invert sorting"
                  tabindex="0"
                >
                  <span class="dt-column-title" role="button">
                    <div class="form-check style-check d-flex align-items-center">
                      <label class="form-check-label">
                         Лига
                      </label>
                    </div>
                  </span>
                  <span class="dt-column-order"></span>
                </th>
<!--                <th-->
<!--                  scope="col"-->
<!--                  data-dt-column="8"-->
<!--                  rowspan="1"-->
<!--                  colspan="1"-->
<!--                  class="dt-orderable-asc dt-orderable-desc dt-ordering-asc"-->
<!--                  aria-sort="ascending"-->
<!--                  aria-label="S.L: Activate to invert sorting"-->
<!--                  tabindex="0"-->
<!--                >-->
<!--                  <span class="dt-column-title" role="button">-->
<!--                    <div class="form-check style-check d-flex align-items-center">-->
<!--                      <label class="form-check-label">-->
<!--                        Действие-->
<!--                      </label>-->
<!--                    </div>-->
<!--                  </span>-->
<!--                </th>-->
              </tr>
              </thead>
              <tbody>
              <tr
                v-for="child in paginateList"
                :key="child.id"
              >
                <td class="sorting_1">
                  <div class="form-check style-check d-flex align-items-center">
                    <label class="form-check-label">
                      {{ child.id }}
                    </label>
                  </div>
                </td>
                <td>
                  <router-link :to="`/children/${child.id}/show`" class="mb-0 cursor-pointer">{{ child.full_name }}</router-link>
                </td>
                <td>
                  <a :href="`https://instagram.com/${child.instagram_username}`">{{ child.instagram_username }}</a>
                </td>
                <td>{{ child.rating }}</td>
                <td>{{ child.curator_name }}</td>
                <td>{{ leagues[child.league_name] }}</td>
<!--                <td @click.stop>-->
<!--                  <router-link :to="`/children/${child.id}/show`"-->
<!--                               class="w-32-px h-32-px bg-primary-light text-primary-600 rounded-circle d-inline-flex align-items-center justify-content-center ma-2">-->
<!--                    <Icon icon="iconamoon:eye-light"/>-->
<!--                  </router-link>-->
<!--                  <router-link :to="`/children/${child.id}/edit`"-->
<!--                               class="w-32-px h-32-px bg-success-focus text-success-main rounded-circle d-inline-flex align-items-center justify-content-center mx-3">-->
<!--                    <Icon icon="lucide:edit"/>-->
<!--                  </router-link>-->
<!--                  <a-->
<!--                    @click="removeChild(child.id)"-->
<!--                    class="w-32-px h-32-px bg-danger-focus text-danger-main rounded-circle d-inline-flex align-items-center justify-content-center">-->
<!--                    <Icon icon="mingcute:delete-2-line"/>-->
<!--                  </a>-->
<!--                </td>-->
              </tr>
              </tbody>
              <tfoot></tfoot>
            </table>
          </div>
        </div>
        <div class="row my-10">
          <div class="col-6 pt-2">
            Общее: {{ filterList.length }}
          </div>
          <div v-if="filter.curator && filter.curator !== 'all'" class="col-6 text-end">
            <a @click="exportList()" class="btn btn-primary text-sm btn-sm px-12 py-12 radius-8">
              Скачать данные
            </a>
          </div>
        </div>
        <div class="d-flex align-items-center justify-content-between flex-wrap gap-2 page-bottom">
          <span>Показано с {{ (filter.page) * filter.size + 1 }} по {{
              (filter.page + 1) * Math.min(filter.size, filterList.length)
            }} из {{ Math.ceil(filterList.length / filter.size) }} записей</span>
<!--          <paginate-->
<!--            :page-count="Math.ceil(filterList.length / filter.size)"-->
<!--            :click-handler="changePaginateHandler"-->
<!--            prev-text="Прев"-->
<!--            next-text="След"-->
<!--          >-->
<!--          </paginate>-->
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
      </div>
    </div>
  </div>
</template>

<script setup>
import {computed, onMounted, ref} from 'vue'
import api from '@/utils/api.js'
import Paginate from "@hennge/vue3-pagination"
import Swal from 'sweetalert2'
import { Icon } from "@iconify/vue"
import router from '@/router/index.js'
import {useToast} from 'vue-toastification'
import Cookies from 'js-cookie'
import '@hennge/vue3-pagination/dist/vue3-pagination.css'

const children = ref([])
const role = Cookies.get('admin-meyram-role') || null
const filter = ref({
  name: '',
  page: 1,
  size: 10,
  curator: role === 'curator' ? Cookies.get('admin-meyram-profile-id') : 'all',
  tariff: 'all',
  league: 'all'
})
const curators = ref([])
const toast = useToast()
const leagues = {
  tulga: 'Тұлға',
  platinum: 'Платинум',
  gauhar: 'Гауһар',
  altyn: 'Алтын',
  kumis: 'Күміс',
  qola: 'Қола',
  start: 'Старт',
}

const sort = ref({
  orderBy: '',
  order: ''
})

const data = async () => {
  await api.get('/admin/global-rating')
    .then((res) => {
      children.value = res.data.data
    })
    .catch((e) => {
      console.log(e, e.response, e.request)
    })
  await api.get('/admin/staff')
    .then((res) => {
      curators.value = res.data.data
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
  if (filter.value.league !== 'all') {
    list = list.filter((e) => e.league_name === filter.value.league)
  }
  if (filter.value.curator !== 'all') {
    list = list.filter((e) => e.curator_name === filter.value.curator)
  }
  if (sort.value.orderBy) {
    list = sortCustom([...list], sort.value.orderBy, sort.value.order)
  }
  return list
})

const paginateList = computed(() => filterList.value.slice((filter.value.page - 1) * filter.value.size, (filter.value.page) * filter.value.size))

const changePaginateHandler = (e) => {
  filter.value.page = e
}

const sortBy = (key) => {
  filter.value.page = 1
  const lastValue = {...sort.value}
  if (sort.value.orderBy === key && sort.value.order === 'desc') {
    sort.value.orderBy = ''
    sort.value.order = ''
  } else {
    sort.value.orderBy = key
    sort.value.order = lastValue.orderBy === key ? 'desc' : 'asc'
  }
}

const filterNameHandler = () => {
  filter.value.page = 1
}

const changeCuratorHandler = () => {
  filter.value.page = 1
}

const exportList = async () => {
  const curator = curators.value.find((e) => e.full_name === filter.value.curator)
  await api.get(`/admin/rating/curator/${curator.id}/export`, { responseType: 'blob' })
    .then((res) => {
      const url = window.URL.createObjectURL(new Blob([res.data]))
      const link = document.createElement('a')
      link.href = url
      link.setAttribute('download', 'report.xlsx')
      document.body.appendChild(link)
      link.click()
      link.remove()
    })
}

onMounted(() => {
  data()
})

</script>

<style scoped>
.page-bottom {
  height: 45px;
}
</style>