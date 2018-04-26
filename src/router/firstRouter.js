import Main from '@/components/views/main.vue'

export default [
  {
    path: '/first',
    name: 'First',
    component: () => import('../components/views/first/first.vue')
  },
  {
    path: '/404',
    name: 'Error404',
    component: () => import('../components/views/error-page/404.vue')
  },
  {
    path: '/403',
    name: 'Error403',
    component: () => import('../components/views/error-page/403.vue')
  },
  {
    path: '/500',
    name: 'Error500',
    component: () => import('../components/views/error-page/500.vue')
  },
  {
    path: '/errorPage',
    name: 'ErrorPage',
    component: () => import('../components/views/error-page/error-page.vue')
  },
  {
    path: '/second',
    name: 'Second',
    component: () => import('../components/views/second/second.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../components/views/login/login.vue')
  },
  {
    path: '/',
    name: 'otherRouter',
    redirect: '/home',
    component: Main,
    children: [
      {
        path: 'home',
        title: 'home1',
        name: 'home_index',
        component: () => import('@/components/views/home/home.vue')
      }
    ]
  }
]
