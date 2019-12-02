<template>
  <div class="container">
    <div class="row">
      <div class="col-md-4" v-for="post in displayedPosts" :key="post.id">
        <div class="card mb-4 box-shadow post-cards">
          <div class="card-body">
            <h5 class="capitalize">{{ post.title | capitalize }}</h5>
            <p class="card-text">{{ post.body.slice(0, 120) }}...</p>
          </div>
        </div>
      </div>
    </div>
    <!--     Loop through the pages array to display each page number       -->
    <div class="clearfix btn-group col-md-2 offset-md-5">
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
import axios from "axios";
export default {
  data() {
    return {
      posts: [],
      baseUrl: "https://jsonplaceholder.typicode.com/",
      page: 1,
      perPage: 9,
      pages: []
    };
  },
  methods: {
    getPosts() {
      axios
        .get(this.baseUrl + "posts")
        .then(response => {
          this.posts = response.data;
        })
        .catch(response => {
          console.log(response);
        });
    },
    setPages() {
      let numberOfPages = Math.ceil(this.posts.length / this.perPage);
      for (let index = 1; index <= numberOfPages; index++) {
        this.pages.push(index);
      }
    },
    paginate(posts) {
      let page = this.page;
      let perPage = this.perPage;
      let from = page * perPage - perPage;
      let to = page * perPage;
      return posts.slice(from, to);
    }
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
  filters: {
    capitalize: function(value) {
      return value.toUpperCase();
    }
  }
};
</script>

<style lang="css">
.pagination {
}
.page-item {
}
</style>
