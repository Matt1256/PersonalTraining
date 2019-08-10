<template>
    <div class="hero">
        <div class="container h-100" >
          <div class="row h-100 justify-content-center align-items-center">
            <div class="col-md-5"  >
              <div class="hero-content">
                <h1 class="hero-title">
                  
                  Personal Training
                </h1>
                <p>
                  The goal of our team is to provide quality supplements and training programs in order to better the 
                  health of consumers in an increasingly unhealthy society       
                </p><br>
                  <p>Contact us: xxx xxx xxxx </p>
                  <br>
                  <p>Email: Example@me.com </p>      
                
                
              </div>
            </div>
            <div class="col-md-7">
                
            </div>
          </div>
        </div>
    </div>
</template>

<script>
export default {
  name: "Hero",
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .hero{
    padding-top: 7rem;
    width: 100%;
    height: 500px;
    text-align: left;
  }



</style>
