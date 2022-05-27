import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/home/Home.vue'
import Works from '../views/works/works.vue'
import About from '../views/about/About.vue'
import Skills from '../views/skills/skills.vue'
import Contact from '../views/contact/contact.vue'
import Hobbies from '../views/hobbies/hobbies.vue'

const routes = [
  {
    path: '/',
    name: '',
    component: Home
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/hobbies',
    name: 'Hobbies',
    component: Hobbies
  },
  {
    path: '/works',
    name: 'Works',
    component: Works
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/skills',
    name: 'Skills',
    component: Skills
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
