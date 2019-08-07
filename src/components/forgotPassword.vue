<template>
    <div class="forgotPassword">
    <div id="forgotPassword" class="modal fade" tabindex="-1" role="dialog">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Forgot Password</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <p>Enter your email</p>
      </div>
      <div class="form-group">
            <input type="text" v-model="email" class="form-control" id="email">
        </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-primary" @click="resetPassword()">Submit</button>
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>
</div>
</template>

<script>
import { fb, db } from '../firebase';

export default {
    name: 'forgotPassword',
    props: {
        msg: String
    },

      methods:{
      resetPassword(){
          const auth = fb.auth();      
          
          if(this.email == null || this.email == ''){

            Swal.fire({
            title: 'Enter an email',
            type: 'warning',
            confirmButtonColor: '#3085d6',
            confirmButtonText: 'Okay'

      })
          }

          auth.sendPasswordResetEmail(this.email).then(() =>  {
               alert("Email sent");
                $('#forgotPassword').modal('hide');
          }).catch((error) =>  {

        Swal.fire({
        title: 'Email does not exist',
        type: 'warning',
        confirmButtonColor: '#3085d6',
        confirmButtonText: 'Okay'

      })

          });
      },
    }
}
</script>