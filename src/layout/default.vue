<template>
  <div class="default flex">
    <aside class="sidebar " :class="{'active': !showMenu, 'sidebar-open': showMobileMenu}">
      <button @click="toggleMobileMenu()" type="button" class="sidebar-close-btn">
        <Icon icon="radix-icons:cross-2"></Icon>
      </button>
      <div>
        <a href="/" class="sidebar-logo">
          <img src="@/assets/images/logo.png" alt="site logo"
               class="light-logo">
          <img src="@/assets/images/logo.png" alt="site logo"
               class="logo-icon">
<!--          <img src="@/assets/images/logo-light.png" alt="site logo"-->
<!--               class="dark-logo">-->
<!--          <img src="@/assets/images/logo-icon.png" alt="site logo"-->
<!--               class="logo-icon">-->
        </a>
      </div>
      <div class="sidebar-menu-area open">
        <ul @click="toggleMobileMenu(true)" class="sidebar-menu show" id="sidebar-menu">
          <li class="">
            <router-link to="/" class="cursor-pointer" :class="{'active-page': route.name === 'home'}">
              <Icon icon="solar:home-smile-angle-outline" class="menu-icon"></Icon>
              <span>Главная</span>
            </router-link>
          </li>
          <li v-if="role === 'admin'" class="">
            <router-link to="/users" class=" cursor-pointer" :class="{'active-page': route.path?.includes('users')}">
              <Icon icon="solar:user-outline" class="menu-icon"></Icon>
              <span>Сотрудники</span>
            </router-link>
          </li>
          <li v-if="role === 'admin'" class="">
            <router-link to="/courses" class=" cursor-pointer" :class="{'active-page': route.path?.includes('courses')}">
              <Icon icon="hugeicons:course" class="menu-icon"></Icon>
              <span>Уроки</span>
            </router-link>
          </li>
          <li v-if="role === 'admin'" class="">
            <router-link to="/lives" class=" cursor-pointer" :class="{'active-page': route.path?.includes('lives')}">
              <Icon icon="mingcute:live-line" class="menu-icon"></Icon>
              <span>Эфир</span>
            </router-link>
          </li>
          <li class="">
            <router-link to="/children" class=" cursor-pointer" :class="{'active-page': route.path?.includes('children')}">
              <Icon icon="hugeicons:child" class="menu-icon"></Icon>
              <span>Участники</span>
            </router-link>
          </li>
          <li class="">
            <router-link to="/rating" class=" cursor-pointer" :class="{'active-page': route.path?.includes('rating')}">
              <Icon icon="streamline-ultimate:human-resources-rating-woman-bold" class="menu-icon"></Icon>
              <span>Рейтинг</span>
            </router-link>
          </li>
          <li class="">
            <router-link to="/clan" class=" cursor-pointer" :class="{'active-page': route.path?.includes('clan')}">
              <Icon icon="arcticons:clash-of-clans" class="menu-icon"></Icon>
              <span>Клан</span>
            </router-link>
          </li>
          <li class="">
            <router-link to="/news" class=" cursor-pointer" :class="{'active-page': route.path?.includes('news')}">
              <Icon icon="material-symbols:news" class="menu-icon"></Icon>
              <span>Кино</span>
            </router-link>
          </li>
          <li class="">
            <router-link to="/projects" class=" cursor-pointer" :class="{'active-page': route.path?.includes('projects')}">
              <Icon icon="carbon:ibm-cloud-projects" class="menu-icon"></Icon>
              <span>События</span>
            </router-link>
          </li>
<!--          <li class="">-->
<!--            <router-link to="/notifications/courses" class=" cursor-pointer" :class="{'active-page': route.path?.includes('notifications')}">-->
<!--              <Icon icon="ant-design:notification-filled" class="menu-icon"></Icon>-->
<!--              <span>Уведомления</span>-->
<!--            </router-link>-->
<!--          </li>-->
<!--          <li class="">-->
<!--            <router-link to="/role" class=" cursor-pointer" :class="{'active-page': route.name === 'role'}">-->
<!--              <Icon icon="solar:chart-2-bold" class="menu-icon"></Icon>-->
<!--              <span>Роли</span>-->
<!--            </router-link>-->
<!--          </li>-->
        </ul>
      </div>
    </aside>
    <div class="dashboard-main" :class="{'active': !showMenu}">
      <div class="navbar-header">
        <div class="row align-items-center justify-content-between">
          <div class="col-auto">
            <div class="d-flex flex-wrap align-items-center gap-4">
              <button @click="toggleMenu()" type="button" class="sidebar-toggle" :class="{'active': !showMenu}">
                <Icon icon="heroicons:bars-3-solid" class="icon text-2xl non-active"></Icon>
                <Icon icon="iconoir:arrow-right" class="icon text-2xl active"></Icon>
              </button>
              <button @click="toggleMobileMenu()" type="button" class="sidebar-mobile-toggle">
                <Icon icon="heroicons:bars-3-solid" class="icon"></Icon>
              </button>
            </div>
          </div>
          <div class="col-auto">
            <div class="d-flex flex-wrap align-items-center gap-3">

              <div class="dropdown">
                <button
                  class="d-flex justify-content-center align-items-center rounded-circle"
                  type="button"
                  data-bs-toggle="dropdown"
                  :class="{show: showProfile}"
                  @click="toggleProfile()"
                >
                  <img src="@/assets/images/user.png" alt="image"
                       class="w-40-px h-40-px object-fit-cover rounded-circle">
                </button>
                <div class="dropdown-menu to-top dropdown-menu-sm" :class="{show: showProfile}">
                  <div v-if="profile" class="py-12 px-16 radius-8 bg-primary-50 mb-16 d-flex align-items-center justify-content-between gap-2">
                    <div>
                      <h6 class="text-lg text-primary-light fw-semibold mb-2">{{ profile.name }}</h6>
                      <span class="text-secondary-light fw-medium text-sm">{{ role }}</span>
                    </div>
<!--                    <button type="button" class="hover-text-danger">-->
<!--                      <Icon icon="radix-icons:cross-1" class="icon text-xl"></Icon>-->
<!--                    </button>-->
                  </div>
                  <ul class="to-top-list">
                    <li>
                      <a
                        class="dropdown-item text-black px-0 py-8 hover-bg-transparent hover-text-primary d-flex align-items-center gap-3"
                        >
                        <Icon icon="solar:user-linear" class="icon text-xl"></Icon>
                        Профиль</a>
                    </li>
                    <li>
                      <a
                        @click="logout()"
                        class="dropdown-item text-black px-0 py-8 hover-bg-transparent hover-text-danger d-flex align-items-center gap-3"
                        >
                        <Icon icon="lucide:power" class="icon text-xl"></Icon>
                        Выход</a>
                    </li>
                  </ul>
                </div>
              </div><!-- Profile dropdown end -->
            </div>
          </div>
        </div>
        <div @click="toggleMobileMenu()" v-if="showMobileMenu" class="modal-backdrop fade show">

        </div>
      </div>
      <div class="dashboard-main-body">
        <router-view/>
      </div>
    </div>
  </div>
</template>


<script setup>
import {useRoute, useRouter} from 'vue-router'
import {onMounted, ref} from 'vue'
import Cookies from 'js-cookie'
import { Icon } from '@iconify/vue'
import api from '@/utils/api.js'

const route = useRoute()
const router = useRouter()

const showMenu = ref(true)
const showMobileMenu = ref(false)
const showProfile = ref(false)
const role = Cookies.get('admin-meyram-role')
const profile = ref(null)

const toggleMenu = () => {
  showMenu.value = !showMenu.value
}
const toggleMobileMenu = (close) => {
  if (close) {
    showMobileMenu.value = false
  } else {
    showMobileMenu.value = !showMobileMenu.value
  }
}
const toggleProfile = () => {
  showProfile.value = !showProfile.value
}

const logout = () => {
  Cookies.remove('admin-meyram-role')
  Cookies.remove('admin-meyram-token')
  Cookies.remove('admin-meyram-profile-id')
  Cookies.remove('admin-meyram-uid')
  router.push('/auth/signin')
}

const data = async () => {
  if (Cookies.get('admin-meyram-uid')) {
    await api.get(`/users/profile?uid=${Cookies.get('admin-meyram-uid')}`)
      .then((res) => {
        profile.value = res.data?.data
      })
      .catch((e) => {
        console.log(e, e.response, e.request)
      })
  } else {
    logout()
  }
}


onMounted(() => {
  data()
})

</script>


<style scoped>
.dropdown-menu.show {
  position: absolute;
  inset: 0px 0px auto auto;
  margin: 0px;
  transform: translate3d(0px, 42px, 0px);
}
</style>