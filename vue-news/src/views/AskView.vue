<template>
  <div>
    <p v-for="(item, index) in ask" v-bind:key="index">
      <router-link :to="`item/${item.id}`">{{ item.title }}</router-link>
      <small>{ item.time_ago }} by {{ item.user }}</small>
    </p>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {};
  },
  computed: {
    // ...mapState({ ask: (state) => state.ask }),
    ...mapGetters({
      ask: "fetchedAsk",
    }),
  },
  created() {
    this.$store.dispatch("FETCH_ASK");
  },
};
</script>

<style></style>
