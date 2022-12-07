<template>

  <ion-app>
    <ion-split-pane content-id="main-content">
      
      <ion-menu content-id="main-content" >
         
        <ion-content>
         
 <ion-header  id="header">
<ion-grid>
              <ion-row>
                
                <ion-col size="3">
                  <ion-avatar>
                    <ion-img src="/mona.jpg" alt="img"></ion-img>
                  </ion-avatar>
                </ion-col>
                <ion-col>
                  <ion-list-header>
Mona mohamed</ion-list-header>

                  <ion-note>monamohamed72@gmail.com</ion-note>
                </ion-col>
              </ion-row>
            </ion-grid>
</ion-header>

              <ion-accordion-group >
            
              <ion-accordion>
                <ion-item slot="header">
Dashboard
                </ion-item>
        <ion-list slot="content">
                  <ion-item  router-link="/home" router-direction="root" button :router-animation="myAnimation" > Home</ion-item>
                </ion-list>
                </ion-accordion>
                </ion-accordion-group> 

   
          <ion-accordion-group >
            
              <ion-accordion>
                <ion-item slot="header">
TVs and Electronics
                </ion-item>
        <ion-list slot="content">
                  <ion-item  router-link="/tv" router-direction="root" button :router-animation="myAnimation" > TVs</ion-item>
                </ion-list>
      <div slot="content">
             <ion-accordion-group>
              <ion-accordion>
                <ion-item slot="header">
Electronics
                </ion-item>
                <ion-list slot="content">
                  <ion-item  router-link="/laptop" router-direction="root" button :router-animation="myAnimation" > Laptops</ion-item>
                  <ion-item  router-link="/tablet" router-direction="root" button :router-animation="myAnimation" > Tablets</ion-item>
                </ion-list>
              </ion-accordion>
            </ion-accordion-group>
      </div>
         
             </ion-accordion>
            </ion-accordion-group>
          <ion-accordion-group>
              <ion-accordion>
                <ion-item slot="header">
Home Appliances
                </ion-item>
      <div slot="content">
             <ion-accordion-group>
              <ion-accordion>
                <ion-item slot="header">
Large Home Appliances
                </ion-item>
                <ion-list slot="content">
                  <ion-item  router-link="fridge" router-direction="root" button :router-animation="myAnimation" > Refrigerator and Deep Freezer</ion-item>
                  <ion-item  router-link="/forn" router-direction="root" button :router-animation="myAnimation" >Cookers and Microwaves</ion-item>
                  <ion-item  router-link="/wash" router-direction="root" button :router-animation="myAnimation" >Washing Machines</ion-item>
                  <ion-item  router-link="/skhan" router-direction="root" button :router-animation="myAnimation" >Water Heaters</ion-item>
                </ion-list>
              </ion-accordion>
            </ion-accordion-group>
      </div>
      <div slot="content">
             <ion-accordion-group>
              <ion-accordion>
                <ion-item slot="header">
Small Home Appliances
                </ion-item>
                <ion-list slot="content">
                  <ion-item  router-link="/iron" router-direction="root" button :router-animation="myAnimation" > Iron</ion-item>
                  <ion-item  router-link="/fan" router-direction="root" button :router-animation="myAnimation" > Fan</ion-item>
                  <ion-item  router-link="/jak" router-direction="root" button :router-animation="myAnimation" > Juicer</ion-item>
                </ion-list>
              </ion-accordion>
            </ion-accordion-group>
      </div>
      <div slot="content">
             <ion-accordion-group>
              <ion-accordion>
                <ion-item slot="header">
Food Preparation Appliances
                </ion-item>
                <ion-list slot="content">
                  <ion-item  router-link="/chropper" router-direction="root" button :router-animation="myAnimation" > Chopper</ion-item>
                  <ion-item  router-link="/toaster" router-direction="root" button :router-animation="myAnimation" > Toaster</ion-item>
                </ion-list>
              </ion-accordion>
            </ion-accordion-group>
      </div>
      <div slot="content">
             <ion-accordion-group>
              <ion-accordion>
                <ion-item slot="header">
Lighting System
                </ion-item>
                <ion-list slot="content">
                  <ion-item  router-link="/light" router-direction="root" button :router-animation="myAnimation" > Lights</ion-item>
                </ion-list>
              </ion-accordion>
            </ion-accordion-group>
      </div>
       
             </ion-accordion>
            </ion-accordion-group>
            <ion-accordion-group>
              <ion-accordion>
                <ion-item slot="header">
AirCondition
                </ion-item>
        <ion-list slot="content">
 <ion-item  router-link="/cold" router-direction="root" button :router-animation="myAnimation" > Air Conditions and Coolers</ion-item>                </ion-list>

         
             </ion-accordion>
            </ion-accordion-group>
            <ion-accordion-group>
              <ion-accordion>
                <ion-item slot="header">
Personal Care Products
                </ion-item>
        <ion-list slot="content">
 <ion-item  router-link="/hair" router-direction="root" button :router-animation="myAnimation" >Hair Products and Shavers</ion-item>                </ion-list>

         
             </ion-accordion>
            </ion-accordion-group>

        </ion-content>
      </ion-menu>
      <ion-router-outlet id="main-content"></ion-router-outlet>
    </ion-split-pane>
  </ion-app>
</template>

<script>
import { IonApp, IonContent,  IonAccordion, 
    IonAccordionGroup, 
     IonItem,  IonList,  IonMenu, IonNote,  IonRouterOutlet, IonListHeader,IonSplitPane,IonImg } from '@ionic/vue';
import { defineComponent, ref } from 'vue';
import { useRoute } from 'vue-router';
import { archiveOutline, archiveSharp, bookmarkOutline,arrowUndoOutline,arrow, bookmarkSharp, heartOutline, heartSharp, mailOutline, mailSharp, paperPlaneOutline, paperPlaneSharp, trashOutline, trashSharp, warningOutline, warningSharp} from 'ionicons/icons';

export default defineComponent({
  name: 'App',
  components: {
    IonApp,
    IonImg, 
    IonContent, 
    IonItem,
    IonListHeader,
    IonList, 
    IonNote,
    IonMenu, 
    IonAccordion, 
      IonAccordionGroup,
    IonRouterOutlet, 
    IonSplitPane,
  },
  setup() {
    const selectedIndex = ref(0);
    const appPages = [
      {
      }
      
    ];
    const labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
    
    const path = window.location.pathname.split('home/')[1];
    if (path !== undefined) {
      selectedIndex.value = appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
    }
    
    const route = useRoute();
    
    return { 
      selectedIndex,
      appPages, 
     arrow,
      labels,
      archiveOutline, 
      archiveSharp, 
      bookmarkOutline, 
      bookmarkSharp, 
      heartOutline, 
      heartSharp, 
      mailOutline, 
      mailSharp, 
      paperPlaneOutline, 
      paperPlaneSharp, 
      trashOutline, 
      trashSharp, 
      warningOutline, 
      warningSharp,
     arrowUndoOutline,
      isSelected: (url) => url === route.path ? 'selected' : ''
    }
  }
});
</script>

<style scoped>
ion-menu ion-content {
  --background: var(--ion-item-background, var(--ion-background-color, #fff));
}

ion-menu.md ion-content {
  --padding-start: 8px;
  --padding-end: 8px;
  --padding-top: 20px;
  --padding-bottom: 20px;
}

ion-menu.md ion-list {
  padding: 20px 0;
}

ion-menu.md ion-note {
  margin-bottom: 30px;
}

ion-menu.md ion-list-header,
ion-menu.md ion-note {
  padding-left: 10px;
}

ion-menu.md ion-list#inbox-list {
  border-bottom: 1px solid var(--ion-color-step-150, #7396db);
}

ion-menu.md ion-list#inbox-list ion-list-header {
  font-size: 22px;
  font-weight: 600;

  min-height: 20px;
}

ion-menu.md ion-list#labels-list ion-list-header {
  font-size: 16px;

  margin-bottom: 18px;

  color: #757575;

  min-height: 26px;
}

ion-menu.md ion-item {
  --padding-start: 10px;
  --padding-end: 10px;
  border-radius: 4px;
}
ion-menu.md ion-item.selected {
  --background: rgba(var(--ion-color-primary-rgb), 0.14);
}

ion-menu.md ion-item.selected ion-icon {
  color: var(--ion-color-primary);
}

ion-menu.md ion-item ion-icon {
  color: #616e7e;
}

ion-menu.md ion-item ion-label {
  font-weight: 500;
}

ion-menu.ios ion-content {
  --padding-bottom: 20px;
}

ion-menu.ios ion-list {
  padding: 20px 0 0 0;
}

ion-menu.ios ion-note {
  line-height: 24px;
  margin-bottom: 20px;
}


ion-menu.ios ion-item {
  --padding-start: 16px;
  --padding-end: 16px;
  --min-height: 50px;
}

ion-menu.ios ion-item.selected ion-icon {
  color: var(--ion-color-primary);
}
#icon{
  width: 100px;
}

ion-menu.ios ion-item ion-icon {
  font-size: 24px;
  color: #73849a;
}
#header{
  height: 33%;
  background: rgb(3, 98, 110);
  border-radius:20px 0 20px 0;
  display: flex;
  flex-direction: column;
  color: #28ba62;
  padding: 20px;
}

#cart{
  vertical-align: top;
  position: relative;
  left: 0;
  font-size: 30px;
 color: #fff;
}
ion-menu.ios ion-list#labels-list ion-list-header {
  margin-bottom: 8px;
}

ion-menu.ios ion-list-header,
ion-menu.ios ion-note {
  padding-left: 16px;
  padding-right: 16px;
}

ion-menu.ios ion-note {
  margin-bottom: 8px;
}

ion-note {
  display: inline-block;
  font-size: 16px;

  color: var(--ion-color-medium-shade);
}

ion-item.selected {
  --color: var(--ion-color-primary);
}
ion-list-header{
  font-weight: bold;
  color: #fff;
  font-family:  helvetic;
   font-size: 20px;
}
ion-note{
   color: #fff;
    font-size: 15px;
}
ion-button{
    font-family: helvetic;
    background-color: rgb(3, 98, 110) !important;
  }



ion-accordion.accordion-expanding ion-item[slot="header"],
ion-accordion.accordion-expanded ion-item[slot="header"]{
  --background:rgb(3, 98, 110);
  --color:#fff;
  font-weight: 600;
  border-radius: 0 0 20px 20px;

border-bottom:2px solid #fff;

}

ion-accordion.accordion-collapsed ion-item[slot="header"],
ion-accordion.accordion-collapsing ion-item[slot="header"]{

--background:rgb(26, 185, 177);
  --color:#fff;
   font-weight: 600;
   border-radius: 0 0 20px 20px;

border-bottom:2px solid #fff;

}
ion-icon { 
  color:#fff;
}



</style>
