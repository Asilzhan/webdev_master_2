<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useAccountStore } from "../store/useAccountStore";
import type { Student } from "../types";

const accountStore = useAccountStore();
const { currentUser, currentUserNameFull } = storeToRefs(accountStore);
</script>

<template>
  <div class="grid grid-cols-[auto_1fr] gap-x-4">
    <div class="w-[240px] max-h-[320px]">
      <Image :src="currentUser.image" :alt="currentUserNameFull" preview v-if="currentUser.image" class="rounded-xl overflow-clip"></Image>
    </div>
    <StudentCard :student="(currentUser as Student)" />
  </div>
</template>
