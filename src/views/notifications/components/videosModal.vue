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
                  <label class="form-label fw-semibold text-primary-light text-sm mb-8">Название</label>
                  <input v-model="formData.title" type="text" class="form-control radius-8" placeholder="Введите название">
                </div>
                <div class="col-12 mb-20">
                  <label class="form-label fw-semibold text-primary-light text-sm mb-8">Видео ссылка</label>
                  <input v-model="formData.video_link" type="text" class="form-control radius-8" placeholder="Введите ссылку">
                </div>
                <div class="col-12 mb-20">
                  <label class="form-label fw-semibold text-primary-light text-sm mb-8">Задание</label>
                  <textarea v-model="formData.task_text" type="text" class="form-control radius-8" placeholder="Введите ссылку"></textarea>
                </div>
                <div class="col-12 mb-20">
                  <label class="form-label fw-semibold text-primary-light text-sm mb-8">Дни оплаты</label>
                  <input v-model="formData.due_days" type="number" class="form-control radius-8">
                </div>
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
import {onMounted, ref} from 'vue'
import api from '../../../utils/api.js'
import {useToast} from 'vue-toastification'

const props = defineProps({
  modalData: {
    type: Object || null
  }
})
const emit = defineEmits(['closeModal'])

const title = props.modalData ? 'Редактировать видео' : 'Создать видео уведомление'

const formData = ref({
  title: '',
  video_link: '',
  task_text: '',
  due_days: ''
})

const toast = useToast()

const getData = async () => {
  formData.value = props.modalData
  formData.value.start_time = props.modalData?.start_time?.slice(0, 10)
  // await api.get(`/curator/broadcast/live/${props.modalData?.id}`)
  //   .then((res) => {
  //     formData.value = res.data?.data
  //   })
}

const closeModal = (save) => {
  emit('closeModal', save)
}

const saveModal = async () => {
  await api.post('/curator/tasks/video', formData.value)
    .then((res) => {
      toast.success('Успешно!')
      closeModal(true)
    })
}

const editModal = async () => {
  await api.put(`/curator/tasks/video/${props.modalData?.id}`, formData.value)
    .then((res) => {
      toast.success('Успешно!')
      closeModal(true)
    })
}

onMounted(() => {
  if (props.modalData) {
    getData()
  }
})

</script>

<style scoped>

</style>
