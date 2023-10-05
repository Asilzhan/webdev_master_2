<script setup lang="ts">
import { onMounted } from "vue";

onMounted(() => {
  console.log("LeftMenu is mounted");
});
</script>

<template>
  <div class="flex flex-col gap-y-4 bg-white rounded-xl overflow-clip drop-shadow-sm">
    <ul class="my-2 font-mono">
      <router-link :to="{ name: 'StudentMainPage' }" class="link" active-class="bg-gray-300"> Главная </router-link>
      
      <router-link :to="{ name: 'StudentSchedulePage' }" class="link" active-class="bg-gray-300"> Расписание </router-link>
      
      <router-link :to="{ name: 'CabinetsPage' }" class="link" active-class="bg-gray-300"> Кабинеты </router-link>
    </ul>
  </div>
</template>

<style scoped lang="scss">
.link {
  @apply p-4 block text-gray-700 hover:bg-gray-200 hover:text-gray-900 focus:outline-none focus:bg-gray-300 focus:text-gray-900 active:bg-gray-400;
}
</style>
