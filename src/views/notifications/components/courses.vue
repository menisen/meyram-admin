<template>
  <div class="card basic-data-table">
    <div
      class="card-header border-bottom bg-base py-16 px-24">
      <div class="d-flex align-items-center justify-content-between flex-wrap gap-3">
        <!--        <span class="text-md fw-medium text-secondary-light mb-0">Список единицы измерения</span>-->
        <!--        <form @submit.prevent class="navbar-search">-->
        <!--          <input v-model="filter.name" @input="filterNameHandler" type="text" class="bg-base h-40-px w-full"-->
        <!--                 name="search" placeholder="Поиск по наименованию">-->
        <!--          <Icon icon="ion:search-outline" class="icon"/>-->
        <!--        </form>-->
      </div>
      <div class="d-flex align-items-center">
        <a
          class="btn btn-primary text-sm btn-sm px-12 py-12 radius-8 d-flex align-items-center gap-2"
          @click="openModal()"
        >
          <Icon icon="ic:baseline-plus" class="icon text-xl line-height-1"/>
          Отправить всем урок
        </a>
      </div>
    </div>
    <div class="card-body">
      <div v-show="showFilters" class="filter">
        <div class="row">
          <div class="col-sm-3">
            <div class="mb-20">
              <label for="tariffs" class="form-label fw-semibold text-primary-light text-sm mb-8">Активен</label>
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
                  aria-label="Code"
                  tabindex="0"
                  @click="sortBy('id')"
                >
                  <span class="dt-column-title" role="button">
                    <div class="form-check style-check d-flex align-items-center">
                      <label class="form-check-label">
                        #
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
                    'dt-ordering-asc': sort.orderBy === 'title' && sort.order === 'asc',
                    'dt-ordering-desc': sort.orderBy === 'title' && sort.order === 'desc'
                  }"
                  aria-sort="ascending"
                  aria-label="Name"
                  tabindex="1"
                  @click="sortBy('title')"
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
                <td>{{ item.title }}</td>
                <td @click.stop>
                  <div class="d-flex align-items-center gap-10">
                    <a
                      @click="openModal(item)"
                      class="bg-success-focus text-success-600 bg-hover-success-200 fw-medium w-40-px h-40-px d-flex justify-content-center align-items-center rounded-circle"
                    >
                      <Icon icon="lucide:edit" />
                    </a>
                    <a
                      @click="removeChild(item.id)"
                      class="cursor-pointer remove-item-btn bg-danger-focus bg-hover-danger-200 text-danger-600 fw-medium w-40-px h-40-px d-flex justify-content-center align-items-center rounded-circle">
                      <Icon icon="mingcute:delete-2-line" />
                    </a>
                  </div>
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
          <span>Показано с {{ (filter.page) * filter.size + 1 }} по {{ (filter.page + 1) * filter.size }} из {{ Math.ceil(filterList.length / filter.size) }} записей</span>
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

    <ModalBlock
      v-if="modal"
      :modalData="modalData"
      @closeModal="closeModal"
    />
  </div>
</template>

<script setup>
import {computed, onMounted, ref} from 'vue'
import api from '../../../utils/api.js'
import Paginate from 'vuejs-paginate-next'
import Swal from 'sweetalert2'
import { Icon } from '@iconify/vue'
import ModalBlock from './coursesModal.vue'


const data = ref([])
const filter = ref({
  name: '',
  page: 0,
  size: 10
})
const modal = ref(false)
const modalData = ref(null)

const sort = ref({
  orderBy: '',
  order: ''
})
const showFilters = ref(false)

const getData = async () => {
  await api.get('/user/tasks/library')
    .then((res) => {
      data.value = res.data.data
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
  let list = data.value
  if (filter.value.name) {
    list = data.value.filter((e) =>
      e.name.toLowerCase().indexOf(filter.value.name) > -1 ||
      e.code?.toLowerCase()?.indexOf(filter.value.name) > -1
    )
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
      await api.delete(`/curator/tasks/library/${id}`)
      await getData()
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

const openModal = (data) => {
  if (data) {
    modalData.value = data
  }
  modal.value = true
}
const closeModal = (isSave) => {
  modal.value = false
  modalData.value = null
  if (isSave) {
    getData()
  }
}

onMounted(() => {
  getData()
})
</script>