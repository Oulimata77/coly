<template>
    <div class="row justify-content-center">
        <div class="col-md-5">
            <h3 class="text-center">Update User</h3>
            <form @submit.prevent="onUpdateForm">
                <div class="form-group">
                    <label>Name</label>
                    <input type="text" class="form-control" v-model="ocean.name" required>
                </div>

                <div class="form-group">
                    <label>superficie</label>
                    <input type="text" class="form-control" v-model="ocean.superficie" required>
                </div>

                <div class="form-group">
                    <label>Lieu</label>
                    <input type="text" class="form-control" v-model="ocean.lieu" required>
                </div>

                <div class="form-group">
                    <button class="test">Add User</button>
                </div>
      
<ion-list>
     <ion-item v-for="ocean in oceans" :key="ocean.name">
       <ion-label>
{{ocean.name}} qui se trouve à {{ocean.lieu}} étendu de
 {{ocean.superficie}} Km² </ion-label>
 <ion-button class="danger" @click.prevent="onUpdateForm(ocean.event)"> Modifier {{ocean.name}}</ion-button>
 </ion-item>

</ion-list>

            </form>
        </div>
    </div>
</template>

<script>

    import { db } from '../firebaseDb';

    export default {
       
        data() {
            return {
                ocean: [],
                }
            },
        
       
        methods: {
            onUpdateForm(event) {
                event.preventDefault()
                db.collection('ocean').doc(this.$route.params.id)
                .update(this.ocean).then(() => {
                    console.log("ocean successfully updated!");
                     this.$router.push("/")
                }).catch((error) => {
                    console.log(error);
                });
            }
        }
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