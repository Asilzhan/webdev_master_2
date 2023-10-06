import { defineStore } from "pinia";
import { ref } from "vue";
import { Cabinet } from "@/features/cabinets/types";
import { computed } from "vue";
import useAuth from "../composables/useAuth";
// import type { User } from "@auth0/auth0-vue";
export const useAccountStore = defineStore("account", () => {
  const auth = useAuth();
  console.log("auth:", auth);

  // const currentUser = computed<User>(() => user ?? {});
  const currentUserNameShort = computed(() => `${auth.user?.value?.nickname}`);
  const currentUserNameFull = computed(() => `${auth.user?.value?.name} ${auth.user?.value?.given_name} ${auth.user?.value?.middle_name}`);

  const cabinets = ref<Cabinet[]>([]);

  return { currentUser: auth.user, currentUserNameShort, currentUserNameFull, cabinets };
});

