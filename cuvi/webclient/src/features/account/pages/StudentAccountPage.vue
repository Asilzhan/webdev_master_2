<script setup lang="ts">
import { Student } from "../types";
import avatarUrl from "@/assets/img/avatar-icon-images-4.jpg";

const mockStudents: Student[] = [
  {
    name: "Жансейт Асылжан",
    login: "a_zhanseit",
    identityNumber: "010111458962",
    birthDate: new Date("2001-01-11"),
    faculty: "Школа инф",
  },
  {
    name: "Jane Smith",
    login: "j_smith",
    birthDate: new Date("1999-05-20"),
  },
  {
    name: "Alice Johnson",
    login: "a_johnson",
    // No birthDate provided for Alice, so it's optional.
  },
  {
    name: "Bob Brown",
    login: "b_brown",
    birthDate: new Date("2002-10-10"),
  },
];

const student = mockStudents[0];
</script>

<template>
  <div class="grid grid-cols-[auto_1fr] gap-x-4">
    <div class="w-[240px] h-[320px]">
      <Image :src="avatarUrl" :alt="student.name" preview></Image>
    </div>
    <StudentCard :student="student" />
  </div>
</template>
