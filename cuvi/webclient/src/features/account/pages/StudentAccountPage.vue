<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useAccountStore } from "../store/useAccountStore";
import type { Student } from "../types";

const accountStore = useAccountStore();
const { currentUser, currentUserNameFull } = storeToRefs(accountStore);
</script>

<template>
  <div class="grid grid-cols-[240px_1fr] gap-x-4">
    <div class="max-h-[320px] w-fit justify-self-end">
      <Image :src="currentUser?.picture" :alt="currentUserNameFull" preview v-if="currentUser?.picture" 
        class="rounded-xl overflow-clip" />
    </div>
    <StudentCard :student="(currentUser as Student)" />
  </div>
</template>
