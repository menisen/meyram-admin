<template>
  <div class="d-flex flex-wrap align-items-center justify-content-between gap-3 mb-24">
    <h6 class="fw-semibold mb-0">Switch</h6>
    <ul class="d-flex align-items-center gap-2">
      <li class="fw-medium">
        <a href="index.html" class="d-flex align-items-center gap-1 hover-text-primary">
          <Icon icon="solar:home-smile-angle-outline" class="icon text-lg"></Icon>
          Dashboard
        </a>
      </li>
      <li>-</li>
      <li class="fw-medium">Components / Switch</li>
    </ul>
  </div>
  <div class="row gy-4">
    <div class="col-lg-6">
      <div class="card h-100 p-0">
        <div class="card-header border-bottom bg-base py-16 px-24">
          <h6 class="text-lg fw-semibold mb-0">Default Switch</h6>
        </div>
        <div class="card-body p-24">
          <div class="d-flex align-items-center flex-wrap gap-28">
            <iSwitch
              :items="genders"
              v-model="gender"
              class="switch-primary gap-3"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="col-lg-6">
      <div class="card h-100 p-0">
        <div class="card-header border-bottom bg-base py-16 px-24">
          <h6 class="text-lg fw-semibold mb-0">Switch Disable</h6>
        </div>
        <div class="card-body p-24">
          <div class="d-flex align-items-center flex-wrap gap-28">
            <div class="form-switch switch-primary d-flex align-items-center gap-3">
              <input class="form-check-input" type="checkbox" role="switch" id="switch111" checked="" disabled="">
              <label class="form-check-label line-height-1 fw-medium text-secondary-light" for="switch111">Switch Active</label>
            </div>
            <div class="form-switch switch-purple d-flex align-items-center gap-3">
              <input class="form-check-input" type="checkbox" role="switch" id="switch222" checked="" disabled="">
              <label class="form-check-label line-height-1 fw-medium text-secondary-light" for="switch222">Switch Active</label>
            </div>
            <div class="form-switch switch-success d-flex align-items-center gap-3">
              <input class="form-check-input" type="checkbox" role="switch" id="switch333" checked="" disabled="">
              <label class="form-check-label line-height-1 fw-medium text-secondary-light" for="switch333">Switch Active</label>
            </div>
            <div class="form-switch switch-warning d-flex align-items-center gap-3">
              <input class="form-check-input" type="checkbox" role="switch" id="switch444" checked="" disabled="">
              <label class="form-check-label line-height-1 fw-medium text-secondary-light" for="switch444">Switch Active</label>
            </div>
          </div>
          <div class="d-flex align-items-center flex-wrap gap-28 mt-24">
            <div class="form-switch switch-primary d-flex align-items-center gap-3">
              <input class="form-check-input" type="checkbox" role="switch" id="switch10" disabled="">
              <label class="form-check-label line-height-1 fw-medium text-secondary-light" for="switch10">Switch Inactive</label>
            </div>
            <div class="form-switch switch-purple d-flex align-items-center gap-3">
              <input class="form-check-input" type="checkbox" role="switch" id="switch20" disabled="">
              <label class="form-check-label line-height-1 fw-medium text-secondary-light" for="switch20">Switch Inactive</label>
            </div>
            <div class="form-switch switch-success d-flex align-items-center gap-3">
              <input class="form-check-input" type="checkbox" role="switch" id="switch30" disabled="">
              <label class="form-check-label line-height-1 fw-medium text-secondary-light" for="switch30">Switch Inactive</label>
            </div>
            <div class="form-switch switch-warning d-flex align-items-center gap-3">
              <input class="form-check-input" type="checkbox" role="switch" id="switch40" disabled="">
              <label class="form-check-label line-height-1 fw-medium text-secondary-light" for="switch40">Switch Inactive</label>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-lg-6">
      <div class="card h-100 p-0">
        <div class="card-header border-bottom bg-base py-16 px-24">
          <h6 class="text-lg fw-semibold mb-0">Switch With Tex</h6>
        </div>
        <div class="card-body p-24">
          <div class="d-flex align-items-center flex-wrap gap-28">
            <div class="form-switch switch-primary d-flex align-items-center gap-3">
              <input class="form-check-input" type="checkbox" role="switch" id="yes" checked="">
              <label class="form-check-label line-height-1 fw-medium text-secondary-light" for="yes">Yes</label>
            </div>
            <div class="form-switch switch-primary d-flex align-items-center gap-3">
              <input class="form-check-input" type="checkbox" role="switch" id="no">
              <label class="form-check-label line-height-1 fw-medium text-secondary-light" for="no">No</label>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-lg-6">
      <div class="card h-100 p-0">
        <div class="card-header border-bottom bg-base py-16 px-24">
          <h6 class="text-lg fw-semibold mb-0">Switch Horizontal</h6>
        </div>
        <div class="card-body p-24">
          <div class="d-flex align-items-center flex-wrap gap-28">
            <div class="form-switch switch-primary d-flex align-items-center gap-3">
              <input class="form-check-input" type="checkbox" role="switch" id="horizontal1">
              <label class="form-check-label line-height-1 fw-medium text-secondary-light" for="horizontal1">Horizontal 1</label>
            </div>
            <div class="form-switch switch-purple d-flex align-items-center gap-3">
              <input class="form-check-input" type="checkbox" role="switch" id="horizontal2">
              <label class="form-check-label line-height-1 fw-medium text-secondary-light" for="horizontal2">Horizontal 2</label>
            </div>
            <div class="form-switch switch-success d-flex align-items-center gap-3">
              <input class="form-check-input" type="checkbox" role="switch" id="horizontal3">
              <label class="form-check-label line-height-1 fw-medium text-secondary-light" for="horizontal3">Horizontal 3</label>
            </div>
            <div class="form-switch switch-warning d-flex align-items-center gap-3">
              <input class="form-check-input" type="checkbox" role="switch" id="horizontal4">
              <label class="form-check-label line-height-1 fw-medium text-secondary-light" for="horizontal4">Horizontal 4</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import iSwitch from '../../ui/iSwitch.vue'
import {ref} from 'vue'
import { Icon } from '@iconify/vue'

const genders = [
  {value: "male", label: "Мужской"},
  {value: "female", label: "Женский"}
]

const gender = ref(null)
</script>

<style scoped>

</style>
