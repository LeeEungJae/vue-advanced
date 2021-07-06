<template>
  <div id="app">
    <tool-bar />
    <router-view />
  </div>
</template>

<script>
import ToolBar from "./components/Toolbar.vue";

export default {
  components: {
    ToolBar,
  },
};
</script>

<style>
body {
  padding: 0;
  margin: 0;
}
</style>
