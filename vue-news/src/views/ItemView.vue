<template>
  <div>
    <div>
      <section>
        <!-- 질문 상세 영역 -->
        <user-profile :info="fetchedItem">
          <!-- <div slot="username">{{ fetchedItem.user }}</div> -->
          <router-link slot="username" :to="`/user/${fetchedItem.user}`">{{
            fetchedItem.user
          }}</router-link>
          <template slot="time">{{
            "Posted " + fetchedItem.time_ago
          }}</template>
        </user-profile>
      </section>
      <section>
        <h2>{{ fetchedItem.title }}</h2>
      </section>
      <section>
        <!-- 질문 댓글  -->
        <div v-html="fetchedItem.content"></div>
      </section>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import UserProfile from "../components/UserProfile.vue";

export default {
  components: { UserProfile },
  computed: {
    ...mapGetters(["fetchedItem"]),
  },
  created() {
    const id = this.$route.params.id;
    this.$store.dispatch("FETCH_ITEM", id);
  },
};
</script>

<style scoped>
.user-container {
  display: flex;
  align-items: center;
  padding: 0.5rem;
}
.fa-user {
  font-size: 2.5rem;
}

.user-description {
  padding-left: 8px;
}

.time {
  font-size: 0.7rem;
}
</style>
