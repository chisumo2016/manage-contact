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
            <form action="">
              <div class="mb-2">
                <input type="text" class="form-control" placeholder="Enter Your Name">
              </div>
              <div class="mb-2">
                <input type="text" class="form-control" placeholder="Enter Photo URL">
              </div>
              <div class="mb-2">
                <input type="email" class="form-control" placeholder="Enter Your Email">
              </div>
              <div class="mb-2">
                <input type="number" class="form-control" placeholder="Enter Your Mobile">
              </div>
              <div class="mb-2">
                <input type="text" class="form-control" placeholder="Enter Your Company">
              </div>
              <div class="mb-2">
                <input type="text" class="form-control" placeholder="Enter Your Title">
              </div>
              <div class="mb-2">
                <select name="" id="" class="form-control">
                  <option value="">Select Group</option>
                </select>
              </div>
              <div class="mb-2">
                <input type="text" class="btn btn-success" value="Create">
              </div>
            </form>
          </div>
         <div class="col-md-4">
           <img src="https://www.kindpng.com/picc/m/269-2697881_computer-icons-user-clip-art-transparent-png-icon.png" alt="" class="contact-img">
         </div>
       </div>
    </div>

</template>

<script>
export default {
  name: "AddContact"
}
</script>

<style scoped>

</style>