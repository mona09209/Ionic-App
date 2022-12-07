import { createRouter, createWebHistory } from '@ionic/vue-router';
import IronPage from "@/views/IronPage";
//import HomePage from "@/views/HomePage";
import FridgePage from "@/views/FridgePage";
import FornPage from "@/views/FornPage";
import FanPage from "@/views/FanPage";
import ColdPage from "@/views/ColdPage";
import WashPage from "@/views/WashPage";
import LightPage from "@/views/LightPage";
import TvPage from "@/views/TvPage";
import LaptopPage from "@/views/LaptopPage";
import HairPage from "@/views/HairPage";
import TabletPage from "@/views/TabletPage";
import SkhanPage from "@/views/SkhanPage";
import JakPage from "@/views/JakPage";
import ChropperPage from "@/views/ChropperPage";
import ToasterPage from "@/views/ToasterPage";
import CartPage from "@/views/CartPage";


const routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    component: () => import ('../views/HomePage.vue')
  },
  {
    path:"/chropper",
    component:ChropperPage
  },
  {
    path:"/cart",
    component:CartPage
  },
  {
    path:"/toaster",
    component:ToasterPage
  },
  {
    path:"/iron",
    component:IronPage
  },
  {
    path:"/fridge",
    component:FridgePage
  },
  {
    path:"/wash",
    component:WashPage
  },

  {
    path:"/cold",
    component:ColdPage
  },
  {
    path:"/tv",
    component:TvPage
  },
  {
    path:"/light",
    component:LightPage
  },
  {
    path:"/forn",
    component:FornPage
  },
  {
    path:"/fan",
    component:FanPage
  },
  {
    path:"/laptop",
    component:LaptopPage
  },
  {
    path:"/tablet",
    component:TabletPage
  },
  {
    path:"/skhan",
    component:SkhanPage
  },
  {
    path:"/hair",
    component:HairPage
  },
  {
    path:"/jak",
    component:JakPage
  },
 
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
