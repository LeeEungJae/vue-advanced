<template>
  <div>
    <div v-for="(item, index) in ask" v-bind:key="index">{{ item }}</div>
  </div>
</template>

<script>
import { fetchAskList } from "../api/index";
export default {
  data() {
    return {
      ask: [],
    };
  },
  created() {
    fetchAskList()
      .then((response) => {
        this.ask = response.data;
      })
      .catch();
  },
};
</script>

<style></style>
