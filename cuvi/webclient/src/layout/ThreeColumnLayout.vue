<script setup lang="ts">
import BasicHeader from "./BasicHeader.vue";
</script>

<template>
  <div>
    <BasicHeader class="col-span-6" />
    <div class="grid grid-cols-6 bg-slate/10 h-screen w-screen grid-rows-[auto_1fr] gap-4 p-4 ">
      <!-- Left Hamburger and Sidebar -->
      <div class="col-span-0 md:col-span-1">
        <router-view name="left"></router-view>
      </div>

      <!-- Default Content -->
      <div class="col-span-6 md:col-span-4">
        <router-view name="default"></router-view>
      </div>

      <!-- Right Hamburger and Sidebar -->
      <div class="col-span-0 md:col-span-1">
        <router-view name="right"></router-view>
      </div>
    </div>
  </div>
</template>
