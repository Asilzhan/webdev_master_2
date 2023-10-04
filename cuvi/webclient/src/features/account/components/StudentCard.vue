<script setup lang="ts">
import { useToggle } from "@vueuse/core";
import type { Student } from "../types";

defineProps<{
  student: Student;
}>();

const [showDetails, toggleShowDetails]  = useToggle(false);
</script>

<template>
  <basic-card class="px-8 py-6 h-fit">
    <div class="w-full flex flex-col">
      <h1 class="text-2xl font-medium pb-4">{{ student.lastName }} {{ student.firstName }} {{ student.maidenName }}</h1>
      <hr class="mb-4" />
      <div class="grid grid-cols-[140px_1fr] items-center gap-4 ml-4 transition-all duration-300 ease-in-out overflow-hidden">

        <label class="font-bold text-dark">Логин:</label>
        <span class="text-dark">{{ student.username }}</span>

        <template v-if="showDetails">
          <template v-if="student.identityNumber">
            <label class="font-bold text-dark">ИИН:</label>
            <span class="text-dark">{{ student.identityNumber }}</span>
          </template>

          <template v-if="student.email">
            <label class="font-bold text-dark">E-Mail:</label>
            <span class="text-dark">{{ student.email }}</span>
          </template>

          <template v-if="student.internalEmail">
            <label class="font-bold text-dark">Внутренний E-Mail:</label>
            <span class="text-dark">{{ student.internalEmail }}</span>
          </template>

          <template v-if="student.phone">
            <label class="font-bold text-dark">Телефон:</label>
            <span class="text-dark">{{ student.phone }}</span>
          </template>

          <label class="font-bold text-dark">Дата рождения:</label>
          <time class="text-dark">{{ student.birthDate?.toLocaleDateString() ?? "-" }}</time>

          <template v-if="student.faculty">
            <label class="font-bold text-dark">Факультет:</label>
            <span class="text-dark">{{ student.faculty }}</span>
          </template>

          <template v-if="student.familyStatus">
            <label class="font-bold text-dark">Семейное положение:</label>
            <span class="text-dark">{{ student.familyStatus }}</span>
          </template>

          <template v-if="student.nationality">
            <label class="font-bold text-dark">Национальность:</label>
            <span class="text-dark">{{ student.nationality }}</span>
          </template>

          <template v-if="student.citizenship">
            <label class="font-bold text-dark">Страна:</label>
            <span class="text-dark">{{ student.citizenship.country }}</span>

            <label class="font-bold text-dark">Резидент:</label>
            <span class="text-dark">{{ student.citizenship.isResident ? "Да" : "Нет" }}</span>
          </template>
        </template>
        <span
          class="col-span-full text-center underline underline-dashed underline-offset-4 text-sm select-none cursor-pointer text-black/70"
          @click="toggleShowDetails()"
          >{{ showDetails ? "Скрыть" : "Детали" }}</span
        >
      </div>
    </div>
  </basic-card>
</template>
