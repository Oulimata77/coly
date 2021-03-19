<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>ajouter océan</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Ajout des océans</ion-title>
        </ion-toolbar>
      </ion-header>
      <form @submit.prevent="onFormSubmit">
                <div class="form-group">
                    <label>Name</label>
                    <input type="text" class="form" v-model="ocean.name" required>
                </div>
  <br><br>
                <div class="form-group">
                    <label>superficie</label>
                    <input type=text class="form-control" v-model="ocean.superficie" required>
                </div>
 <br><br>
                <div class="form-group">
                    <label>lieu</label>
                    <input type="text" class="form-control" v-model="ocean.lieu" required>
                </div>
 <br><br>
                <div class="form-group">
                    <button class="test">ajouter un océan</button>
                </div>
            </form>
           
      
    </ion-content>
  </ion-page>
</template>

<script>
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';

import { db } from '../firebaseDb';

export default  {
  
  components: {  IonHeader, IonToolbar, IonTitle, IonContent, IonPage },
  data() {
            return {
                ocean: {
                }
            }
},
methods: {
            onFormSubmit(event) {
                event.preventDefault()
                db.collection('ocean').add(this.ocean).then(() => {
                    alert("ocean successfully created!");
                    this.ocean.name = ''
                    this.ocean.superficie = ''
                    this.ocean.lieu = ''
                }).catch((error) => {
                    console.log(error);
                });
            }
        },
         
    }

</script>
<style scoped>
.form-group{
  position: center;
  right: 0;
  
}
.form-control{
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  margin-top: 6px;
  margin-bottom: 16px;
  resize: vertical;
  
}
input[type=text], select, textarea {
  width: 50%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  margin-top: 6px;
  margin-bottom: 10px;
  resize: vertical;
  right: 30;
  
}
.form{
  width: 10%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  margin-top: 6px;
  margin-bottom: 10px;
  resize: vertical;
  right: 50;
  left: 50;
}
 .test  {
      background-color: #4CAF50;
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
   }

</style>