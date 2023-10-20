<script setup lang="ts">
import useApiClient from "@/module/api";
import { onMounted } from "vue";

const api = useApiClient();
onMounted(async () => {
  console.log("hello request:");
  const data = await api.get("hello").text();

  console.log(data);
});
</script>

<template></template>

