<script setup lang="ts">
import { computed } from "vue";
import type { Cabinet } from "../types";

const props = defineProps<{
  cabinet: Cabinet;
}>();

const cabinetAbbr = computed(() => {
  if (!props.cabinet) return "";
  const words = props.cabinet.name.split(" ");
  if (words.length == 1) return words[0].substring(0, 2);

  return words.map((word) => word[0].toUpperCase()).join("");
});
</script>

<template>
  <basic-card class="cursor-pointer hover:bg-gray-200">
    <div class="flex flex-col items-center md:min-w-[240px]">
      <div class="w-[60px] h-[60px] bg-rose flex items-center justify-center rounded-sm font-mono">
        <span class="text-white font-semibold select-none">
          {{ cabinetAbbr }}
        </span>
      </div>
      <p class="text-center pt-2 font-400">{{ cabinet.name }}</p>
    </div>
  </basic-card>
</template>
