<script setup lang="ts">
import { computed, ref } from "vue";
import type { Schedule, TimeSlot } from "../types/Schedule";

withDefaults(
  defineProps<{
    schedule?: Schedule[];
  }>(),
  { schedule: () => [] }
);

const emit = defineEmits<{
  click: [timeSlot: TimeSlot];
  "previous-week": [];
  "next-week": [];
}>();

const rowsCount = 10;
const rowHeight = 40;
const timeLabelWidth = "55px";
const rowHeightInPx = computed(() => rowHeight + "px");

function getDurationInMinutes(startTime: string, endTime: string) {
  const [hStart, mStart] = startTime.split(":").map((n) => parseInt(n));
  const [hEnd, mEnd] = endTime.split(":").map((n) => parseInt(n));
  return hEnd * 60.0 + mEnd - (hStart * 60 + mStart);
}

function minutesToPx(minutes: number) {
  return (rowHeight / 30) * minutes;
}

const bgColors = [
  { hue: 320, saturation: 100, lightness: 88 }, // #FFA1F5
  { hue: 270, saturation: 100, lightness: 75 }, // #BC7AF9
  { hue: 180, saturation: 100, lightness: 75 }, // #F8FF95
  { hue: 120, saturation: 100, lightness: 70 }, // #A6FF96
];

let lastIndex = -1;

function getDarkerShade(hsl: any, percentage = 30) {
  return {
    hue: hsl.hue,
    saturation: hsl.saturation,
    lightness: Math.max(hsl.lightness - percentage, 0),
  };
}

function getColors() {
  lastIndex = (lastIndex + 1) % bgColors.length;

  const bgColorHSL = bgColors[lastIndex];
  const borderColorHSL = getDarkerShade(bgColorHSL);

  const bgColor = `hsl(${bgColorHSL.hue}, ${bgColorHSL.saturation}%, ${bgColorHSL.lightness}%)`;
  const borderColor = `hsl(${borderColorHSL.hue}, ${borderColorHSL.saturation}%, ${borderColorHSL.lightness}%)`;

  return { "background-color": bgColor, "border-left-color": borderColor };
}

const selectedDay = ref(0);
</script>

<template>
  <div class="flex flex-row h-full">
    <div class="schedule__control_buttons group" @click="emit('next-week')">
      <i-ph-arrow-left class="schedule__control_button_icon" />
    </div>
    <div class="schedule flex-grow">
      <div class="schedule__controls">
        <Button v-for="(weekDay, i) in schedule" :key="i" :class="['schedule__control', { 'bg-indigo': selectedDay === i }]" @click="selectedDay = i">
          {{ weekDay.date.toLocaleDateString("ru-KZ", { weekday: "short", day: "numeric", month: "short" }) }}
        </Button>
      </div>
      <div class="schedule__grid">
        <template v-for="i in rowsCount" :key="i">
          <div class="schedule__grid-row">
            <span class="schedule__grid-row-label">{{ `${i + 8}:00` }}</span>
          </div>
          <div class="schedule__grid-row"></div>
        </template>
      </div>
      <div class="schedule__days">
        <section :class="['schedule__day', { 'schedule__day-hidden': selectedDay !== i }]" v-for="(weekDay, i) in schedule" :key="i">
          <div class="schedule__col-label">{{ weekDay.date.toLocaleDateString("ru-KZ", { weekday: "short", day: "numeric", month: "short" }) }}</div>
          <ul class="schedule__events relative">
            <li class="schedule__event-wrapper" v-for="(e, j) in weekDay.timeSlots" :key="j">
              <div
                @click="emit('click', e)"
                class="schedule__event"
                :style="{
                  ...getColors(),
                  '--schedule-event-top': minutesToPx(getDurationInMinutes('9:00', e.timeStart)) + 'px',
                  '--schedule-event-height': minutesToPx(getDurationInMinutes(e.timeStart, e.timeEnd)) + 'px',
                }">
                <div class="text-base font-medium">{{ e.bookName }}</div>
                <time class="text-sm">{{ `${e.timeStart} - ${e.timeEnd}` }}</time>
              </div>
            </li>
          </ul>
        </section>
      </div>
    </div>
    <div class="schedule__control_buttons group" @click="emit('next-week')">
      <i-ph-arrow-right class="schedule__control_button_icon" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.schedule__control_buttons {
  @apply display-none w-10 flex-col items-center cursor-pointer justify-center text-indigo/80 group hover:bg-indigo/10 transition select-none;

  @media (min-width: 64rem) {
    @apply flex;
  }
}
.schedule__control_button_icon {
  @apply opacity-0 group-hover:opacity-100 transition;
}
.schedule {
  @apply h-max;
  position: relative;

  .schedule__grid {
    @apply block absolute w-full z-1;
    top: v-bind(rowHeightInPx);

    .schedule__grid-row {
      .schedule__grid-row-label {
        display: none;

        @media (min-width: 80rem) {
          transform: translateY(-50%);
          @apply inline-block absolute top-0 left-0 text-sm;
        }
      }

      @media (min-width: 64rem) {
        position: relative;
        height: v-bind(rowHeightInPx);

        &:not(:last-child)::after {
          content: "";
          position: absolute;
          bottom: 0;
          width: 100%;
          height: 1px;
          @apply bg-gray/20;
        }
      }

      @media (min-width: 80rem) {
        &:not(:last-child)::after {
          left: v-bind(timeLabelWidth);
          width: calc(100% - v-bind(timeLabelWidth));
        }
      }
    }
  }

  .schedule__days {
    @apply relative z-2;

    @media (min-width: 64rem) {
      display: flex;
      height: calc(v-bind(rowHeightInPx) * v-bind(rowsCount) * 2);
    }

    @media (min-width: 80rem) {
      margin-left: v-bind(timeLabelWidth);
    }

    .schedule__day {
      @apply block flex-grow flex-basis-0 pt-0 border-b-gray/20 border-l-1;

      @media not all and (min-width: 64rem) {
        &.schedule__day-hidden {
          display: none;
        }
      }

      .schedule__col-label {
        height: v-bind(rowHeightInPx);
        @apply flex justify-center items-center border-b-gray/20 border-b-1;
      }

      .schedule__events {
        @apply flex flex-col gap-y-2;
        .schedule__event {
          @apply p-4 w-full rounded-md border-l-4 transition-300;

          @media (min-width: 64rem) {
            position: absolute;
            left: 0;
            top: var(--schedule-event-top, initial);
            height: var(--schedule-event-height, initial);
          }
        }
      }
    }
  }

  .schedule__controls {
    @apply flex items-center gap-x-4;

    @media (min-width: 64rem) {
      display: none;
    }

    .schedule__control {
      flex-grow: 1;
      flex-basis: 0;
    }
  }
}
</style>
