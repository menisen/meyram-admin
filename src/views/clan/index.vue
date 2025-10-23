<template>
  <div class="d-flex flex-wrap align-items-center justify-content-between gap-3 mb-24">
    <h6 class="fw-semibold mb-0">Кланы</h6>
    <ul class="d-flex align-items-center gap-2">
      <li class="fw-medium">
        <router-link to="/" class="d-flex align-items-center gap-1 hover-text-primary">
          <Icon icon="solar:home-smile-angle-outline" class="icon text-lg"/>
          Главная
        </router-link>
      </li>
      <li>-</li>
      <li class="fw-medium">Кланы</li>
    </ul>
  </div>
  <div class="card basic-data-table">
    <div
      class="card-header border-bottom bg-base py-16 px-24 d-flex align-items-center flex-wrap gap-3 justify-content-between">
      <div class="d-flex align-items-center flex-wrap gap-3">
        <form @submit.prevent class="navbar-search">
          <input v-model="filter.name" @input="filterNameHandler" type="text" class="bg-base h-40-px w-full"
                 name="search" placeholder="Поиск по имени">
          <Icon icon="ion:search-outline" class="icon"/>
        </form>
      </div>
<!--      <div class="col-sm-3 mb-20">-->
<!--        <label for="curators" class="form-label fw-semibold text-primary-light text-sm mb-8">Лига</label>-->
<!--        <select required v-model="filter.league" class="form-control radius-8 form-select" id="curators">-->
<!--          <option value="all">Все</option>-->
<!--          <option value="">Без лиги</option>-->
<!--          <option v-for="(item, index) in leagues" :key="index" :value="index">{{ item }}</option>-->
<!--        </select>-->
<!--      </div>-->
      <div class="d-flex align-items-center">
        <router-link to="/clan/add"
                     class="btn btn-primary text-sm btn-sm px-12 py-12 radius-8 d-flex align-items-center gap-2">
          <Icon icon="ic:baseline-plus" class="icon text-xl line-height-1"/>
          Добавить клан
        </router-link>
      </div>
    </div>
    <div class="card-body">
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
                <col data-dt-column="6" style="width: 100px;">
                <col data-dt-column="6" style="width: 100px;">
<!--                <col data-dt-column="7" style="width: 150px;">-->
                <col data-dt-column="8" style="width: 160px;">
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
                    'dt-ordering-asc': sort.orderBy === 'name' && sort.order === 'asc',
                    'dt-ordering-desc': sort.orderBy === 'name' && sort.order === 'desc'
                  }"
                  aria-sort="ascending"
                  aria-label="S.L: Activate to invert sorting"
                  tabindex="0"
                  @click="sortBy('name')"
                >
                  <span class="dt-column-title" role="button">
                    <div class="form-check style-check d-flex align-items-center">
                      <label class="form-check-label">
                        Название
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
                    'dt-ordering-asc': sort.orderBy === 'leader_id' && sort.order === 'asc',
                    'dt-ordering-desc': sort.orderBy === 'leader_id' && sort.order === 'desc'
                  }"
                  aria-sort="ascending"
                  aria-label="S.L: Activate to invert sorting"
                  tabindex="0"
                  @click="sortBy('leader_id')"
                >
                  <span class="dt-column-title" role="button">
                    <div class="form-check style-check d-flex align-items-center">
                      <label class="form-check-label">
                        Продюсер
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
                  :class="{
                    'dt-ordering-asc': sort.orderBy === 'instagram_username' && sort.order === 'asc',
                    'dt-ordering-desc': sort.orderBy === 'instagram_username' && sort.order === 'desc'
                  }"
                  aria-sort="ascending"
                  aria-label="S.L: Activate to invert sorting"
                  tabindex="0"
                >
                  <span class="dt-column-title" role="button">
                    <div class="form-check style-check d-flex align-items-center">
                      <label class="form-check-label">
                        Иконка
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
                    'dt-ordering-asc': sort.orderBy === 'member_count' && sort.order === 'asc',
                    'dt-ordering-desc': sort.orderBy === 'member_count' && sort.order === 'desc'
                  }"
                  aria-sort="ascending"
                  aria-label="S.L: Activate to invert sorting"
                  tabindex="0"
                  @click="sortBy('member_count')"
                >
                  <span class="dt-column-title" role="button">
                    <div class="form-check style-check d-flex align-items-center">
                      <label class="form-check-label">
                         Кол-во
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
                    'dt-ordering-asc': sort.orderBy === 'points' && sort.order === 'asc',
                    'dt-ordering-desc': sort.orderBy === 'points' && sort.order === 'desc'
                  }"
                  aria-sort="ascending"
                  aria-label="S.L: Activate to invert sorting"
                  tabindex="0"
                  @click="sortBy('points')"
                >
                  <span class="dt-column-title" role="button">
                    <div class="form-check style-check d-flex align-items-center">
                      <label class="form-check-label">
                         Балл
                      </label>
                    </div>
                  </span>
                  <span class="dt-column-order"></span>
                </th>
                <th
                  scope="col"
                  data-dt-column="8"
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
                <td class="sorting_1">
                  <div class="form-check style-check d-flex align-items-center">
                    <label class="form-check-label">
                      {{ child.name }}
                    </label>
                  </div>
                </td>
                <td>{{ child.leader_name }}</td>
                <td>
                  <img :src="`https://meyram.kz/${child.icon}`" alt="" class="w-40-px h-40-px radius-8 object-fit-cover">
                </td>
                <td>{{ child.member_count }}</td>
                <td>{{ child.points }}</td>
                <td @click.stop>
                  <router-link :to="`/clan/${child.id}/show`"
                               class="w-32-px h-32-px bg-primary-light text-primary-600 rounded-circle d-inline-flex align-items-center justify-content-center ma-2">
                    <Icon icon="iconamoon:eye-light"/>
                  </router-link>
                  <router-link :to="`/clan/${child.id}/edit`"
                               class="w-32-px h-32-px bg-success-focus text-success-main rounded-circle d-inline-flex align-items-center justify-content-center mx-3">
                    <Icon icon="lucide:edit"/>
                  </router-link>
                  <a
                    @click="removeChild(child.id)"
                    class="w-32-px h-32-px bg-danger-focus text-danger-main rounded-circle d-inline-flex align-items-center justify-content-center">
                    <Icon icon="mingcute:delete-2-line"/>
                  </a>
                </td>
              </tr>
              </tbody>
              <tfoot></tfoot>
            </table>
          </div>
        </div>
        <div class="d-flex align-items-center justify-content-between flex-wrap gap-2 mt-24 page-bottom">
          Общее: {{ filterList.length }}
        </div>
        <div class="d-flex align-items-center justify-content-between flex-wrap gap-2 page-bottom">
          <span>Показано с {{ (filter.page) * filter.size + 1 }} по {{
              (filter.page + 1) * Math.min(filter.size, filterList.length)
            }} из {{ Math.ceil(filterList.length / filter.size) }} записей</span>
          <paginate
            :page-count="Math.ceil(filterList.length / filter.size)"
            :click-handler="changePaginateHandler"
            prev-text="Прев"
            next-text="След"
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
import Paginate from 'vuejs-paginate-next'
import Swal from 'sweetalert2'
import { Icon } from "@iconify/vue"
import router from '@/router/index.js'
import {useToast} from 'vue-toastification'
import Cookies from 'js-cookie'

const children = ref([])
const role = Cookies.get('admin-meyram-role') || null
const filter = ref({
  name: '',
  page: 0,
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
  await api.get('/clans')
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
      e.name.toLowerCase().indexOf(filter.value.name) > -1
    )
  }
  if (filter.value.league !== 'all') {
    list = list.filter((e) => e.league_name === filter.value.league)
  }
  if (sort.value.orderBy) {
    list = sortCustom([...list], sort.value.orderBy, sort.value.order)
  }
  return list
})

const paginateList = computed(() => filterList.value.slice(filter.value.page * filter.value.size, (filter.value.page + 1) * filter.value.size))

const changePaginateHandler = (e) => {
  filter.value.page = e - 1
}

const sortBy = (key) => {
  filter.value.page = 0
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
  filter.value.page = 0
}

const removeChild = (id) => {
  Swal.fire({
    title: "Удалить?",
    text: 'Внимание, процесс не обратим',
    showDenyButton: true,
    confirmButtonText: "Удалить",
    denyButtonText: `Отмена`
  }).then(async (result) => {
    /* Read more about isConfirmed, isDenied below */
    if (result.isConfirmed) {
      await api.delete(`/clans/${id}`)
      await data()
    } else if (result.isDenied) {

    }
  });
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