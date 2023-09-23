<script setup lang="ts">
import { defineProps } from "vue";
import { type Schedule, scheduleMock } from "../types/Schedule";

withDefaults(
  defineProps<{
    title: String;
    schedule?: Schedule;
  }>(),
  { schedule: () => scheduleMock }
);

// const isFull = ref<boolean>(false);
</script>

<template>
  <div class="flex flex-col rounded overflow-hidden shadow-md">
    <div class="bg-purple px-3 py-2 text-white">{{ title }}</div>
    <div class="flex flex-col gap-2 p-2 divide-y">
      <div class="flex flex-row items-center gap-2">
        <div class="text-gray-500 text-sm">8:00 - 9:30</div>
        <div class="flex flex-col">
          <div class="text-gray-800 text-lg">Математика</div>
          <div class="text-gray-500 text-sm">Кабинет 101</div>
        </div>
      </div>
      <div class="flex flex-row items-center gap-2">
        <div class="text-gray-500 text-sm">8:00 - 9:30</div>
        <div class="flex flex-col">
          <div class="text-gray-800 text-lg">Математика</div>
          <div class="text-gray-500 text-sm">Кабинет 101</div>
        </div>
      </div>
      <div class="flex flex-row items-center gap-2">
        <div class="text-gray-500 text-sm">8:00 - 9:30</div>
        <div class="flex flex-col">
          <div class="text-gray-800 text-lg">Математика</div>
          <div class="text-gray-500 text-sm">Кабинет 101</div>
        </div>
      </div>
      <div class="flex flex-row items-center gap-2">
        <div class="text-gray-500 text-sm">8:00 - 9:30</div>
        <div class="flex flex-col">
          <div class="text-gray-800 text-lg">Математика</div>
          <div class="text-gray-500 text-sm">Кабинет 101</div>
        </div>
      </div>
      <div class="flex flex-row items-center gap-2">
        <div class="text-gray-500 text-sm">8:00 - 9:30</div>
        <div class="flex flex-col">
          <div class="text-gray-800 text-lg">Математика</div>
          <div class="text-gray-500 text-sm">Кабинет 101</div>
        </div>
      </div>
    </div>
  </div>
</template>

