<script setup lang="ts">
import { use } from "echarts/core";
import { CanvasRenderer } from "echarts/renderers";
import { LineChart } from "echarts/charts";
import {
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  GridComponent,
  DataZoomComponent,
} from "echarts/components";
import VChart from "vue-echarts";
import { ref } from "vue";

use([
  DataZoomComponent,
  GridComponent,
  CanvasRenderer,
  LineChart,
  TitleComponent,
  TooltipComponent,
  LegendComponent,
]);

const fetchData = async () => {
  const response = await fetch(`http://localhost:3000/costGraphData`);
  return await response.json();
};

const data = await fetchData();
console.log(data);

const option = ref({
  title: {
    text: "Graph",
    left: "center",
  },
  tooltip: {
    trigger: "axis",
  },
  xAxis: {
    data: data.map((value: { date: any }) => {
      return value.date;
    }),
  },
  yAxis: {},
  dataZoom: [
    {
      startValue: 1,
    },
    {
      type: "inside",
    },
  ],
  series: {
    name: "cost",
    type: "line",
    data: data.map((value: { cost: any }) => {
      return value.cost;
    }),
  },
});
</script>

<template>
  <div>
    <v-chart class="chart" :option="option" />
  </div>
</template>

<style scoped>
.chart {
  height: 100vh;
}
</style>
