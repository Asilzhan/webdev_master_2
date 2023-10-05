<script setup lang="ts">
import { Cabinet } from "../types";

withDefaults(
  defineProps<{
    cabinets: Cabinet[];
  }>(),
  { cabinets: () => [] }
);
</script>

<template>
  <div class="grid grid-cols-[repeat(auto-fill,_minmax(240px,_1fr))] gap-3 w-full">
    <cabinet-card v-for="cabinet in cabinets" :key="cabinet.name" :cabinet="cabinet" />
  </div>
</template>
