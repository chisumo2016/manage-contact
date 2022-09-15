<template>
  <div class="container">
    <div class="container mt-3">
      <div class="row">
        <div class="col">
          <p class="h3 text-success fw-bold">View Contact</p>
          <p class="fst-italic">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur deserunt ea eligendi et, eum excepturi, facere in libero mollitia nisi omnis quae qui quidem quos reiciendis rem repellendus unde velit.</p>
        </div>
      </div>
    </div>
  </div><!--End of Container-->
  <div class="container">
      <div class="row align-items-center">
        <div class="col-md-4">
          <img src="https://www.kindpng.com/picc/m/269-2697881_computer-icons-user-clip-art-transparent-png-icon.png" alt="" class="contact-img-show">
        </div>
        <div class="col-md-6">
          <ul class="list-group">
            <li class="list-group-item">Name: <span class="fw-bold"> Name</span></li>
            <li class="list-group-item">Email: <span class="fw-bold"> Email</span></li>
            <li class="list-group-item">Mobile: <span class="fw-bold"> Mobile</span></li>
            <li class="list-group-item">Company: <span class="fw-bold"> Name</span></li>
            <li class="list-group-item">Title: <span class="fw-bold"> Email</span></li>
            <li class="list-group-item">Group: <span class="fw-bold"> Mobile</span></li>
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
export default {
  name: "ViewContact"
}
</script>

<style scoped>

</style>