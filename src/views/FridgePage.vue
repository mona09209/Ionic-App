

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
                                                                <ion-button  id="open-modal" expand="block"><ion-icon :src="cart" id="cart" slot="start" ></ion-icon> <ion-badge color="danger" >{{counter}}</ion-badge></ion-button>
  
<ion-modal ref="modal" trigger="open-modal" :presenting-element="presentingElement">
      <ion-content>
        <ion-toolbar>
          <ion-title>Cart</ion-title>
          <ion-buttons slot="end">
            <ion-button color="light" @click="dismiss()">Close</ion-button>
          </ion-buttons>
        </ion-toolbar>
        <ion-list>
            
         <ion-grid id="grid" >
  <ion-row id="heading">
    <ion-col class="col">
      <div>NO</div>
    </ion-col>
    <ion-col class="col">
      <div>NAME</div>
    </ion-col>
    <ion-col class="col">
      <div>PRICE</div>
    </ion-col>
    <ion-col class="col">
      <div>QUANTITY</div>
    </ion-col>
    <ion-col class="col">
      <div>TOTAL</div>
    </ion-col>
  </ion-row>
  <ion-row   >
    <ion-col class="col">
      <div></div>
    </ion-col>
    <ion-col class="col">
      <div></div>
    </ion-col>
    <ion-col class="col">
      <div></div>
    </ion-col>
    <ion-col class="col">
      <div></div>
    </ion-col>
    <ion-col class="col">
      <div><ion-input type="number"  ></ion-input></div>
    </ion-col>
    <ion-col class="col">
      <div></div>
    </ion-col>
  </ion-row><br>
</ion-grid>
        </ion-list>
         <ion-button expand="block" v-on:click="counter+=1"  id="example"><div>ADD TO CART</div></ion-button>

      </ion-content>
      
    </ion-modal>
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
      <ion-header collapse="condense">
        
        
      </ion-header>
      
  <div class="container " >
<ion-grid >
  
  <ion-row >
    <ion-col size="6">
        <ion-card >
          <img src="assets/fridge/5.jpg"  alt="ion">
    <ion-card-header>

<ion-card-title >
    Fridge <ion-badge color="warning" ><ion-label>$</ion-label>1000</ion-badge>
</ion-card-title>   
    </ion-card-header>

    <ion-card-content>
      Lorem ipsum dolor sit amet.
      </ion-card-content>
 <ion-footer><ion-row>
  <ion-col center text-center id="example"><ion-button expand="block" v-on:click="counter+=1"><div>ADD TO CART</div></ion-button></ion-col>
  
  </ion-row>
  </ion-footer>
    
  </ion-card >
    </ion-col>

    <ion-col size="6">
              <ion-card>
          <img src="assets/fridge/6.jpg" alt="ion">
    <ion-card-header>

<ion-card-title>
    Fridge <ion-badge color="warning" ><ion-label>$</ion-label>1000</ion-badge>
</ion-card-title>   
    </ion-card-header>

    <ion-card-content>
      Lorem ipsum dolor sit amet.
    </ion-card-content>
 <ion-footer><ion-row>
  <ion-col center text-center><ion-button expand="block" v-on:click="counter+=1"><div>ADD TO CART</div></ion-button></ion-col>
  
  </ion-row></ion-footer>
    
  </ion-card>
    </ion-col>
  </ion-row>
</ion-grid>
<ion-row>
  <ion-row>
    <ion-col size="6">
        <ion-card>
          <img src="assets/fridge/7.jpg" alt="ion">
    <ion-card-header>

<ion-card-title >
    Fridge <ion-badge color="warning" ><ion-label>$</ion-label>1000</ion-badge>
</ion-card-title>   
    </ion-card-header>

    <ion-card-content>
      Lorem ipsum dolor sit amet.
      </ion-card-content>
 <ion-footer><ion-row>
  <ion-col center text-center><ion-button expand="block" v-on:click="counter+=1"><div >ADD TO CART</div></ion-button></ion-col>
  
  </ion-row></ion-footer>
    
  </ion-card >
    </ion-col>

    <ion-col size="6">
              <ion-card>
          <img src="assets/fridge/8.jpg" alt="ion">
    <ion-card-header>

<ion-card-title>
    Fridge <ion-badge color="warning" ><ion-label>$</ion-label>1000</ion-badge>
</ion-card-title>   
    </ion-card-header>

    <ion-card-content>
      Lorem ipsum dolor sit amet.
    </ion-card-content>
 <ion-footer><ion-row>
  <ion-col center text-center><ion-button expand="block" v-on:click="counter+=1"><div>ADD TO CART</div></ion-button></ion-col>
  
  </ion-row>
  
  </ion-footer>
    
  </ion-card>
    </ion-col>
  </ion-row>
</ion-row>
<ion-row>
    <ion-col size="6">
        <ion-card>
          <img src="assets/fridge/9.jpg" alt="ion">
    <ion-card-header>

<ion-card-title >
    Fridge <ion-badge color="warning" ><ion-label>$</ion-label>1000</ion-badge>
</ion-card-title>   
    </ion-card-header>

    <ion-card-content>
      Lorem ipsum dolor sit amet.
      </ion-card-content>
 <ion-footer><ion-row>
  <ion-col center text-center><ion-button expand="block" v-on:click="counter+=1"><div>ADD TO CART</div></ion-button></ion-col>
  
  </ion-row></ion-footer>
    
  </ion-card >
    </ion-col>

    <ion-col size="6">
              <ion-card>
          <img src="assets/fridge/10.jpg" alt="ion">
    <ion-card-header>

<ion-card-title>
    Fridge <ion-badge color="warning" ><ion-label>$</ion-label>1000</ion-badge>
</ion-card-title>   
    </ion-card-header>

    <ion-card-content>
      Lorem ipsum dolor sit amet.
    </ion-card-content>
 <ion-footer><ion-row>
  <ion-col center text-center><ion-button expand="block" v-on:click="counter+=1"><div class="dic" >ADD TO CART</div></ion-button></ion-col>
  
  </ion-row></ion-footer>
    
  </ion-card>
    </ion-col>
     <ion-col size="6">
        <ion-card>
          <img src="assets/fridge/11.jpg" alt="ion">
    <ion-card-header>

<ion-card-title >
    Fridge <ion-badge color="warning" ><ion-label>$</ion-label>1000</ion-badge>
</ion-card-title>   
    </ion-card-header>

    <ion-card-content>
      Lorem ipsum dolor sit amet.
      </ion-card-content>
 <ion-footer><ion-row>
  <ion-col center text-center><ion-button expand="block" v-on:click="counter+=1"><div>ADD TO CART</div></ion-button></ion-col>
  
  </ion-row></ion-footer>
    
  </ion-card >
    </ion-col>
     <ion-col size="6">
        <ion-card>
          <img src="assets/fridge/12.jpg" alt="ion">
    <ion-card-header>

<ion-card-title >
    Fridge <ion-badge color="warning" class="rounded"><ion-label>$</ion-label>1000</ion-badge>
</ion-card-title>   
    </ion-card-header>

    <ion-card-content>
      Lorem ipsum dolor sit amet.
      </ion-card-content>
 <ion-footer><ion-row>
  <ion-col center text-center><ion-button expand="block" v-on:click="counter+=1"><div>ADD TO CART</div></ion-button></ion-col>
  
  </ion-row></ion-footer>
    
  </ion-card >
    </ion-col>


  </ion-row>
  
       
      </div>
      
      
    </ion-content>
  </ion-page>
</template>

<script>

import { IonButtons, IonContent,IonGrid,IonRow,IonCardHeader,IonButton,IonCardContent,IonCardTitle,IonFooter,IonCol,IonCard,IonBadge, IonHeader, IonMenuButton, IonPage, IonTitle,IonSearchbar,IonModal } from '@ionic/vue';
import {cart , trash,arrow} from 'ionicons/icons';

import { defineComponent } from 'vue';
export default defineComponent({
  name: 'FolderPage',
  components: {
    IonButtons,
    IonGrid,IonRow,IonCardHeader,IonButton,IonCardContent,IonCardTitle,IonFooter,IonCol,IonCard,IonBadge,
    IonContent,
    IonHeader,
    IonMenuButton,
    IonPage,
    IonTitle,
   IonModal,
IonSearchbar,


  },
  
  setup(){
    const slideOpts = {
      initialSlide: 1,
      speed: 400
    };
    return { slideOpts,
    cart,
     trash,
    arrow
    }
    
    
  },



 data(){
return{
  counter : 0,
  presentingElement: null,
    count: 0,
    carts:[],
    products:[
                    {"name":"Samsung Galaxy A80","img":"phones/e1.png","price":85000,"company":"samsung","condition":"New"},
                    {"name":"Huawei Mate 30" ,"img":"phones/e2.jpg","price":45000,"company":"huawei","condition":"Used"},
                    {"name":"Iphone 11" ,"img":"phones/e3.jpg","price":90000,"company":"iphone","condition":"New"},
                    {"name":"Samsung Note20" ,"img":"phones/e4.png","price":90000,"company":"samsung","condition":"New"},
                    {"name":"Huawei MateX","img":"phones/e5.jpg","price":750000,"company":"huawei","condition":"New"},
                    {"name":"Iphone12","img":"phones/e6.jpg","price":99500,"company":"iphone","condition":"New"},
                    {"name":"Samsung Galaxy Fold2","img":"phones/e7.jpg","price":80000,"company":"samsung","condition":"Used"},
                    {"name":"Huawei p40","img":"phones/e8.jpg","price":60000,"company":"huawei","condition":"New"},
                    {"name":"Iphone7","img":"phones/m1.jpg","price":25000,"company":"iphone","condition":"New"},
                    {"name":"Iphone Mini","img":"phones/m2.jpg","price":16000,"company":"iphone","condition":"New"},
                    {"name":"Samsung Galaxy S9","img":"phones/m3.jpg","price":37000,"company":"samsung","condition":"New"},
                    {"name":"Samsung Galaxy s10","img":"phones/m4.jpg","price":39500,"company":"samsung","condition":"New"},
                    {"name":"Iphone Xr","img":"phones/m5.jpg","price":39550,"company":"iphone","condition":"Used"},
                    {"name":"Huawei Y9","img":"phones/m6.jpg","price":39000,"company":"huawei","condition":"New"},
                    {"name":"Iphone X","img":"phones/m7.jpg","price":30000,"company":"iphone","condition":"New"},
                    {"name":"Samsung Galaxy Note8","img":"phones/m8.jpeg","price":39500,"company":"samsung","condition":"Used"},
                    {"name":"Huawei Y7","img":"phones/c1.webp","price":19700,"company":"huawei","condition":"New"},
                    {"name":"Iphone Mini","img":"phones/c2.jpg","price":15400,"company":"iphone","condition":"New"},
                    {"name":"Samsung Galaxy J3","img":"phones/c3.jpg","price":12500,"company":"samsung","condition":"New"},
                    {"name":"Huawei Nove5","img":"phones/c4.webp","price":19999,"company":"huawei","condition":"New"},
                    {"name":"Iphone Se","img":"phones/c5.jpg","price":11940,"company":"iphone","condition":"Used"},
                    {"name":"Samsung J7","img":"phones/c6.jpg","price":18999,"company":"samsung","condition":"New"},
                    {"name":"Huawei P20","img":"phones/c7.jpg","price":15900,"company":"huawei","condition":"New"},
                    {"name":"Iphone 6S+","img":"phones/c8.webp","price":18999,"company":"iphone","condition":"New"}
                ]
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
  #icon{
      color: rgb(11, 84, 104);
       vertical-align: top;
  position: relative;
  left: 30%;
      text-decoration: none;
}
#image{
      height: 20%;
width: 20%;
 background-size: cover;
}
#open-modal{
  vertical-align: top;
  position: relative;
  left: 5%;
}
#grid{
   font-family:  helvetic;

  width: 98%;
  text-align: center;

}


#heading{
 font-weight: bold;
 
 text-align: center;
    background-color: rgb(255, 255, 255);
    border-bottom: 1px solid rgb(0, 0, 0);
  box-shadow: #000;
}
#cart{
  vertical-align: top;
  position: relative;
  left: 25%;
  font-size: 30px;
 color: #fff;
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
h2{
font-family: Roboto;

}
ion-searchbar{
margin: auto;
color:rgb(3, 98, 110);
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

ion-card{
  background-size: cover;
}

ion-button{
  font-family: helvetic;
}
ion-Searchbar{
margin: auto;
color:rgb(3, 98, 110);
}
#mega{
  right: 15%;
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

ion-slides{
  height: 200px;
  
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
  ion-badge{
    border-radius: 30px;

  }
  #example{
    justify-content:flex-end;
    top: 400%;
}
</style>

