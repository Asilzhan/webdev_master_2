<script setup lang="ts">
import { useScheduleStore } from "@/features/schedule/store/useScheduleStore";
import { storeToRefs } from "pinia";
import { onMounted } from "vue";

const scheduleStore = useScheduleStore();
const { schedule } = storeToRefs(scheduleStore);

onMounted(scheduleStore.fetchSchedule);
</script>

<template>
  <basic-card>
    <week-schedule :schedule="schedule" :showFullDay="true"> </week-schedule>
  </basic-card>
</template>
