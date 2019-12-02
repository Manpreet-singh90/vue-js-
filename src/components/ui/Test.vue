<template>
  <div>
    <div class="container">
      <h1>Hello World!</h1>
      <div class="row">
        <div class="col-sm-6">
          <p>
            <ul v-for="(product,index) in data" :key="index">
             <div  v-if="(product.status=='active')">
              <li>{{product.id}}</li>
              <button @click="remove(index)">delete</button>
              </div>
              </ul>
           </p>
        </div>
        <div class="col-sm-6" style="background-color:pink;">
        
            <div v-for="(display,index) in data" :key="index">
              <span v-if="(display.status=='inactive')">
              <h5>{{display.id}} {{display.name}}</h5>
              </span>
            </div>
        </div>
      </div>
    </div>
    
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: [
        {
          id: 1,
          name: "abc",
          city: "xyz",
          status: "active"
        },
        {
          id: 2,
          name: "abc222",
          city: "xyz222",
          status: "active"
        }
      ]
    };
  },
  methods: {
    remove(id) {      
      this.data[id].status = "inactive";
    }
  }
};
</script>

<style scoped>
</style>