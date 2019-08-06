<template>
    <div class="profile">
    <div id="profile" class="modal fade" tabindex="-1" role="dialog">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">My Profile</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <p>Configure profile settings</p>
      </div>
      <div class="form-group">
             <div class="col-md-6">
                          <div class="form-group">
                            <input type="text" name="" v-model="profile.name" placeholder="Full name" class="form-control">
                          </div>
                        </div>

                        <div class="col-md-6">
                          <div class="form-group">
                            <input type="text"  v-model="profile.phone" placeholder="Phone" class="form-control">
                          </div>
                        </div>

                        <div class="col-md-12">
                          <div class="form-group">
                            <input type="text"  v-model="profile.address" placeholder="Address" class="form-control">
                          </div>
                        </div>

                        <div class="col-md-8">
                          <div class="form-group">
                            <input type="text"  v-model="profile.postCode" placeholder="Postcode" class="form-control">
                          </div>
                        </div>

                        <div class="col-md-4">
                          <div class="form-group">
                              <input type="submit" @click="updateProfile" value="Save Changes" class="btn btn-primary w-100">
                              <input type="submit" @click="logOut" value="Log Out" class="btn btn-primary w-100">
                          </div>
                        </div>
        </div>
      
    </div>
  </div>
</div>
</div>
</template>

<script>
import { fb, db } from '../firebase';

export default {
    name: 'profile',
    props: {
        msg: String
    },

    data(){
    return {
        profile: {
          name:null,
          phone:null,
          address:null,
          postcode:null
                }
            }
 },

    firestore(){
      const user = fb.auth().currentUser;
      return {
        profile: db.collection('profiles').doc(user.uid),
      }
  },

      methods:{
   updateProfile(){
          this.$firestore.profile.update(this.profile);
          alert("Profile updated");
          $('#profile').modal('hide');
      },

      logOut(){
        fb.auth().signOut()
        .then(() =>{
            this.$router.replace('/');
            location.reload();
        })
        .catch((err) => {
            console.log(err);
        })
    },
    }
}
    
</script>