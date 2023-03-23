<template>
  <div class="main-sub-category-div">
    <div class="text-lg font-bold">Sub Categories</div>
    <div v-if="blogs" class="postCards grid md:grid-cols-3 sm:grid-cols-1">
      <div
        v-for="({ id, translations, image: blogImage }, index) of blogs"
        :key="index"
        class="max-w-sm rounded overflow-hidden shadow-lg m-5"
      >
        <img class="w-full" :src="blogImage" />
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2">
            {{ translations[0]?.postTitle }}
          </div>
        </div>
        <div class="px-6 pt-4 pb-2">
          <span
            class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
            ><router-link
              :to="{
                path: `/blog/${id}`,
              }"
              >Explore</router-link
            ></span
          >
        </div>
      </div>
    </div>
  </div>
</template>
<script>
/* eslint-disable */
import axios from "axios";
export default {
  name: "SubCategories",
  props: {
    catName: {
      type: String,
      default: "Beginner",
    },
    parentId: {
      type: Number,
      default: 1,
    },
  },
  data() {
    return {
      loading: false,
      blogs: [],
      image: null,
    };
  },
  created() {
    this.fetchBlogs();
  },
  methods: {
    async fetchBlogs() {
      this.loading = true;
      const { data } = await axios.get(
        `${process.env.VUE_APP_BACKEND_API_URL}categories/${this.parentId}/${this.catName}`
      );
      this.loading = false;
      if (data) {
        const { image, posts } = data;
        this.blogs = posts;
        this.image = image;
      }
    },
  },
};
</script>
