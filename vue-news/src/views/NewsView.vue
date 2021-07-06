<template>
  <div>
    <div v-for="(item, index) in news" v-bind:key="index">{{ item.title }}</div>
  </div>
</template>

<script>
import { fetchNewsList } from "../api/index";

export default {
  data() {
    return {
      news: [],
    };
  },
  created() {
    fetchNewsList()
      .then((response) => {
        this.news = response.data;
      })
      .catch();
  },
};
</script>

<style></style>
