import { defineStore } from "pinia";
import { ref } from "vue";
import { fakeApi } from "@/module/api";
import type { User, Student } from "../types";
import { Cabinet } from "@/features/cabinets/types";
import { computed } from "vue";

export const useAccountStore = defineStore("account", () => {
  const currentUser = ref<User | Student>({} as User);
  const currentUserNameShort = computed(() => `${currentUser.value.firstName} ${currentUser.value.lastName}`);
  const currentUserNameFull = computed(() => `${currentUser.value.firstName} ${currentUser.value.lastName} ${currentUser.value.maidenName}`);

  async function fetchUser() {
    const { users: randomUsers } = await fakeApi.get("users").json<{ users: User[] }>();
    currentUser.value = randomUsers[Math.floor(Math.random() * randomUsers.length)];
    console.log(currentUser.value.birthDate);
  }

  const cabinets = ref<Cabinet[]>([]);

  return { currentUser, currentUserNameShort, currentUserNameFull, fetchUser, cabinets };
});
