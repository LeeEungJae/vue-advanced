<template>
  <div id="app">
    <h1>Chart.js</h1>
    <bar-chart />
    <line-chart />
  </div>
</template>

<script>
import BarChart from "./components/BarChart.vue";
import LineChart from "./components/LineChart.vue";
export default {
  name: "App",
  components: {
    BarChart,
    LineChart,
  },
};
</script>

<style></style>
