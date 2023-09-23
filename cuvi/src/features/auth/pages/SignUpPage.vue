<script setup lang="ts">
import { ref } from "vue";
const login = ref<string | null>(null);
const password = ref<string | null>(null);
const passwordCheck = ref<string | null>(null);
</script>

<template>
  <div class="ma-0 w-full h-full bg-slate-100 flex flex-col items-center justify-center">
    <div class="flex-1" />
    <div class="p-8 sm:shadow-lg rounded-lg sm:w-[400px] bg-slate-100 sm:bg-slate-50">
      <div class="flex flex-col justify-center items-center mt-3 mb-5">
        <div class="flex items-center text-black/70">
          <div class="text-4xl font-medium">CUVi</div>
          <i-ph-airplane-takeoff-bold class="text-2xl ml-2" />
        </div>
      </div>

      <div>
        <label for="email" class="block text-black/60 font-medium mb-2">Логин</label>
        <InputText id="email" type="text" class="w-full mb-3 text-lg" v-model="login" />

        <label for="password" class="block text-black/60 font-medium mb-2">Пароль</label>
        <InputText id="password" type="password" class="w-full mb-3 text-lg" v-model="password" @keypress.enter="" />

        <label for="password" class="block text-black/60 font-medium mb-2">Повторите пароль</label>
        <InputText id="password" type="password" class="w-full mb-3 text-lg" v-model="passwordCheck" @keypress.enter="" />

        <Button label="Войти" icon="pi pi-user" class="w-full mt-10 h-12 border-0 focus:shadow-none text-lg" @click="" />
      </div>
    </div>
    <div class="flex-1" />
    <div class="flex-1" />
  </div>
</template>

