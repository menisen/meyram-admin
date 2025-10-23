<template>
  <div class="d-flex flex-wrap align-items-center justify-content-between gap-3 mb-24">
    <h6 class="fw-semibold mb-0">Участники</h6>
    <ul class="d-flex align-items-center gap-2">
      <li class="fw-medium">
        <router-link to="/" class="d-flex align-items-center gap-1 hover-text-primary">
          <Icon icon="solar:home-smile-angle-outline" class="icon text-lg"/>
          Главная
        </router-link>
      </li>
      <li>-</li>
      <li class="fw-medium">Участники</li>
    </ul>
  </div>
  <div class="card basic-data-table">
    <div
      class="card-header border-bottom bg-base py-16 px-24 d-flex align-items-center flex-wrap gap-3 justify-content-between">
      <div class="d-flex align-items-center flex-wrap gap-3">
        <span class="text-md fw-medium text-secondary-light mb-0">Список участников</span>
        <form @submit.prevent class="navbar-search">
          <input v-model="filter.name" @input="filterNameHandler" type="text" class="bg-base h-40-px w-full"
                 name="search" placeholder="Поиск по имени, телефону, instagram">
          <Icon icon="ion:search-outline" class="icon"/>
        </form>
      </div>
      <div class="d-flex align-items-center">
        <a @click="showFilters = !showFilters" class="btn btn-outline-info text-sm btn-sm px-12 py-12 radius-8 d-flex align-items-center gap-2 mx-3">
          <Icon icon="solar:filter-bold" class="icon text-xl line-height-1"/>
        </a>
        <router-link to="/children/add"
                     class="btn btn-primary text-sm btn-sm px-12 py-12 radius-8 d-flex align-items-center gap-2">
          <Icon icon="ic:baseline-plus" class="icon text-xl line-height-1"/>
          Добавить участника
        </router-link>
      </div>
    </div>
    <div class="card-body">
      <div v-show="showFilters" class="filter">
        <div class="row">
          <div v-if="role === 'admin'" class="col-sm-3">
            <div class="mb-20">
              <label for="curators" class="form-label fw-semibold text-primary-light text-sm mb-8">Куратор</label>
              <select required v-model="filter.curator" class="form-control radius-8 form-select" id="curators">
                <option value="all">Все</option>
                <option value="">Без куратора</option>
                <option v-for="curator in curators" :key="curator.id" :value="curator.id">{{ curator.full_name }}</option>
              </select>
            </div>
          </div>
          <div class="col-sm-3">
            <div class="mb-20">
              <label for="tariffs" class="form-label fw-semibold text-primary-light text-sm mb-8">Тариф</label>
              <select required v-model="filter.tariff" class="form-control radius-8 form-select" id="tariffs">
                <option value="all">Все</option>
                <option value="">Без тарифа</option>
                <option value="free">Free</option>
                <option value="standard">Standard</option>
                <option value="vip">VIP</option>
              </select>
            </div>
          </div>
        </div>
      </div>
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
                <col data-dt-column="1" style="width: 100px;">
                <col data-dt-column="2" style="width: 250px;">
<!--                <col data-dt-column="3" style="width: 150px;">-->
<!--                <col data-dt-column="4" style="width: 150px;">-->
                <col data-dt-column="5" style="width: 152px;">
                <col data-dt-column="6" style="width: 200px;">
                <col data-dt-column="7" style="width: 150px;">
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
                  data-dt-column="1"
                  rowspan="1"
                  colspan="1"
                  aria-sort="ascending"
                  aria-label="S.L: Activate to invert sorting"
                  tabindex="0"
                >
                  <span class="dt-column-title" role="button">
                    <div class="form-check style-check d-flex align-items-center">
                      <label class="form-check-label">
                        Статус Чат
                      </label>
                    </div>
                  </span>
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
<!--                <th-->
<!--                  scope="col"-->
<!--                  data-dt-column="3"-->
<!--                  rowspan="1"-->
<!--                  colspan="1"-->
<!--                  class="dt-orderable-asc dt-orderable-desc"-->
<!--                  :class="{-->
<!--                    'dt-ordering-asc': sort.orderBy === 'instagram_username' && sort.order === 'asc',-->
<!--                    'dt-ordering-desc': sort.orderBy === 'instagram_username' && sort.order === 'desc'-->
<!--                  }"-->
<!--                  aria-sort="ascending"-->
<!--                  aria-label="S.L: Activate to invert sorting"-->
<!--                  tabindex="0"-->
<!--                  @click="sortBy('instagram_username')"-->
<!--                >-->
<!--                  <span class="dt-column-title" role="button">-->
<!--                    <div class="form-check style-check d-flex align-items-center">-->
<!--                      <label class="form-check-label">-->
<!--                        Instagram-->
<!--                      </label>-->
<!--                    </div>-->
<!--                  </span>-->
<!--                  <span class="dt-column-order"></span>-->
<!--                </th>-->
<!--                <th-->
<!--                  scope="col"-->
<!--                  data-dt-column="4"-->
<!--                  rowspan="1"-->
<!--                  colspan="1"-->
<!--                  class="dt-orderable-asc dt-orderable-desc"-->
<!--                  :class="{-->
<!--                    'dt-ordering-asc': sort.orderBy === 'phone' && sort.order === 'asc',-->
<!--                    'dt-ordering-desc': sort.orderBy === 'phone' && sort.order === 'desc'-->
<!--                  }"-->
<!--                  aria-sort="ascending"-->
<!--                  aria-label="S.L: Activate to invert sorting"-->
<!--                  tabindex="0"-->
<!--                  @click="sortBy('phone')"-->
<!--                >-->
<!--                  <span class="dt-column-title" role="button">-->
<!--                    <div class="form-check style-check d-flex align-items-center">-->
<!--                      <label class="form-check-label">-->
<!--                        Телефон-->
<!--                      </label>-->
<!--                    </div>-->
<!--                  </span>-->
<!--                  <span class="dt-column-order"></span>-->
<!--                </th>-->
                <th
                  scope="col"
                  data-dt-column="5"
                  rowspan="1"
                  colspan="1"
                  class="dt-orderable-asc dt-orderable-desc"
                  :class="{
                    'dt-ordering-asc': sort.orderBy === 'curator_name' && sort.order === 'asc',
                    'dt-ordering-desc': sort.orderBy === 'curator_name' && sort.order === 'desc'
                  }"
                  aria-sort="ascending"
                  aria-label="S.L: Activate to invert sorting"
                  tabindex="0"
                  @click="sortBy('curator_name')"
                >
                  <span class="dt-column-title" role="button">
                    <div class="form-check style-check d-flex align-items-center">
                      <label class="form-check-label">
                        Куратор
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
                    'dt-ordering-asc': sort.orderBy === 'tariff' && sort.order === 'asc',
                    'dt-ordering-desc': sort.orderBy === 'tariff' && sort.order === 'desc'
                  }"
                  aria-sort="ascending"
                  aria-label="S.L: Activate to invert sorting"
                  tabindex="0"
                  @click="sortBy('tariff')"
                >
                  <span class="dt-column-title" role="button">
                    <div class="form-check style-check d-flex align-items-center">
                      <label class="form-check-label">
                         Тариф
                      </label>
                    </div>
                  </span>
                  <span class="dt-column-order"></span>
                </th>
                <th
                  scope="col"
                  data-dt-column="7"
                  rowspan="1"
                  colspan="1"
                  class="dt-orderable-asc dt-orderable-desc"
                  :class="{
                    'dt-ordering-asc': sort.orderBy === 'tariff_expires' && sort.order === 'asc',
                    'dt-ordering-desc': sort.orderBy === 'tariff_expires' && sort.order === 'desc'
                  }"
                  aria-sort="ascending"
                  aria-label="S.L: Activate to invert sorting"
                  tabindex="0"
                  @click="sortBy('tariff_expires')"
                >
                  <span class="dt-column-title" role="button">
                    <div class="form-check style-check d-flex align-items-center">
                      <label class="form-check-label">
                         Срок тарифа
                      </label>
                    </div>
                  </span>
                  <span class="dt-column-order"></span>
                </th>
                <th
                  scope="col"
                  data-dt-column="7"
                  rowspan="1"
                  colspan="1"
                  class="dt-orderable-asc dt-orderable-desc"
                  :class="{
                    'dt-ordering-asc': sort.orderBy === 'city' && sort.order === 'asc',
                    'dt-ordering-desc': sort.orderBy === 'city' && sort.order === 'desc'
                  }"
                  aria-sort="ascending"
                  aria-label="S.L: Activate to invert sorting"
                  tabindex="0"
                  @click="sortBy('city')"
                >
                  <span class="dt-column-title" role="button">
                    <div class="form-check style-check d-flex align-items-center">
                      <label class="form-check-label">
                         Город
                      </label>
                    </div>
                  </span>
                  <span class="dt-column-order"></span>
                </th>
                <th
                  scope="col"
                  data-dt-column="7"
                  rowspan="1"
                  colspan="1"
                  class="dt-orderable-asc dt-orderable-desc"
                  :class="{
                    'dt-ordering-asc': sort.orderBy === 'birth_date' && sort.order === 'asc',
                    'dt-ordering-desc': sort.orderBy === 'birth_date' && sort.order === 'desc'
                  }"
                  aria-sort="ascending"
                  aria-label="S.L: Activate to invert sorting"
                  tabindex="0"
                  @click="sortBy('birth_date')"
                >
                  <span class="dt-column-title" role="button">
                    <div class="form-check style-check d-flex align-items-center">
                      <label class="form-check-label">
                         Дата рождения
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
                <td>
                  <a v-if="child.has_chat_messages" class="w-32-px h-32-px bg-success-focus text-success-main rounded-circle d-inline-flex align-items-center justify-content-center mx-2">
                    <Icon icon="ic:round-check"/>
                  </a>
                  <a v-else class="w-32-px h-32-px bg-danger-focus text-danger-main rounded-circle d-inline-flex align-items-center justify-content-center mx-2">
                    <Icon icon="jam:close"/>
                  </a>
                </td>
                <td>
                  <router-link :to="`/children/${child.id}/show`" class="mb-0 cursor-pointer">{{ child.full_name }}</router-link>
                  <p v-if="child.instagram_username" class="mb-0 text-success-400">
                    <a target="_blank" :href="`https://instagram.com/${child.instagram_username}`">{{ child.instagram_username }}</a>
                  </p>
                  <p class="mba-0 text-primary-400">
                    <a :href="`tel:${child.phone}`">{{ child.phone }}</a>
                  </p>
                </td>
                <td>
                  <select v-if="role === 'admin'" @change="changeCuratorHandler(child.id, child.curator_id)" v-model="child.curator_id" class="form-control radius-8 form-select" id="curator">
                    <option value="">Все</option>
                    <option v-for="curator in curators" :key="curator.id" :value="curator.id">{{ curator.full_name }}</option>
                  </select>
                  <span v-else>{{ child.curator_name }}</span>
                </td>
                <td>
                  <select @change="changeTariffHandler(child.id, child.tariff)" v-model="child.tariff" class="form-control radius-8 form-select" id="tariff">
                    <option value="">Все</option>
                    <option value="free">Free</option>
                    <option value="standard">Standard</option>
                    <option value="vip">VIP</option>
                  </select>
                </td>
                <td>{{ child.tariff_expires && child.tariff_expires?.slice(0, 10)?.split('-')?.reverse()?.join('.') }}</td>
                <td>{{ child.city }}</td>
                <td>{{ child.birth_date && child.birth_date?.slice(0, 10)?.split('-')?.reverse()?.join('.') }}</td>
                <td @click.stop>
                  <router-link :to="`/children/${child.id}/show`"
                               class="w-32-px h-32-px bg-primary-light text-primary-600 rounded-circle d-inline-flex align-items-center justify-content-center ma-2">
                    <Icon icon="iconamoon:eye-light"/>
                  </router-link>
                  <router-link :to="`/children/${child.id}/edit`"
                               class="w-32-px h-32-px bg-success-focus text-success-main rounded-circle d-inline-flex align-items-center justify-content-center mx-2">
                    <Icon icon="lucide:edit"/>
                  </router-link>
                  <a
                    @click="removeChild(child.id)"
                    class="w-32-px h-32-px bg-danger-focus text-danger-main rounded-circle d-inline-flex align-items-center justify-content-center mx-2">
                    <Icon icon="mingcute:delete-2-line"/>
                  </a>
                  <a
                    v-if="child.parent_phone"
                    target="_blank"
                    :href="`https://wa.me/${child.parent_phone}`"
                    class="w-32-px h-32-px bg-success-focus text-success-main rounded-circle d-inline-flex align-items-center justify-content-center">
                    <Icon icon="ic:baseline-whatsapp"/>
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
  curator: role === 'curator' || role === 'producer' ? Cookies.get('admin-meyram-profile-id') : 'all',
  tariff: 'all'
})
const curators = ref([])
const toast = useToast()

const sort = ref({
  orderBy: '',
  order: ''
})

const showFilters = ref(false)

const data = async () => {
  await api.get('/admin/users')
    .then((res) => {
      children.value = res.data.data
    })
    .catch((e) => {
      console.log(e, e.response, e.request)
    })
  if (role === 'admin') {
    await api.get('/admin/staff')
      .then((res) => {
        curators.value = res.data.data
      })
      .catch((e) => {
        console.log(e, e.response, e.request)
      })
  }
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
  if (filter.value.tariff !== 'all') {
    list = list.filter((e) => e.tariff === filter.value.tariff)
  }
  if (filter.value.curator !== 'all') {
    list = list.filter((e) => +e.curator_id === +filter.value.curator)
  }
  if (sort.value.orderBy) {
    list = sortCustom([...list], sort.value.orderBy, sort.value.order)
  }
  return list
})

const paginateList = computed(() => filterList.value.slice((filter.value.page - 1) * filter.value.size, (filter.value.page) * filter.value.size))

const changePaginateHandler = (e) => {
  console.log(e)
  filter.value.page = e
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
      await api.delete(`/admin/users/${id}`)
      await data()
    } else if (result.isDenied) {

    }
  });
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

const changeCuratorHandler = async (id, curator_id) => {
  await api.post(`/admin/curators/${curator_id}/users`, {
    userId: id
  })
    .then(() => {
      toast.success('Успешно сохранено')
    })
    .catch((e) => {
      console.log(e, e.response, e.request)
    })
}
const changeTariffHandler = async (id, tariff) => {
  await api.patch(`/admin/users/${id}/tariff`, {
    tariff,
    days: tariff === 'vip' ? '365' : '30'
  })
    .then(() => {
      toast.success('Успешно сохранено')
    })
    .catch((e) => {
      console.log(e, e.response, e.request)
    })
}

const filterNameHandler = () => {
  filter.value.page = 1
}

const openChild = (id) => {
  router.push(`/children/${id}/show`)
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