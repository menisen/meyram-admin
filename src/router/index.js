import { createRouter, createWebHistory } from 'vue-router'
import Cookies from 'js-cookie'

const hasToken = (to, from, next) => {
  let auth = Cookies.get('admin-meyram-token')
  if(auth) next()
  else if(to.path !== '/auth/signin') next('/auth/signin')
}

const routes = [
  {
    path: '/',
    name: 'home',
    meta: {
      layout: 'default'
    },
    component: () => import(/* webpackChunkName: "tournaments" */ '../views/home/index.vue'),
  },
  {
    path: '/role',
    name: 'role',
    meta: {
      layout: 'default'
    },
    component: () => import(/* webpackChunkName: "role" */ '../views/role/index.vue'),
    beforeEnter: hasToken
  },
  {
    path: '/users',
    name: 'users',
    meta: {
      layout: 'default'
    },
    component: () => import(/* webpackChunkName: "users" */ '../views/users/index.vue'),
    beforeEnter: hasToken
  },
  {
    path: '/users/add',
    name: 'users-add',
    meta: {
      layout: 'default'
    },
    component: () => import(/* webpackChunkName: "users-add" */ '../views/users/add.vue'),
    beforeEnter: hasToken
  },
  {
    path: '/users/:id/:name',
    name: 'users-show',
    meta: {
      layout: 'default'
    },
    component: () => import(/* webpackChunkName: "users-show" */ '../views/users/show.vue'),
    beforeEnter: hasToken
  },
  {
    path: '/children',
    name: 'children',
    meta: {
      layout: 'default'
    },
    component: () => import(/* webpackChunkName: "children" */ '../views/children/index.vue'),
    beforeEnter: hasToken
  },
  {
    path: '/children/add',
    name: 'children-add',
    meta: {
      layout: 'default'
    },
    component: () => import(/* webpackChunkName: "children-add" */ '../views/children/add.vue'),
    beforeEnter: hasToken
  },
  {
    path: '/children/:id/:name',
    name: 'children-show',
    meta: {
      layout: 'default'
    },
    component: () => import(/* webpackChunkName: "children-show" */ '../views/children/show.vue'),
    beforeEnter: hasToken
  },
  {
    path: '/rating',
    name: 'rating',
    meta: {
      layout: 'default'
    },
    component: () => import(/* webpackChunkName: "rating" */ '../views/rating/index.vue'),
    beforeEnter: hasToken
  },
  {
    path: '/clan',
    name: 'clan',
    meta: {
      layout: 'default'
    },
    component: () => import(/* webpackChunkName: "clan" */ '../views/clan/index.vue'),
    beforeEnter: hasToken
  },
  {
    path: '/clan/add',
    name: 'clan-add',
    meta: {
      layout: 'default'
    },
    component: () => import(/* webpackChunkName: "clan-add" */ '../views/clan/add.vue'),
    beforeEnter: hasToken
  },
  {
    path: '/clan/:id/:name',
    name: 'clan-show',
    meta: {
      layout: 'default'
    },
    component: () => import(/* webpackChunkName: "clan-show" */ '../views/clan/show.vue'),
    beforeEnter: hasToken
  },
  {
    path: '/news',
    name: 'news',
    meta: {
      layout: 'default'
    },
    component: () => import(/* webpackChunkName: "news" */ '../views/news/index.vue'),
    beforeEnter: hasToken
  },
  {
    path: '/projects',
    name: 'projects',
    meta: {
      layout: 'default'
    },
    component: () => import(/* webpackChunkName: "projects" */ '../views/projects/index.vue'),
    beforeEnter: hasToken
  },
  {
    path: '/projects/:id/:name',
    name: 'projects-show',
    meta: {
      layout: 'default'
    },
    component: () => import(/* webpackChunkName: "projects-show" */ '../views/projects/show.vue'),
    beforeEnter: hasToken
  },
  {
    path: '/notifications/:name',
    name: 'notifications',
    meta: {
      layout: 'default'
    },
    component: () => import(/* webpackChunkName: "notifications" */ '../views/notifications/index.vue'),
    beforeEnter: hasToken
  },
  {
    path: '/news',
    name: 'news',
    meta: {
      layout: 'default'
    },
    component: () => import(/* webpackChunkName: "news" */ '../views/news/index.vue'),
    beforeEnter: hasToken
  },
  {
    path: '/news/add',
    name: 'news-add',
    meta: {
      layout: 'default'
    },
    component: () => import(/* webpackChunkName: "news-add" */ '../views/news/add.vue'),
    beforeEnter: hasToken
  },
  {
    path: '/news/:id/:name',
    name: 'news-show',
    meta: {
      layout: 'default'
    },
    component: () => import(/* webpackChunkName: "news-show" */ '../views/news/show.vue'),
    beforeEnter: hasToken
  },
  {
    path: '/courses',
    name: 'courses',
    meta: {
      layout: 'default'
    },
    component: () => import(/* webpackChunkName: "courses" */ '../views/notifications/components/courses.vue'),
    beforeEnter: hasToken
  },
  {
    path: '/lives',
    name: 'lives',
    meta: {
      layout: 'default'
    },
    component: () => import(/* webpackChunkName: "lives" */ '../views/notifications/components/lives.vue'),
    beforeEnter: hasToken
  },
  {
    path: '/auth/signin',
    name: 'signin',
    component: () => import(/* webpackChunkName: "signin" */ '../views/auth/signin.vue'),
    meta: {
      layout: 'auth'
    },
  },
]

const router = createRouter({
  history: createWebHistory('/'),
  routes
})

export default router
