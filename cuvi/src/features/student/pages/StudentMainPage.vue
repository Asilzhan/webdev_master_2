<script setup lang="ts"></script>
<template>
  <default-layout>
    <template v-slot:navigation>
      <router-link link text :outlined="false" :to="{ name: 'StudentSchedulePage' }">Расписание</router-link>
    </template>
    <day-schedule title="Понедельник" />
  </default-layout>
</template>

