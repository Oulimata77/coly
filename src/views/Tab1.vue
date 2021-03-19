<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Ocean</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Ocean</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-toolbar>
        <ion-title size="large">home</ion-title>
      </ion-toolbar>
   <ion-list>
     <ion-item v-for="ocean in oceans" :key="ocean.name">
       <ion-label>
{{ocean.name}} qui se trouve à {{ocean.lieu}} étendu de 
 {{ocean.superficie}} Km² </ion-label>
<ion-button class="danger" @click.prevent="delete(ocean.id)"> Delete{{ocean.name}}</ion-button>
 </ion-item>
</ion-list>
    </ion-content>
  </ion-page>
</template>
<script >
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
import { db } from '../firebaseDb';
export default  {
  components: {IonHeader, IonToolbar, IonTitle, IonContent, IonPage },
  ionViewDidEnter(){
this.getocean();
  },
  data(){
    return{
      oceans:[],
    }
  },
  mounted(){
    this.getocean();
  },
  methods: {
    getocean() {
      db.collection("ocean").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data());
        this.oceans.push({
          id:doc.id,
          name: doc.data().name,
          superficie: doc.data().superficie,
          lieu: doc.data().lieu

        });
    });
});
    },
  
  
    methods: {
            delete(id){
              if (window.confirm("Do you really want to delete?")) {
                db.collection("oceans").doc(id).delete().then(() => {
                    console.log("Document deleted!");
                })
                .catch((error) => {
                    console.error(error);
                })
              }
            }
        }
  }
}

</script>
