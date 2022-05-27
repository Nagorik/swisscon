import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import App from '../views/Layout.vue'
import ProjectLayout from '../views/ProjectLayout.vue'
import ProjectList from '../views/ProjectList.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    meta: { title: "Home Layout"},
    component: App,
    children: [
      {
        meta: { title: "Home"},
        path: "/",
        component: Home,
      },
    ]
  },
  {
    path: "/project/:id?",
    name: "Project",
    component: ProjectLayout,
  },
  {
    path: "/projectlist/:type?/:id?",
    name: "ProjectList",
    component: ProjectList,
  }
]

const router = new VueRouter({
  mode: 'history',
  routes,  
})
export default router
