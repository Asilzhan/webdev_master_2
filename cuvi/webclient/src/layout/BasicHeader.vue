<script setup lang="ts">
// import { useAccountStore } from "@/features/account/store/useAccountStore";
// import { storeToRefs } from "pinia";

// const accountStore = useAccountStore();
// const { currentUser } = storeToRefs(accountStore);
</script>

<template>
  <header class="flex flex-row items-center bg-indigo text-white p-4 h-fit rounded-b-xl drop-shadow-xl">
    <h1 class="text-xl font-bold">CUVi</h1>
    <div class="flex-grow" />
    <account-menu />
    <!-- <router-link :to="{ name: 'StudentAccountPage' }">
      <div class="flex flex-row items-center gap-1 mr-4 font-semibold">
        <i-ph-user class="font-semibold" /> <span>{{ currentUser.firstName }}</span>
      </div>
    </router-link> -->
  </header>
</template>
