<template>
  <div class="container">
    <div class="container mt-3">
      <div class="row">
        <div class="col">

          <p class="h3 text-success fw-bold">View Contact </p>
          <p class="fst-italic">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur deserunt ea eligendi et, eum excepturi, facere in libero mollitia nisi omnis quae qui quidem quos reiciendis rem repellendus unde velit.</p>
        </div>
      </div>
    </div>
  </div><!--End of Container-->
  <!--  Display Spinner-->
  <div v-if="loading">
    <div class="container">
      <div class="row">
        <div class="col">
          <Spinner/>
        </div>
      </div>
    </div>
  </div><!--  End of Spinner-->

  <!--  Error Message-->
  <div v-if="!loading && errorMessage">
    <div class="container mt-3">
      <div class="row">
        <div class="col">
          <p class="h4 text-danger fw-bold">{{ errorMessage}}</p>
        </div>
      </div>
    </div>
  </div> <!-- End of  Error Message-->

  <div class="container" v-if="!loading && isDone()">
      <div class="row align-items-center">
        <div class="col-md-4">
          <img :src="contact.photo" alt="" class="contact-img-show">
        </div>
        <div class="col-md-6">
          <ul class="list-group">
            <li class="list-group-item">Name: <span class="fw-bold">{{ contact.name }}</span></li>
            <li class="list-group-item">Email: <span class="fw-bold">{{ contact.email }}</span></li>
            <li class="list-group-item">Mobile: <span class="fw-bold">{{ contact.mobile }}</span></li>
            <li class="list-group-item">Company: <span class="fw-bold">{{ contact.company}}</span></li>
            <li class="list-group-item">Title: <span class="fw-bold">{{ contact.title }}</span></li>
            <li class="list-group-item">Group: <span class="fw-bold">{{ group.name }}</span></li>
          </ul>
        </div>
      </div>
    <div class="row mt-3">
      <div class="col">
        <router-link to="/" class="btn btn-success"><i class="fa fa-arrow-alt-circle-left"></i>Back</router-link>
      </div>
    </div>
  </div><!--End of Container-->
</template>

<script>
import {ContactService} from "@/services/ContactService";
import Spinner from "@/components/Spinner";

export default {
  name: "ShowContact",
  components: {Spinner},
  data(){
    return{
      contactId : this.$route.params.contactId,
      loading :false,
      contact: {},
      errorMessage : null,
      group: {},
    }
  },
  async created() {
    /**Contact Particular Data*/
    try {
      this.loading = true;
      let response = await  ContactService.getContact(this.contactId);
      let groupResponse = await  ContactService.getGroup(response.data);
      this.contact = response.data;
      this.group = groupResponse.data;
      this.loading = false;
    }catch (e) {
      this.errorMessage = e;
      this.loading = false;
    }
  },
  methods:{
    /**Checking if the objects are not empty*/
    isDone(){
      return Object.keys(this.contact).length >0 && Object.keys(this.group).length > 0;
    }
  }
}
</script>

<style scoped>

</style>