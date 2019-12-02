<template>
  <div>
    <el-row>
      <el-col :span="5">
        <SideBar />
      </el-col>
      <el-col :span="19">
        <div class="grid-content bg-purple-light">
          <span class="heading">All Products</span>
          <el-table :data="displayedPosts" style="width: 100%">
            <el-table-column label="Name" prop="name"></el-table-column>
            <el-table-column
              label="description"
              prop="description"
            ></el-table-column>
            <el-table-column label="Price" prop="price"></el-table-column>
            <el-table-column label="Quantity" prop="quantity"></el-table-column>
            <el-table-column label="image" prop="image">
              <template slot-scope="scope">
                <el-image
                  style="width: 80px; height: 80px"
                  :src="getPic(scope)"
                  :preview-src-list="srcList"
                ></el-image>
              </template>
            </el-table-column>
            <el-table-column align="right">
              <template slot="header" slot-scope="scope">
                <input type="text" v-on:keyup="getName" v-model="inputName" />
                <el-input
                  placeholder="Please input"
                  v-model="inputName"
                  v-on:keydown="getName"
                ></el-input>
              </template>
              <template slot-scope="scope">
                <el-button size="mini">Edit</el-button>
                <el-button
                  size="mini"
                  type="danger"
                  prop="id"
                  @click="deleteProduct(scope, scope.$index, posts)"
                  >Delete</el-button
                >
              </template>
            </el-table-column>
          </el-table>
        </div>
      </el-col>
    </el-row>

    <div class="clearfix btn-group col-md-2 offset-md-5" v-if="paginateBtn">
      <button
        type="button"
        class="btn btn-sm btn-outline-secondary"
        v-if="page != 1"
        @click="page--"
      >
        <<
      </button>
      <button
        type="button"
        class="btn btn-sm btn-outline-secondary"
        v-for="pageNumber in pages.slice(page - 1, page + 5)"
        :key="pageNumber.id"
        @click="page = pageNumber"
      >
        {{ pageNumber }}
      </button>
      <button
        type="button"
        @click="page++"
        v-if="page < pages.length"
        class="btn btn-sm btn-outline-secondary"
      >
        >>
      </button>
    </div>
  </div>
</template>

<script>
//import Session from "./../common/mixins/Session";
//import AllProducts from "./AllProducts";
import SideBar from "./../common/SideBar";
import axios from "axios";

export default {
  components: {
    //AllProducts,
    SideBar
  },
  props: {
    status: {
      type: Number,
      default: 2
    }
  },
  data() {
    return {
      posts: [
        {
          name: "",
          description: "",
          price: "",
          address: "",
          id: ""
        }
      ],
      search: "",
      inputName: "",
      paginateBtn: true,
      url:
        "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
      srcList: [
        "https://fuss10.elemecdn.com/1/8e/aeffeb4de74e2fde4bd74fc7b4486jpeg.jpeg"
      ],
      show: true,
      page: 1,
      perPage: 9,
      pages: []
    };
  },
  created() {
    this.getPosts();
  },
  watch: {
    posts() {
      this.setPages();
    }
  },
  computed: {
    displayedPosts() {
      return this.paginate(this.posts);
    }
  },
  methods: {
    getName() {
      axios
        .post("http://testapi.test/api/searchProduct/", {
          search: this.inputName
        })
        .then(response => {
          this.posts = response.data;
        })
        .catch(response => {
          console.log(response);
        });
    },
    getPic(products) {
      let image = products.row.image;
      return "http://localhost/lara-vue/public/images/" + image;
    },
    addProductComp() {
      this.show = false;
    },
    hideComp() {
      this.show = true;
    },
    getPosts() {
      axios
        .post("http://testapi.test/api/productList/", { status: this.status })
        .then(response => {
          this.posts = response.data;
        })
        .catch(response => {
          console.log(response);
        });
    },
    setPages() {
      let numberOfPages = Math.ceil(this.posts.length / this.perPage);
      if (numberOfPages >= 2) {
        for (let index = 1; index <= numberOfPages; index++) {
          this.pages.push(index);
        }
      } else {
        this.paginateBtn = false;
      }
    },
    paginate(posts) {
      let page = this.page;
      let perPage = this.perPage;
      let from = page * perPage - perPage;
      let to = page * perPage;
      return posts.slice(from, to);
    }
  }
};
</script>

<style scoped>
.el-row {
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
}
.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
.heading {
  font-size: 25px;
}
</style>
