<template>
  <div class="d-flex flex-wrap align-items-center justify-content-between gap-3 mb-24">
    <h6 class="fw-semibold mb-0">Сотрудники</h6>
    <ul class="d-flex align-items-center gap-2">
      <li class="fw-medium">
        <router-link to="/" class="d-flex align-items-center gap-1 hover-text-primary">
          <Icon icon="solar:home-smile-angle-outline" class="icon text-lg" />
          Главная
        </router-link>
      </li>
      <li>-</li>
      <li class="fw-medium">Сотрудники</li>
    </ul>
  </div>
  <div class="card basic-data-table">
    <div class="card-header border-bottom bg-base py-16 px-24 d-flex align-items-center flex-wrap gap-3 justify-content-between">
      <div class="d-flex align-items-center flex-wrap gap-3">
        <span class="text-md fw-medium text-secondary-light mb-0">Список сотрудников</span>
        <form class="navbar-search">
          <input v-model="filter.name" @input="filterNameHandler" type="text" class="bg-base h-40-px w-full" name="search" placeholder="Поиск по имени, телефону, instagram">
          <Icon icon="ion:search-outline" class="icon" />
        </form>
      </div>
      <router-link to="/users/add" class="btn btn-primary text-sm btn-sm px-12 py-12 radius-8 d-flex align-items-center gap-2">
        <Icon icon="ic:baseline-plus" class="icon text-xl line-height-1" />
        Добавить сотрудника
      </router-link>
    </div>
    <div class="card-body">
      <div id="dataTable_wrapper" class="dt-container dt-empty-footer">
        <div class="dt-layout-row dt-layout-table">
          <div class="dt-layout-cell ">
            <table
              class="table bordered-table mb-0 dataTable"
              id="dataTable"
              data-page-length="10"
              aria-describedby="dataTable_info"
              style="width: 1067px;"
            >
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
                  data-dt-column="0"
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
                        Роль
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
                  :class="{
                    'dt-ordering-asc': sort.orderBy === 'phone' && sort.order === 'asc',
                    'dt-ordering-desc': sort.orderBy === 'phone' && sort.order === 'desc'
                  }"
                  aria-sort="ascending"
                  aria-label="S.L: Activate to invert sorting"
                  tabindex="0"
                  @click="sortBy('phone')"
                >
                  <span class="dt-column-title" role="button">
                    <div class="form-check style-check d-flex align-items-center">
                      <label class="form-check-label">
                        Телефон
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
                  :class="{
                    'dt-ordering-asc': sort.orderBy === 'total_rating' && sort.order === 'asc',
                    'dt-ordering-desc': sort.orderBy === 'total_rating' && sort.order === 'desc'
                  }"
                  aria-sort="ascending"
                  aria-label="S.L: Activate to invert sorting"
                  tabindex="0"
                  @click="sortBy('total_rating')"
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
                  data-dt-column="0"
                  rowspan="1"
                  colspan="1"
                  class="dt-orderable-asc dt-orderable-desc"
                  :class="{
                    'dt-ordering-asc': sort.orderBy === 'students_count' && sort.order === 'asc',
                    'dt-ordering-desc': sort.orderBy === 'students_count' && sort.order === 'desc'
                  }"
                  aria-sort="ascending"
                  aria-label="S.L: Activate to invert sorting"
                  tabindex="0"
                  @click="sortBy('students_count')"
                >
                  <span class="dt-column-title" role="button">
                    <div class="form-check style-check d-flex align-items-center">
                      <label class="form-check-label">
                        Кол-во участиников
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
                <td>{{ item.role }}</td>
                <td>{{ item.phone }}</td>
                <td>{{ item.total_rating }}</td>
                <td>{{ item.students_count }}</td>
                <td>
                  <router-link :to="`/users/${item.id}/show`"
                               class="w-32-px h-32-px bg-primary-light text-primary-600 rounded-circle d-inline-flex align-items-center justify-content-center">
                    <Icon icon="iconamoon:eye-light" />
                  </router-link>
                  <router-link :to="`/users/${item.id}/edit`"
                               class="w-32-px h-32-px bg-success-focus text-success-main rounded-circle d-inline-flex align-items-center justify-content-center">
                    <Icon icon="lucide:edit" />
                  </router-link>
                  <a
                    @click="removeItem(item.id)"
                    class="w-32-px h-32-px bg-danger-focus text-danger-main rounded-circle d-inline-flex align-items-center justify-content-center">
                    <Icon icon="mingcute:delete-2-line" />
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

const users = ref([])
const filter = ref({
  name: '',
  page: 0,
  size: 10
})

const sort = ref({
  orderBy: '',
  order: ''
})

const data = async () => {
  await api.get('/admin/staff')
    .then((res) => {
      users.value = res.data.items
    })
    .catch((e) => {
      console.log(e, e.response, e.request)
    })
}

function sortCustom(arr, key, order = "asc") {
  return arr.sort((a, b) => {
    const va = a[key] ?? "";
    const vb = b[key] ?? "";

    const getCategory = (str) => {
      if (/^[A-Za-z]/.test(str)) return 1; // латиница
      if (/^[А-Яа-яЁё]/.test(str)) return 2; // кириллица
      if (/^\d/.test(str)) return 3; // числа
      return 4; // пустые или прочее
    };

    const ca = getCategory(va);
    const cb = getCategory(vb);

    if (ca !== cb) return ca - cb;

    // Внутри категории сортировка по order
    const result = va?.toString()?.toLowerCase().localeCompare(vb, undefined, { numeric: true });

    return order === "desc" ? -result : result;
  });
}

const filterList = computed(() => {
  // let list = users.value.filter((e) => e.fullname.toLowerCase().indexOf(filter.value.name) > -1)
  let list = users.value
  if (filter.value.name) {
    list = users.value.filter((e) =>
      e.full_name.toLowerCase().indexOf(filter.value.name) > -1 ||
      e.phone?.toLowerCase()?.indexOf(filter.value.name) > -1 ||
      e.instagram_username?.toLowerCase()?.indexOf(filter.value.name) > -1
    )
  }
  if (sort.value.orderBy) {
    list = sortCustom([...list], sort.value.orderBy, sort.value.order)
  }
  return list
})

const paginateList = computed(() => filterList.value)

const changePaginateHandler = (e) => {
  filter.value.page = e - 1
}
const removeItem = (id) => {
  Swal.fire({
    title: "Удалить?",
    text: 'Внимание, процесс не обратим',
    showDenyButton: true,
    confirmButtonText: "Удалить",
    denyButtonText: `Отмена`
  }).then(async (result) => {
    /* Read more about isConfirmed, isDenied below */
    if (result.isConfirmed) {
      await api.delete(`/admin/staff/${id}`)
      await data()
    } else if (result.isDenied) {

    }
  });
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

onMounted(() => {
  data()
})

</script>

<style scoped>
.page-bottom {
  height: 45px;
}
</style>