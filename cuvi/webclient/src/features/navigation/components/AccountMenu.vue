<script setup lang="ts">
import { useAccountStore } from "@/features/account/store/useAccountStore";
import { storeToRefs } from "pinia";
import { ref } from "vue";
import { useRouter } from "vue-router";

const menu = ref();
const toggle = (event: any) => {
  menu.value.toggle(event);
};

const items = ref([
  // {
  //   label: "Options",
  //   items: [
  //     {
  //       label: "Update",
  //       icon: "pi pi-refresh",
  //       command: () => {},
  //     },
  //     {
  //       label: "Delete",
  //       icon: "pi pi-times",
  //       command: () => {},
  //     },
  //   ],
  // },
]);

const router = useRouter();
function profileClick() {
  router.push({ name: "StudentAccountPage" });
}

const accountStore = useAccountStore();
const { currentUser, currentUserNameShort } = storeToRefs(accountStore);
</script>

<template>
  <Button
    :label="currentUserNameShort"
    type="button"
    @click="toggle"
    aria-haspopup="true"
    aria-controls="overlay_menu"
    text
    class="text-white font-medium focus:shadow-none outline-none">
    <template v-slot:icon>
      <i-ph-user class="mr-1" />
    </template>
  </Button>
  <!-- <Menu ref="menu" id="overlay_menu" :model="items" :popup="true" /> -->
  <Menu :model="items" ref="menu" id="overlay_menu" popup>
    <template #start>
      <button @click="profileClick()" class="w-full flex items-center p-2 pl-3 hover:bg-gray-200">
        <Avatar :image="currentUser.image" class="mr-2 overflow-clip" shape="circle" />
        <div class="flex flex-col items-start">
          <span class="font-bold">{{ currentUserNameShort }}</span>
          <span class="text-sm">Студент</span>
        </div>
      </button>
    </template>
    <template #item="{ item, label, props }">
      <a class="flex" v-bind="props.action">
        <span v-bind="props.icon" />
        <span v-bind="props.label">{{ label }}</span>
        <Badge v-if="item.badge" class="ml-auto" :value="item.badge" />
      </a>
    </template>
    <template #end>
      <router-link v-slot="{ navigate }" :to="{ name: 'SignInPage' }" custom> 
        <button class="w-full flex items-center p-2 pl-4 hover:bg-gray-200" @click="navigate()">
          <i-ph-sign-out class="pi pi-sign-out" />
          <span class="ml-2">Выйти</span>
        </button>
      </router-link>
    </template>
  </Menu>
</template>
