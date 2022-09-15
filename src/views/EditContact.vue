<template>
  <div class="container mt-3">
    <div class="row">
      <div class="col">
<!--        <pre>{{ contact}}</pre>-->
        <p class="h3 text-success fw-bold">Edit Contact</p>
        <p class="fst-italic">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur deserunt ea eligendi et, eum excepturi, facere in libero mollitia nisi omnis quae qui quidem quos reiciendis rem repellendus unde velit.</p>
      </div>
    </div>
    <!-- End of Container  -->
    <div class="container mt-3">
      <div class="row">
        <div class="col-md-4">
          <form @submit.prevent="updateContact()">
            <div class="mb-2">
              <input  v-model="contact.name" type="text" class="form-control" placeholder="Enter Your Name" required>
            </div>
            <div class="mb-2">
              <input  v-model="contact.photo" type="text" class="form-control" placeholder="Enter Photo URL" required>
            </div>
            <div class="mb-2">
              <input v-model="contact.email" type="email" class="form-control" placeholder="Enter Your Email" required>
            </div>
            <div class="mb-2">
              <input  v-model="contact.mobile" type="number" class="form-control" placeholder="Enter Your Mobile" required>
            </div>
            <div class="mb-2">
              <input v-model="contact.company" type="text" class="form-control" placeholder="Enter Your Company" required>
            </div>
            <div class="mb-2">
              <input v-model="contact.title" type="text" class="form-control" placeholder="Enter Your Title" required>
            </div>
            <div class="mb-2">
              <select  v-model="contact.groupId" v-if="groups.length > 0" name="" id="" class="form-control" required>
                <option value="">Select Group</option>
                <option :value="group.id" v-for="group of groups" :key="group.id">{{group.name}}</option>
              </select>
            </div>
            <div class="mb-2">
              <input type="submit" class="btn btn-success" value="Record Update">
            </div>
          </form>
        </div>
        <div class="col-md-4">
          <img :src="contact.photo" alt="" class="contact-img">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {ContactService} from "@/services/ContactService";

export default {
  name: "EditContact",
  data(){
    return{
      contactId : this.$route.params.contactId,
      loading : false,
      contact:{  //object
        name : '',
        company : '',
        email : '',
        title : '',
        mobile : '',
        photo : '',
        groupId : '',
      },
      errorMessage: null,
      groups : []
    }
  },
  async created() {
    try {
      this.loading  = true;
      let response = await  ContactService.getContact(this.contactId);
      let groupsResponse  = await  ContactService.getAllGroups();
      this.contact = response.data;
      this.groups  = groupsResponse.data
      this.loading  = false;
    }catch (e) {
      this.errorMessage = e;
      this.loading = false;

    }
  },
  methods:{
    async updateContact(){
      try{
        /**Response from ContactService*/
        let response  = await ContactService.updateContact(this.contact, this.contactId); //filled in the form
        /**Success Response*/
        if (response){
          /**Redirect to home page*/
          return this.$router.push('/')
        }else {
          /**Stay onn the say page */
          return this.$router.push(`/contacts/edit/${this.contactId}`);
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