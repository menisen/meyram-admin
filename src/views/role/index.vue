<template>
  <div class="d-flex flex-wrap align-items-center justify-content-between gap-3 mb-24">
    <h6 class="fw-semibold mb-0">Роли</h6>
    <ul class="d-flex align-items-center gap-2">
      <li class="fw-medium">
        <router-link to="/" class="d-flex align-items-center gap-1 hover-text-primary">
          <Icon icon="solar:home-smile-angle-outline" class="icon text-lg"></Icon>
          Главная
        </router-link>
      </li>
      <li>-</li>
      <li class="fw-medium">Роли</li>
    </ul>
  </div>
  <div class="card h-100 p-0 radius-12">
    <div class="card-body p-24">
      <div class="table-responsive scroll-sm">
        <table class="table bordered-table sm-table mb-0">
          <thead>
          <tr>
            <th scope="col">
              ID
            </th>
            <th scope="col">Название</th>
            <th scope="col" class="text-center">Действие</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td>
              <div class="d-flex align-items-center gap-10">
                01
              </div>
            </td>
            <td>Test</td>
            <td class="text-center">
<!--              <div class="d-flex align-items-center gap-10 justify-content-center">-->
<!--                <button type="button" class="bg-success-focus text-success-600 bg-hover-success-200 fw-medium w-40-px h-40-px d-flex justify-content-center align-items-center rounded-circle">-->
<!--                  <Icon icon="lucide:edit" class="menu-icon"></Icon>-->
<!--                </button>-->
<!--                <button type="button" class="remove-item-btn bg-danger-focus bg-hover-danger-200 text-danger-600 fw-medium w-40-px h-40-px d-flex justify-content-center align-items-center rounded-circle">-->
<!--                  <Icon icon="fluent:delete-24-regular" class="menu-icon"></Icon>-->
<!--                </button>-->
<!--              </div>-->
            </td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Icon } from '@iconify/vue'

</script>

<style scoped>

</style>