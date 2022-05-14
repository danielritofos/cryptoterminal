import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import LoginView from "../views/LoginView";
import RegistrationView from "../views/RegistrationView";
import ReportingView from "../views/ReportingView";
import ConsoleView from "../views/ConsoleView";
import NotificationsView from "../views/NotificationsView";
// import NotificationList from "../components/NotificationList";

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/login',
    name: 'LoginView',
    component: LoginView
  },
  {
    path: '/registration',
    name: 'RegistrationView',
    component: RegistrationView
  },
  {
    path: '/reporting',
    name: 'ReportingView',
    component: ReportingView
  },
  {
    path: '/console',
    name: 'ConsoleView',
    component: ConsoleView
  },
  {
    path: '/notifications',
    name: 'NotificationsView',
    component: NotificationsView
  },
  // {
  //   path: '/todolist',
  //   name: 'NotificationList',
  //   component: NotificationList
  // }

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
