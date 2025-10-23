<template>
  <div class="row gy-4">
    <div class="col-xxl-3">
      <div class="card h-100 p-0">
        <div class="card-body p-24">
          <h6 class="fw-semibold mb-24 d-flex align-items-center">
            <!--            <Icon icon="icon-park-outline:setting-two" class="icon text-lg line-height-1 mr-4"></Icon>-->
            <span class="px-6">Уведомление</span>
          </h6>
          <!--          <button type="button" class="btn btn-primary text-sm btn-sm px-12 py-12 w-100 radius-8 d-flex align-items-center gap-2 mb-16" data-bs-toggle="modal" data-bs-target="#exampleModal">-->
          <!--            <Icon icon="fa6-regular:square-plus" class="icon text-lg line-height-1"></Icon>-->
          <!--            Профиль компании-->
          <!--          </button>-->

          <div class="mt-16">
            <ul>
<!--              <li :class="{'item-active': route.params.name === 'videos'}" class="mb-4">-->
<!--                <router-link to="/notifications/videos" class="bg-hover-primary-50 px-12 py-8 w-100 radius-8 text-secondary-light">-->
<!--                  <span class="d-flex align-items-center gap-10 justify-content-between w-100">-->
<!--                    <span class="d-flex align-items-center gap-10">-->
<!--&lt;!&ndash;                      <span class="icon text-xxl line-height-1 d-flex">&ndash;&gt;-->
<!--                      &lt;!&ndash;                        <Icon icon="ph:star-bold" class="icon line-height-1"></Icon>&ndash;&gt;-->
<!--                      &lt;!&ndash;                      </span>&ndash;&gt;-->
<!--                      <span class="fw-semibold">Видео</span>-->
<!--                    </span>-->
<!--                    &lt;!&ndash;                      <span class="fw-medium">250</span>&ndash;&gt;-->
<!--                  </span>-->
<!--                </router-link>-->
<!--              </li>-->
              <li :class="{'item-active': route.params.name === 'courses'}" class="mb-4">
                <router-link to="/notifications/courses" class="bg-hover-primary-50 px-12 py-8 w-100 radius-8 text-secondary-light">
                  <span class="d-flex align-items-center gap-10 justify-content-between w-100">
                    <span class="d-flex align-items-center gap-10">
<!--                      <span class="icon text-xxl line-height-1 d-flex">-->
                      <!--                        <Icon icon="ph:star-bold" class="icon line-height-1"></Icon>-->
                      <!--                      </span>-->
                      <span class="fw-semibold">Уроки</span>
                    </span>
                    <!--                      <span class="fw-medium">250</span>-->
                  </span>
                </router-link>
              </li>
              <li :class="{'item-active': route.params.name === 'lives'}" class="mb-4">
                <router-link to="/notifications/lives" class="bg-hover-primary-50 px-12 py-8 w-100 radius-8 text-secondary-light">
                  <span class="d-flex align-items-center gap-10 justify-content-between w-100">
                    <span class="d-flex align-items-center gap-10">
<!--                      <span class="icon text-xxl line-height-1 d-flex">-->
                      <!--                        <Icon icon="ph:star-bold" class="icon line-height-1"></Icon>-->
                      <!--                      </span>-->
                      <span class="fw-semibold">Эфир</span>
                    </span>
                    <!--                      <span class="fw-medium">250</span>-->
                  </span>
                </router-link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="col-xxl-9">
      <component :is="layout" />
    </div>
  </div>
</template>

<script setup>
import {computed, defineAsyncComponent} from 'vue'
import {useRoute} from 'vue-router'

const mapTypeComponents = {
  videos: defineAsyncComponent(() =>
    import('./components/videos.vue')
  ),
  lives: defineAsyncComponent(() =>
    import('./components/lives.vue')
  ),
  courses: defineAsyncComponent(() =>
    import('./components/courses.vue')
  ),
}


const route = useRoute()
const layout = computed(() => mapTypeComponents[route.params.name])

</script>

<style scoped>
</style>
