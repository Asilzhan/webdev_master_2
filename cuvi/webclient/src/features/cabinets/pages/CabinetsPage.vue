<script setup lang="ts">
import { ref, onMounted } from "vue";
import { Cabinet } from "../types";
import getUserCabinets from "../api/getUserCabinets";
// import api from "@/module/api";

const cabinets = ref<Cabinet[]>();
async function fetchCabinets() {
  cabinets.value = await getUserCabinets();
}
onMounted(fetchCabinets);
</script>

<template>
  <div class="flex flex-col gap-2">
    <cabinets-block :cabinets="cabinets"></cabinets-block>
  </div>
</template>
