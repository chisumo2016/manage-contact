<template>
   <div class="container mt-3">
     <div class="row">
       <div class="col">
         <p class="h3 text-success fw-bold">Contact Manager
          <!-- Add Link   -->
         <router-link to="/contacts/add" class="btn btn-success btn-sm"><i class="fa fa-plus-circle"></i>New Contact</router-link>
         </p>
         <p class="fst-italic">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis, ea odit repellat sed sequi tenetur voluptate. Ab accusamus animi dicta enim, eum eveniet ex excepturi expedita nesciunt qui ratione, suscipit.</p>
         <!-- Search Box -->
         <form action="">
           <div class="col-md-6">
             <div class="row">
               <div class="row">
                 <div class="col">
                   <input type="text" class="form-control" placeholder="Search Name">
                 </div>
                 <div class="col">
                   <input type="submit" class="btn btn-outline-dark">
                 </div>
               </div>
             </div>
           </div>
         </form>
         <!-- End of Form Search Box -->
       </div>
     </div>
   </div>  <!-- End of Container -->
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
  <div class="container mt-3" v-if="contacts.length > 0">
    <div class="row">
      <div class="col-md-6"  v-for="contact in contacts" :key="contact">
        <div class="card my-2 list-group-item-success shadow-lg">
          <div class="card-body">
            <div class="row align-items-center">
              <div class="col-sm-4">
                <img :src="contact.photo" alt="" class="contact-img">
              </div>
              <div class="col-sm-7">
                  <ul class="list-group">
                    <li class="list-group-item">Name: <span class="fw-bold">{{contact.name}}</span></li>
                    <li class="list-group-item">Email: <span class="fw-bold"> {{contact.email}}</span></li>
                    <li class="list-group-item">Mobile: <span class="fw-bold"> {{contact.mobile}}</span></li>
                  </ul>
              </div>
              <div class="col-sm-1 d-flex flex-column justify-content-center align-items-center">
                 <router-link to="/contacts/show/:contactId" class="btn btn-warning my-1"><i class="fa fa-eye"></i></router-link>
                 <router-link to="/contacts/edit/:contactId" class="btn btn-primary my-1"><i class="fa fa-pen"></i></router-link>
                 <button class="btn btn-danger my-1"><i class="fa fa-trash"></i></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
import {ContactService} from "@/services/ContactService";
import Spinner from "@/components/Spinner";

export default {
  name: "ContactManager",
  components: {Spinner},
  /** Declare the properties/Data*/
  data(){
    return {
      loading: false,
      contacts: [],
      errorMessage: null
    }
  },

  /** Life Cycle Hooks*/
  async created() {
    try{
        this.loading = true;
        let response = await  ContactService.getAllContacts();
        //let response = await  this.getAllContactsData();
        this.contacts = response.data;
        this.loading = false;
    }catch (error){
      this.errorMessage = error;
      this.loading = false
    }
  },
  methods : {


  }
}
</script>

<style scoped>

</style>


<!--//getAllContactsData:function(){},-->
<!--getAllContactsData : async() => {-->

<!--//return ContactService.getAllContacts()-->
<!--},-->