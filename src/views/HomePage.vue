

<template>
  <ion-page>
     <ion-header :translucent="true" id="header">
      
       
        <ion-title>
        <ion-grid>
              <ion-row>
                <ion-col>
                   <ion-buttons >
          <ion-menu-button  ></ion-menu-button>
       
             <ion-col>   </ion-col>
             <ion-col id="mega">Mega Store</ion-col>


        </ion-buttons>
                </ion-col>
           
           
              </ion-row>
              <ion-row>
               <ion-col >
                 <ion-searchbar animated></ion-searchbar>
               </ion-col>
               
              </ion-row>
            </ion-grid>
        </ion-title>
    
    </ion-header>
    
    <ion-content :fullscreen="true">
      
  <div class="container " >
 <ion-grid>
  <ion-row>
      <h4>Shop by  Catogery</h4>
    <ion-col>
      <swiper  @slideChange="onSlideChange" :loop="true"  :pagination="{ clickable: true }"
 
    @swiper="onSwiper" :autoplay="true" :keyboard="true"   :zoom="true" :modules="modules">
     <swiper-slide >

          <img src="assets/fridge/5.jpg"  alt="ion" class="img">
    </swiper-slide>
    
    <swiper-slide >
          <img src="assets/fridge/16.jpeg"  alt="ion"  class="img">
   
    </swiper-slide>
    <swiper-slide >
          <img src="assets/fridge/8.jpg"  alt="ion" class="img">
   
    </swiper-slide>
    <swiper-slide >
          <img src="assets/fridge/17.jpeg"  alt="ion" class="img">
   
    </swiper-slide>
    <swiper-slide>
          <img src="assets/fridge/15.jpeg"  alt="ion" class="img">
   
    </swiper-slide>
    <swiper-slide >
          <img src="assets/fridge/6.jpg"  alt="ion" class="img">
   
    </swiper-slide>
    <swiper-slide>
          <img src="assets/fridge/11.jpg"  alt="ion" class="img">
   
    </swiper-slide>
    <swiper-slide>
          <img src="assets/fridge/14.jpeg"  alt="ion" class="img">
   
    </swiper-slide>
    <swiper-slide >
          <img src="assets/fridge/12.jpg"  alt="ion" class="img">
   
    </swiper-slide>    
      </swiper>
  
    </ion-col>
        <ion-col>  <ion-button id="font" expand="full"  router-link="/fridge" router-direction="root" :router-animation="myAnimation">View All</ion-button>
</ion-col>

  </ion-row>
  

 
  <ion-row>
    <ion-col>
      <swiper @slideChange="onSlideChange" :loop="true"  :pagination="{ clickable: true }"
 
    @swiper="onSwiper" :autoplay="true" :keyboard="true"   :zoom="true" :modules="modules">
     <swiper-slide >
          <img src="assets/iron/1.jpg"  alt="ion" class="img">
   
    </swiper-slide>
    <swiper-slide>
          <img src="assets/iron/2.jpg"  alt="ion" class="img">
   
    </swiper-slide>
    <swiper-slide >
          <img src="assets/iron/3.jpg"  alt="ion" class="img">
   
    </swiper-slide>
    <swiper-slide>
          <img src="assets/iron/4.jpg"  alt="ion" class="img">
   
    </swiper-slide>
    <swiper-slide>
          <img src="assets/iron/5.jpg"  alt="ion" class="img">
   
    </swiper-slide>
    <swiper-slide>
          <img src="assets/iron/6.jpg"  alt="ion" class="img">
   
    </swiper-slide>
    <swiper-slide >
          <img src="assets/iron/11.jpeg"  alt="ion" class="img">
   
    </swiper-slide>    
      </swiper>
  
    </ion-col>
        <ion-col>  <ion-button id="font" expand="full"  router-link="/iron" router-direction="root" :router-animation="myAnimation">View All</ion-button>
</ion-col>

  </ion-row>
  
  <ion-row>
    <ion-col>
      <swiper @slideChange="onSlideChange" :loop="true"  :pagination="{ clickable: true }"
  
    @swiper="onSwiper" :autoplay="true" :keyboard="true"   :zoom="true" :modules="modules">
     <swiper-slide >
          <img src="assets/tv/1.jpg"  alt="ion" class="img">
   
    </swiper-slide>
    <swiper-slide >
          <img src="assets/tv/2.jpg"  alt="ion" class="img">
   
    </swiper-slide>
    <swiper-slide >
          <img src="assets/tv/3.jpg"  alt="ion" class="img">
   
    </swiper-slide>
    <swiper-slide >
          <img src="assets/tv/4.jpg"  alt="ion" class="img">
   
    </swiper-slide>
    <swiper-slide>
          <img src="assets/tv/5.jpg"  alt="ion" class="img">
   
    </swiper-slide>
    <swiper-slide>
          <img src="assets/tv/6.jpg"  alt="ion" class="img">
   
    </swiper-slide>
    <swiper-slide>
          <img src="assets/tv/7.jpeg"  alt="ion" class="img">
   
    </swiper-slide>
   
      </swiper>
  
    </ion-col>
        <ion-col>  <ion-button id="font" expand="full"  router-link="/tv" router-direction="root" :router-animation="myAnimation">View All</ion-button>
</ion-col>

  </ion-row>
  <ion-row>
    <ion-col>
      <swiper @slideChange="onSlideChange" :loop="true"  :pagination="{ clickable: true }"
  
    @swiper="onSwiper" :autoplay="true" :keyboard="true"   :zoom="true" :modules="modules">
     <swiper-slide >

          <img src="assets/forn/1.jpg"  alt="ion" class="img">
   
    </swiper-slide>
    <swiper-slide >
          <img src="assets/forn/2.jpg"  alt="ion" class="img">
   
    </swiper-slide>
    <swiper-slide>
          <img src="assets/forn/3.jpg"  alt="ion" class="img">
   
    </swiper-slide>
    <swiper-slide>
          <img src="assets/forn/4.jpg"  alt="ion" class="img">
   
    </swiper-slide>
    <swiper-slide >
          <img src="assets/forn/5.jpg"  alt="ion" class="img">
   
    </swiper-slide>
    <swiper-slide >
          <img src="assets/forn/6.jpg"  alt="ion" class="img">
   
    </swiper-slide>
    <swiper-slide>
          <img src="assets/forn/7.jpeg"  alt="ion" class="img">
   
    </swiper-slide>
   
      </swiper>
  
    </ion-col>
        <ion-col>  <ion-button id="font" expand="full"  router-link="/forn" router-direction="root" :router-animation="myAnimation">View All</ion-button>
</ion-col>

  </ion-row>
  <ion-row>
    <ion-col>
      <swiper @slideChange="onSlideChange" :loop="true"  :pagination="{ clickable: true }"
    
    @swiper="onSwiper" :autoplay="true" :keyboard="true"   :zoom="true" :modules="modules">
     <swiper-slide >

          <img src="assets/cold/1.jpg"  alt="ion" class="img">
   
    </swiper-slide>
    <swiper-slide>
          <img src="assets/cold/2.jpg"  alt="ion" class="img">
   
    </swiper-slide>
    <swiper-slide>
          <img src="assets/cold/3.jpg"  alt="ion" class="img">
   
    </swiper-slide>
    <swiper-slide>
          <img src="assets/cold/4.jpg"  alt="ion" class="img">
   
    </swiper-slide>
    <swiper-slide >
          <img src="assets/cold/5.jpg"  alt="ion" class="img">
   
    </swiper-slide>
    <swiper-slide >
          <img src="assets/cold/6.jpg"  alt="ion" class="img">
   
    </swiper-slide>
    <swiper-slide >
          <img src="assets/cold/7.jpg"  alt="ion" class="img">
   
    </swiper-slide>
   
     
      </swiper>
  
    </ion-col>
        <ion-col>  <ion-button id="font" expand="full"  router-link="/cold" router-direction="root" :router-animation="myAnimation">View All</ion-button>
</ion-col>

  </ion-row>
  

 </ion-grid>
 

   </div>
   </ion-content>
  </ion-page>
</template>

<script>

import { IonButtons, IonicSlides,IonContent,  IonHeader, IonMenuButton, IonButton,IonPage, IonTitle,IonSearchbar, } from '@ionic/vue';
import {cart ,trash,arrow} from 'ionicons/icons';
import 'swiper/css';
  import 'swiper/css/autoplay';
  import 'swiper/css/keyboard';
  import 'swiper/css/pagination';
  import 'swiper/css/scrollbar';
  import 'swiper/css/zoom';
  import '@ionic/vue/css/ionic-swiper.css';
  import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, Keyboard, Pagination, Scrollbar,  onSwiper, onSlideChange, Zoom, } from 'swiper';
  import { Swiper, SwiperSlide } from 'swiper/vue';
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'FolderPage',
  components: {
    IonButtons,
    IonContent,
    IonHeader,
    IonMenuButton,
    IonPage,
    IonTitle,
    Swiper,
     SwiperSlide,
IonSearchbar,

 IonButton,
 
  },
  setup(){
   
  
    return { 
    cart,
    trash,
    arrow,

        onSwiper,
        onSlideChange,
      
        modules: [ IonicSlides,Autoplay, Keyboard, Pagination, Scrollbar, Zoom,],
    };
    
    
  },
  data(){
return{
  counter : 0,
  presentingElement: null,
    count: 0,
    carts:[],
    products:[]
}
 }
,
methods: {
increment() {
        this.count++;
      },
      decrement() {
        this.count--;
      },

 increaseOver(){
  // getting
  var span = document.querySelector("ion-badge")
  // processing
  this.counter++
  // setting
  span.innerHTML = this.counter
}
,
 dismiss() {
        this.$refs.modal.$el.dismiss();
      },

},

       mounted() {
      this.presentingElement = this.$refs.page.$el;
    },
});


</script>

<style scoped>
#container {
  text-align: center;
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}
p{
      color:black;
}
ion-modal {
    --height: 50%;
    --border-radius: 16px;
    --box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
  }

  ion-modal::part(backdrop) {
    background: rgba(209, 213, 219);
    opacity: 1;
  }

  ion-modal ion-toolbar {
    --background: rgb(14 116 144);
    --color: white;
  }
#tv{
  width: 500%;
}
#iron{
  width: 500%;
}
#cold{
  width: 500%;
}

ion-slides{
 width: 700%;
 height: 700%;
 
}
h4{
font-family: Roboto;
font-weight: 300;

}

#header{
  height: 25%;
  background: rgb(3, 98, 110);
  border-radius: 0 0 20px 20px;
  display: flex;
  flex-direction: column;
  color: #28ba62;
  padding: 15px;
}
#cart{
  vertical-align: top;
  position: relative;
  left: 25%;
  font-size: 30px;
 color: #fff;
}
#icon{
      color: rgb(11, 84, 104);
       vertical-align: top;
  position: relative;
  left: 30%;
      text-decoration: none;
}
.counter__section {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
#card{
      width: 95%;
}
#image{
      height: 20%;
width: 20%;
 background-size: cover;
}


ion-button{
  font-family: helvetic;
}
ion-searchbar{
margin: auto;
color:rgb(3, 98, 110);
}
#mega{
  right:40%;
  color:#fff;
}
ion-menu-button{
  font-size: 55px !important;
  color:#fff;
}
ion-icon{
background-color: none;
color: #fff;
   font-size: 30px;
   --ionicon-stroke-width:16px;
}
ion-badge{
      border-radius: 30px;
}


#container strong {
  font-size: 20px;
  line-height: 26px;
}

#container p {
  font-size: 16px;
  line-height: 22px;
  color: #8c8c8c;
  margin: 0;
  
}

#container a {
  text-decoration: none;
}
.spin{
    text-align: center;
  }
  ion-spinner {
    width: 28px;
    height: 28px;
    stroke: #444;
    fill: #222;
  }

#grid{
   font-family:  helvetic;
  border-collapse: collapse;
  width: 98%;
 
}
#grid:hover{
  
    background-color: rgb(90, 90, 90);
 
}

#heading{
 
 
 
    background-color: rgb(255, 255, 255);
    border-bottom: 1px solid rgb(0, 0, 0);
  box-shadow: #000;
}
swiper-slide:active{
transform: scale(1.05,1.05);

}
swiper-slide{
  width: 100%;
  height: 160%;
  box-shadow: none;
transition: 600ms all ease-in-out;
}
.img{
  object-fit: cover;
  width: 100%;
  transform: scale(1.1,1.1) rotate(1deg);
  transition: 400ms all ease-in-out;
}
.img:active{
  transform: scale(1,1);
}
</style>
