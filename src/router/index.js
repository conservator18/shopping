import Vue from 'vue'
import VueRouter from 'vue-router'
const Home = () => import('views/home/Home')
const Cart = () => import('views/cart/Cart')
const User = () => import('views/user/User')
const Category = () => import('views/category/Category')
const ProductInfo = () => import('views/productinfo/ProductInfo')

Vue.use(VueRouter)

  const routes = [
    {
      path: '/productinfo',
      component: ProductInfo,
      name: 'ProductInfo'
    },
    {
      path: '/home',
      component: Home,
      name: 'Home'
    },
    {
      path: '/cart',
      component: Cart,
      name: 'Cart'
    },
    {
      path: '/category',
      component: Category,
      name: 'Category'
    },
    {
      path: '/user',
      component: User,
      name: 'User'
    },
    {
      path: '/',
      redirect: '/home'
    }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
