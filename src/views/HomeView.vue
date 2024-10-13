<template>
  <Card>
    <template #title>Simple Card</template>
    <template #content>
      <VCalendar is-dark="system" show-weeknumbers :attributes='attrs' />
    </template>
  </Card>
</template>

<script setup>
import { Calendar as VCalendar } from 'v-calendar';
import 'v-calendar/style.css';
import { ref } from 'vue';

const attrs = ref([
  {
    key: 'today',
    highlight: true,
    dates: new Date(),
  },
]);
</script>
