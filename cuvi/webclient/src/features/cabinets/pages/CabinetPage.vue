<script setup lang="ts">
import { ref, onMounted } from "vue";
import { Cabinet } from "../types";
import { getCabinetById } from "../api/getUserCabinets";
import { useRoute, useRouter } from "vue-router";
// import api from "@/module/api";

const cabinet = ref<Cabinet | undefined>({} as Cabinet);

const route = useRoute();
const router = useRouter();
async function fetchCabinet() {
  const data = await getCabinetById(route.params.id as string);
  if (!data) router.push({ name: "CabinetNotFoundPage" });
  cabinet.value = data;
}
onMounted(fetchCabinet);
</script>

<template>
  <h2 class="text-xl font-bold">
    {{ cabinet?.name }}
  </h2>
  <p>{{ cabinet?.description }}</p>
</template>

