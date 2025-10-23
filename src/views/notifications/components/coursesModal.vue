<template>
  <div>
    <div
      class="modal fade show"
      id="exampleModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-modal="true"
      role="dialog"
      style="display: block;"
      @click="closeModal()"
    >
      <div @click.stop class="modal-dialog modal modal-dialog modal-dialog-centered">
        <div class="modal-content radius-16 bg-base">
          <div class="modal-header py-16 px-24 border border-top-0 border-start-0 border-end-0">
            <h1 class="modal-title fs-5" id="exampleModalLabel">{{ title }}</h1>
            <button @click="closeModal()" type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body p-24">
            <form @submit.prevent>
              <div class="row">
                <div class="col-12 mb-20">
                  <label class="form-label fw-semibold text-primary-light text-sm mb-8">Категория</label>
                  <multiselect
                    placeholder="Все"
                    deselectLabel="Нажмите чтобы удалить"
                    selectedLabel="Выбран"
                    selectLabel="Нажмите чтобы выбрать"
                    v-model="formData.category"
                    :options="categories"
                  ></multiselect>
                </div>
                <div class="col-12 mb-20">
                  <label class="form-label fw-semibold text-primary-light text-sm mb-8">Урок</label>
                  <multiselect
                    placeholder="Все"
                    label="title"
                    deselectLabel="Нажмите чтобы удалить"
                    selectedLabel="Выбран"
                    selectLabel="Нажмите чтобы выбрать"
                    v-model="formData.id"
                    :options="lessonsList"
                  ></multiselect>
                </div>

                <template v-if="formData.id">
                  <div class="col-12 mb-20">
                    <label class="form-label fw-semibold text-primary-light text-sm mb-8">Название</label>
                    <input disabled v-model="formData.id.title" type="text" class="form-control radius-8" placeholder="Введите название">
                  </div>
                  <div class="col-12 mb-20">
                    <label class="form-label fw-semibold text-primary-light text-sm mb-8">Ссылка</label>
                    <input disabled v-model="formData.id.link" type="text" class="form-control radius-8" placeholder="Введите название">
                  </div>
                  <div class="col-12 mb-20">
                    <label class="form-label fw-semibold text-primary-light text-sm mb-8">Описание</label>
                    <textarea disabled v-model="formData.id.description" type="text" class="form-control radius-8" placeholder="Введите ссылку"></textarea>
                  </div>
                </template>

                <div class="d-flex align-items-center justify-content-center gap-3 mt-24">
                  <button @click="closeModal" type="reset" class="border border-danger-600 bg-hover-danger-200 text-danger-600 text-md px-40 py-11 radius-8">
                    Отменить
                  </button>
                  <button @click="editModal()" v-if="modalData" type="submit" class="btn btn-primary border border-primary-600 text-md px-48 py-12 radius-8">
                    Сохранить
                  </button>
                  <button @click="saveModal()" v-else type="submit" class="btn btn-primary border border-primary-600 text-md px-48 py-12 radius-8">
                    Добавить
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>

    <div class="modal-backdrop show fade"></div>
  </div>
</template>

<script setup>
import {computed, onMounted, ref} from 'vue'
import api from '../../../utils/api.js'
import {useToast} from 'vue-toastification'
import Multiselect from 'vue-multiselect'

const props = defineProps({
  modalData: {
    type: Object || null
  }
})
const emit = defineEmits(['closeModal'])

const title = props.modalData ? 'Редактировать видео' : 'Отправить всем урок'

const formData = ref({
  id: '',
  category: ''
})
const lessons = ref([])
const categories = ref([])

const toast = useToast()

const lessonsList = computed(() => {
  let list = lessons.value
  if (formData.value.category) {
    list = lessons.value.filter((e) => e.category === formData.value.category)
  }
  return list
})

const getData = async () => {
  console.log(props.modalData)
  await api.get(`/library/resources`)
    .then((res) => {
      lessons.value = res.data?.data

      categories.value = [...new Set(res.data?.data?.map(item => item.category))]
    })
  if (props.modalData) {
    const data = lessons.value.find(e => e.title === props.modalData?.title)
    formData.value.id = data
    formData.value.category = data.category

  }
}

const closeModal = (save) => {
  emit('closeModal', save)
}

const saveModal = async () => {
  await api.post('/curator/tasks/library-send', {
    resource_id: formData.value.id?.id,
    link: formData.value.id?.link,
    title: formData.value.id?.title,
    description: formData.value.id?.description,
    category: formData.value.id?.category,
  })
    .then((res) => {
      toast.success('Успешно!')
      closeModal(true)
    })
}

const editModal = async () => {
  await api.put(`/curator/tasks/library/${formData.value.id?.id}`, {
    resource_id: formData.value.id?.id,
    link: formData.value.id?.link,
    title: formData.value.id?.title,
    description: formData.value.id?.description,
    category: formData.value.id?.category,
  })
    .then((res) => {
      toast.success('Успешно!')
      closeModal(true)
    })
}

onMounted(() => {
  getData()
})

</script>

<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
<style scoped>

</style>
