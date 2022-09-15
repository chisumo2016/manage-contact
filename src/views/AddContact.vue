<template>
  <div class="container mt-3">
    <div class="row">
      <div class="col">
        <p class="h3 text-success fw-bold">Add Contact</p>
        <p class="fst-italic">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur deserunt ea eligendi et, eum excepturi, facere in libero mollitia nisi omnis quae qui quidem quos reiciendis rem repellendus unde velit.</p>
      </div>
    </div>
  </div>
  <!-- End of Container  -->

    <div class="container mt-3">
       <div class="row">
          <div class="col-md-4">
            <form @submit.prevent="ContactCreate()">
              <div class="mb-2">
                <input v-model="contact.name" type="text" class="form-control" placeholder="Enter Your Name">
              </div>
              <div class="mb-2">
                <input v-model="contact.photo" type="text" class="form-control" placeholder="Enter Photo URL">
              </div>
              <div class="mb-2">
                <input v-model="contact.email" type="email" class="form-control" placeholder="Enter Your Email">
              </div>
              <div class="mb-2">
                <input v-model="contact.mobile" type="number" class="form-control" placeholder="Enter Your Mobile">
              </div>
              <div class="mb-2">
                <input v-model="contact.company" type="text" class="form-control" placeholder="Enter Your Company">
              </div>
              <div class="mb-2">
                <input v-model="contact.title" type="text" class="form-control" placeholder="Enter Your Title">
              </div>
              <div class="mb-2" v-if="groups.length > 0">
                <select v-model="contact.groupId" name="" id="" class="form-control">
                  <option value="">Select Group</option>
                  <option :value="group.id" v-for="group in groups" :key="group.id">{{ group.name}}</option>
                </select>
              </div>
              <div class="mb-2">
                <input type="submit" class="btn btn-success" value="Create">
              </div>
            </form>
          </div>
         <div class="col-md-4">
           <img :src="contact.photo" alt="" class="contact-img">
         </div>
       </div>
    </div>
<!--    <pre>{{ contact}}</pre>-->
</template>

<script>
import {ContactService} from "@/services/ContactService";

export default {
  name: "AddContact",

  /** Declare the fields from database*/
  data(){
    return {
      contact:{
        name : '',
        company : '',
        email : '',
        title : '',
        mobile : '',
        photo : '',
        groupId : '',
      },
      groups:[]
    }
  },
 async created() {
    try{
      let response = await ContactService.getAllGroups();
      this.groups  = response.data;
    }catch(error){
      console.log(error);
    }
  },
  methods:{
    async ContactCreate(){
      try{
        /**Response from ContactService*/
        let response  = await ContactService.createContact(this.contact); //filled in the form
        /**Success Response*/
        if (response){
          /**Redirect to home page*/
          return this.$router.push('/')
        }else {
          /**Stay onn the say page */
          return this.$router.push('/contacts/add')
        }
      }catch (e) {
        console.log(e);
      }
    }
  }
}
</script>
<style scoped>

</style>