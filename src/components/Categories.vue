<template>
  <div class="main-category-div">
    <div class="text-lg font-bold">Categories</div>
    <div
      v-if="subCategories.length > 1"
      class="postCards grid md:grid-cols-3 sm:grid-cols-1"
    >
      <div
        v-for="(item, index) of subCategories"
        :key="index"
        class="max-w-sm rounded overflow-hidden shadow-lg m-5"
      >
        <img class="w-full" :src="item.image" alt="Sunset in the mountains" />
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2">{{ item.name }}</div>
        </div>
        <div class="px-6 pt-4 pb-2">
          <span
            class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
            ><router-link
              :to="{
                path: `/sub-categories/${item.id}/${item.name}`,
              }"
              >Explore</router-link
            >
          </span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
/* eslint-disable */
import axios from "axios";
export default {
  name: "Categories",
  props: {
    parentCategoryId: {
      type: Number,
      default: "1",
    },
  },
  data() {
    return {
      loading: false,
      subCategories: [],
    };
  },
  created() {
    this.fetchSubCategories();
  },
  methods: {
    async fetchSubCategories() {
      this.loading = true;
      const { data } = await axios.get(
        `${process.env.VUE_APP_BACKEND_API_URL}categories/${this.parentCategoryId}`
      );
      this.loading = false;
      this.subCategories = data;
    },
  },
};
</script>
