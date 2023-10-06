<script setup lang="ts">
import { RouterView, useRoute, useRouter } from "vue-router";
import Toast from "primevue/toast";
import ThreeColumnLayout from "@/layout/ThreeColumnLayout.vue";
import { shallowRef } from "vue";

const layoutComponent: any = shallowRef(null);
const route = useRoute();
const router = useRouter();

router.afterEach(() => {
  if (route.meta?.layout === "basic") layoutComponent.value = RouterView;
  else layoutComponent.value = ThreeColumnLayout;
});
</script>

<template>
  <component :is="layoutComponent" />
  <Toast />
</template>
