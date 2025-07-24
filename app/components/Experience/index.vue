<script setup lang="ts">
import type Experience from '~/types/experience.type';
import SectionHeading from '~/components/shared/SectionHeading.vue';
import { experienceSection } from '~/static/data.json';

const experienceData = ref<Experience[]>(experienceSection.items);
</script>

<template>
  <div>
    <SectionHeading>{{ experienceSection.title }}</SectionHeading>
    <div v-for="(experienceItem, index) in experienceData" :key="index" class="mb-8">
      <ExperienceCard :data="experienceItem" />
    </div>
  </div>
</template>