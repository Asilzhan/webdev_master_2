<script setup lang="ts">
import { ref } from "vue";
// import { RouterLink } from "vue-router";
const login = ref<string | null>(null);
const password = ref<string | null>(null);
const rememberMe = ref<boolean>(false);
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

      <div class="text-black/60 font-medium">
        <label for="email" class="block mb-2">Логин</label>
        <InputText id="email" type="text" class="w-full mb-3 text-lg" v-model="login" />

        <label for="password" class="block mb-2">Пароль</label>
        <InputText id="password" type="password" class="w-full mb-3 text-lg" v-model="password" @keypress.enter="" />

        <div class="flex mt-2">
          <Checkbox binary v-model="rememberMe" inputId="rememberMe" name="rememberMe" />
          <label for="rememberMe" class="ml-2"> Запомнить </label>
        </div>

        <router-link :to="{ name: 'StudentMainPage' }">
          <template v-slot:default="{ navigate }">
            <Button label="Войти" icon="pi pi-user" class="w-full mt-10 h-12 border-0 focus:shadow-none text-lg" @click="navigate()" />
          </template>
        </router-link>
      </div>
    </div>
    <div class="flex-1" />
    <div class="flex-1" />
  </div>
</template>

