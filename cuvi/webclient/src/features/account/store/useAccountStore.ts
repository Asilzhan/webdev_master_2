import { defineStore } from "pinia";
import { ref } from "vue";
import { fakeApi } from "@/module/api";
import { User } from "../types";

export const useAccountStore = defineStore("account", () => {
  const currentUser = ref<User>({} as User);

  async function fetchUser() {
    const { users: randomUsers } = await fakeApi.get("users").json<{ users: User[] }>();
    currentUser.value = randomUsers[Math.floor(Math.random() * randomUsers.length)];
    console.log(currentUser.value.birthDate);
  }

  return { currentUser, fetchUser };
});
