<script setup lang="ts">
import { RouterView, useRoute, useRouter } from "vue-router";
import Toast from "primevue/toast";
import ThreeColumnLayout from "@/layout/ThreeColumnLayout.vue";
import { onMounted, shallowRef } from "vue";
import { useAccountStore } from "@/features/account/store/useAccountStore";

const layoutComponent: any = shallowRef(null);
const route = useRoute();
const router = useRouter();

router.afterEach(() => {
  if (route.meta?.layout === "basic") layoutComponent.value = RouterView;
  else layoutComponent.value = ThreeColumnLayout;
});

const accountStore = useAccountStore();
onMounted(accountStore.fetchUser);
</script>

<template>
  <component :is="layoutComponent" />
  <Toast />
</template>
