<script setup lang="ts"></script>

<template>
  <div class="h-full w-full flex flex-col">
    <div class="bg-violet shadow-md w-full h-18">
      <div class="flex justify-between items-center h-full px-10">
        <div class="flex items-center">
          <div class="text-white text-2xl font-medium">CUVi</div>
          <i-ph-airplane-takeoff-bold class="text-white text-xl ml-2" />
        </div>
        <div class="flex items-center">
          <div class="flex flex-row items-center gap-4 mr-12">
            <slot name="navigation">
              <div>esdfsdf</div>
              <div>esdfsdf</div>
              <div>esdfsdf</div>
            </slot>
          </div>
          <div class="text-white text-lg font-medium">Иванов Иван Иванович</div>
          <i-ph-user class="text-white text-xl ml-2" />
        </div>
      </div>
    </div>
    <div class="h-full w-full p-2">
      <slot />
    </div>
  </div>
</template>

