<template>
  <div class="main">
    <component :is="layout" />
  </div>
</template>

<script setup>
import { computed, defineAsyncComponent } from 'vue'
import { useRoute } from 'vue-router'

const mapTypeComponents = {
  default: defineAsyncComponent(() =>
    import('./layout/default.vue')
  ),
  auth: defineAsyncComponent(() =>
    import('./layout/auth.vue')
  ),
}

const route = useRoute()
const layout = computed(() => mapTypeComponents[route.meta.layout])
</script>

<style scoped>

</style>
