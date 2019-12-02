<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-5 mt-4">
        <form>
              <h4>User</h4>
    <div>
        <table>
            <tr>
                <th>Name</th>
                <!-- <th>Select All<input type="checkbox" @click="selectAll" v-model="allSelected"></th> -->
            </tr>
            <tr v-for="user in sub">
                <td>{{ user.name }}</td>
                <td><input type="checkbox"  v-model="userData.sub1"  :value="user.id"></td>
            </tr>
        </table>
    </div>

          <div class="input-group mb-3 input-group-lg">
            <div class="input-group-prepend">
              <span class="input-group-text">First Name</span>
            </div>
            <input type="text" class="form-control" v-model="userData.firstName" />
          </div>
          <div class="input-group mb-3 input-group-lg">
            <div class="input-group-prepend">
              <span class="input-group-text">Last Name</span>
            </div>
            <input type="text" class="form-control" v-model="userData.lastName" />
          </div>
          <div class="input-group mb-3 input-group-lg">
            <div class="input-group-prepend">
              <span class="input-group-text">Email</span>
            </div>
            <input type="text" class="form-control" v-model="userData.email" />
          </div>
          <div class="input-group mb-3 input-group-lg">
            <div class="input-group-prepend">
              <span class="input-group-text">Phone No</span>
            </div>
            <input type="text" class="form-control" v-model="userData.phone" />
          </div>
          <div class="input-group mb-3 input-group-lg">
            <div class="input-group-prepend">
              <span class="input-group-text">Address</span>
            </div>
            <textarea name id class="form-control" v-model="userData.address"></textarea>
          </div>
          <div class="input-group mb-3 input-group-lg">
            <div class="input-group-prepend">
              <span class="input-group-text">Course</span>
            </div>
            <select name id class="form-control" v-model="userData.course">
              <option value>Select Course</option>
              <option value="10th">10th</option>
              <option value="12th">12th</option>
              <option value="Graduate">Graduate</option>
              <option value="Post Graduate">Post Graduate</option>
            </select>
          </div>
          <div class="input-group mb-3 input-group-lg">
            <div class="input-group-prepend">
              <span class="input-group-text">Subjects</span>
            </div>
            <label class="form-control">
              <input type="checkbox" value="Punjabi" :checked="true" v-model="userData.subjects" />Punjabi
            </label>
            <label class="form-control">
              <input type="checkbox" value="English" v-model="userData.subjects" />English
            </label>
            <label class="form-control">
              <input type="checkbox" value="Math" v-model="userData.subjects" />Math
            </label>
          </div>
          <div class="input-group mb-3 input-group-lg">
            <div class="input-group-prepend">
              <span class="input-group-text">Time Period</span>
            </div>
            <select name id class="form-control" v-model="userData.timePeriod">
              <option value>Select Time Period</option>
              <option value="1 Day">1 Day</option>
              <option value="2 Days">2 Days</option>
              <option value="5 Days">5 Days</option>
              <option value="15 Days">15 Days</option>
            </select>
          </div>
          <div class="input-group mb-3 input-group-lg">
            <div class="input-group-prepend">
              <span class="input-group-text">Submission Date</span>
            </div>
            <input type="date" class="form-control" v-model="userData.submissionDate" />
          </div>
          <div class="text-center">
            <button
              v-if="(insert)"
              type="button"
              class="btn btn-success form-control"
              @click="saveDetails()"
            >Save Details</button>
            <button
              v-if="(!insert)"
              type="button"
              class="btn btn-success form-control"
              @click="updateDetails()"
            >Update Details</button>
          </div>
        </form>
      </div>
      <div class="col-md-7">
        <div class="table-responsive">
          <table class="table text-center">
            <thead>
              <tr>
                <th>Sr.No</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Phone No.</th>
                <th>Address</th>
                <th>Course</th>
                <th>Subjects</th>
                <th>Time Period</th>
                <th>Submission Date</th>
                <th>user</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(user,key) in users" :key="key">
                <td>{{key}}</td>
                <td>{{user.firstName}}</td>
                <td>{{user.lastName}}</td>
                <td>{{user.email}}</td>
                <td>{{user.phone}}</td>
                <td>{{user.address}}</td>
                <td>{{user.course}}</td>
                <td>
                  <span v-for="(subject,index) in user.subjects" :key="index">{{subject}}</span>
                </td>
                <td>{{user.timePeriod}}</td>
                <td>{{user.submissionDate}}</td>
                 <td>
                  <span v-for="(subject,index) in user.sub1" :key="index">{{subject}}</span>
                </td>
                <td>
                  <div class="btn-group">
                    <button type="button" class="btn btn-dark" @click="editUser(key)">
                      Edit</i>
                    </button>
                    <button type="button" class="btn btn-danger" @click="deleteUser(key)">
                      delete</i>
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
            <tfoot>
              <!-- <tr>
                                <th>Sr.No</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Email</th>
                                <th>Phone No.</th>
                                <th>Address</th>
                                <th>Course</th>
                                <th>Subjects</th>
                                <th>Time Period</th>
                                <th>Submission Date</th>
              </tr>-->
            </tfoot>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    console.log("Component mounted.");
  },
  data() {
    return {
      imgSrc: "./images/a.png",
      userData: {
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        address: "",
        course: "",
        subjects: [],
        timePeriod: "",
        submissionDate: "",
        sub1:[]
      },
      users: [],
      editKey: 0,
      insert: true,
      sub: [
        { id: "Shad", name: "Shad" },
        { id: "Duane", name: "Duane" },
        { id: "Myah", name: "Myah" },
        { id: "Kamron", name: "Kamron" },
        { id: "Brendon", name: "Brendon" }
      ],
      userIds: ["Duane"]
    };
  },
  methods: {
    abc() {
      value: "Math";
      checked: true;
    },
    saveDetails() {
        console.log(this.userData)
      this.users.push(this.userData);
      this.userData = new Object();
      this.userData.subjects = [];
    },
    editUser(key) {
      this.userData = this.users[key];
      this.insert = false;
      this.editKey = key;
      //this.userData.sub1.push("Shad");

    //   this.userData = {
    //     firstName: this.users[key].firstName,
    //     lastName: this.users[key].lastName,
    //     email: this.users[key].email,
    //     phone: this.users[key].phone,
    //     address: this.users[key].address,
    //     course: this.users[key].course,
    //     subjects: [],
    //     timePeriod: this.users[key].timePeriod,
    //     submissionDate: this.users[key].submissionDate,
    //     sub1:"Shad"
    //     this.
    //   };
    },
    updateDetails() {
      this.insert = true;
      this.users[this.editKey] = this.userData;
      this.userData = new Object();
      this.userData.subjects = [];
    },
    deleteUser(key) {
      let res = confirm("Are you Sure ?");
      if (res) this.users.splice(key, 1);
    }
  }
};
</script>
