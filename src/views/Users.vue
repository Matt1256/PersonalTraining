<template>
  <div class="Users">
      <div class="container">
          
        <div class="intro h-100">
            <div class="row h-100 justify-content-center align-items-center">
            </div>
          </div>

          <hr>

          <div class="product-test">


            <h3 class="d-inline-block">User details</h3>

            <div class="table-responsive">
              
                <table class="table">
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Surname</th>
                      <th>Address</th>
                      <th>Modify</th>
                    </tr>
                  </thead>

                  <tbody>
                      <tr v-for="profile in profiles">
                        <td>
                          {{profile.name}}
                        </td>

                        <td>
                          {{profile.surname}}
                        </td>

                        <td>
                          {{profile.address}}
                        </td>

                        <td>

                          <button class="btn btn-primary" @click="editProfile(profile)">Edit</button>
                          <button class="btn btn-danger" @click="deleteProfile(profile)">Delete</button>
                        </td>

                      </tr>


                  </tbody>
                </table>
            </div>

          </div>
      </div>

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
                            <input type="text" name="" v-model="profile.name" placeholder="Name" class="form-control">
                          </div>
                        </div>

                        <div class="col-md-6">
                          <div class="form-group">
                            <input type="text" name="" v-model="profile.surname" placeholder="Surname" class="form-control">
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
                              </div>
                          </div>
                          
                        </div>
        </div>
      
    </div>
  </div>
</div>
</div>

      


    
  </div>
</template>

<script>

import { VueEditor } from "vue2-editor";
import { fb, db } from '../firebase';

export default {
  name: "Users",
  components: {
    VueEditor
  },
  props: {
    msg: String
  },

  data(){
    return {
        profile: {
          id:null,
          name:null,
          surname:null,
          address:null,
          postCode:null,
          phone:null
        },
        activeItem:null,
    }
  },

  firestore(){
      return {
        profiles: db.collection('profiles'),
      }
  },
  methods:{

    editProfile(profile){

      this.profile = profile;
      this.activeItem = profile.id;
      $('#profile').modal('show');
    },

      deleteProfile(doc){

        Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'

      }).then((result) => {

        if (result.value) {

          this.$firestore.profiles.doc(doc.id).delete()
        }
      })
    },


       updateProfile(){
        db.collection('profiles').doc(this.profile.id).update(this.profile);
        Swal.fire({
        title: 'Profile updated',
        text: "",
        type: 'warning',
        confirmButtonColor: '#3085d6',
        confirmButtonText: 'Okay'
      })

      $('#profile').modal('hide');
          
      },


  },
  created(){
    //this.readData();

  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

.img-wrapp{
  position: relative;
}
.img-wrapp span.delete-img{
    position: absolute;
    top: -14px;
    left: -2px;
}
.img-wrapp span.delete-img:hover{
  cursor: pointer;
}

</style>
