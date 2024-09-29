import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Layout from '@/layout/index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'index',
      component: Layout,
      meta: {title: '主页', icon: 'solar:home-angle-2-bold-duotone' },
      redirect: 'home',
      children: [
        {
          path: 'home',
          name: 'home',
          component: HomeView,
          meta: {title: '主页', icon: 'solar:home-angle-2-bold-duotone' },
        },
      ]
    },
    {
      path: '/dev',
      name: 'dev',
      component: Layout,
      meta: {title: '常用', icon: 'solar:code-square-bold-duotone'},
      redirect: '/KeyCodeInfo',
      children: [
        {
          path: 'KeyCodeInfo',
          name: 'KeyCodeInfo',
          component: () => import('@/views/dev/KeyCodeInfo.vue'),
          meta: {title: 'KeyCode信息', icon: 'solar:keyboard-line-duotone' },
        },
        {
          path: 'JSONPrettify',
          name: 'JSONPrettify',
          component: () => import('@/views/dev/JSONPrettify.vue'),
          meta: {title: 'JSON美化', icon: 'carbon:json' },
        },
        {
          path: 'DiffText',
          name: 'DiffText',
          component: () => import('@/views/dev/DiffText.vue'),
          meta: {title: '差异比较', icon: 'ph:git-diff-duotone' },
        },
        {
          path: 'XMLPrettify',
          name: 'XMLPrettify',
          component: () => import('@/views/dev/XMLPrettify.vue'),
          meta: {title: 'XML美化', icon: 'carbon:xml' },
        },
        {
          path: 'HTMLCSSJSPrettify',
          name: 'HTMLCSSJSPrettify',
          component: () => import('@/views/dev/HTMLCSSJSPrettify.vue'),
          meta: {title: 'HTML/CSS/JS美化', icon: 'carbon:html' },
        },
      ]
    },
    {
      path: '/Crypto',
      name: 'Crypto',
      component: Layout,
      meta: {title: '加密', icon: 'solar:key-minimalistic-square-2-bold-duotone'},
      redirect: '/RandomGenerator',
      children: [
        {
          path: 'RandomGenerator',
          name: 'RandomGenerator',
          component: () => import('@/views/Crypto/RandomGenerator.vue'),
          meta: {title: '随机数生成', icon: 'solar:reorder-line-duotone' },
        },
        {
          path: 'UUIDGenerator',
          name: 'UUIDGenerator',
          component: () => import('@/views/Crypto/UUIDGenerator.vue'),
          meta: {title: 'UUID生成', icon: 'tabler:letter-g' },
        },
        {
          path: 'ULIDGenerator',
          name: 'ULIDGenerator',
          component: () => import('@/views/Crypto/ULIDGenerator.vue'),
          meta: {title: 'ULID生成', icon: 'tabler:letter-u' },
        },
        {
          path: 'Encryption',
          name: 'Encryption',
          component: () => import('@/views/Crypto/Encryption.vue'),
          meta: {title: '加密/解密文本', icon: 'solar:lock-keyhole-minimalistic-line-duotone' },
        },
      ]
    },
    {
      path: '/Converter',
      name: 'Converter',
      component: Layout,
      meta: {title: '转换器', icon: 'solar:square-sort-horizontal-bold-duotone' },
      redirect: '/DateTimeConverter',
      children: [
        {
          path: 'DateTimeConverter',
          name: 'DateTimeConverter',
          component: () => import('@/views/Converter/DateTimeConverter.vue'),
          meta: {title: '时间转换', icon: 'solar:calendar-line-duotone' },
        },
        {
          path: 'CaseConverter',
          name: 'CaseConverter',
          component: () => import('@/views/Converter/CaseConverter.vue'),
          meta: {title: '大小写转换', icon: 'tabler:letter-case-toggle' },
        },
        {
          path: 'BaseConverter',
          name: 'BaseConverter',
          component: () => import('@/views/Converter/BaseConverter.vue'),
          meta: {title: '进制转换', icon: 'tabler:time-duration-10' },
        },
      ]
    },
  ]
})

export default router
