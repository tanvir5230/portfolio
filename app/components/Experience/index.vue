<script setup lang="ts">
import type Experience from '~/types/experience.type';
import SectionHeading from '~/components/shared/SectionHeading.vue';
import { experienceSection } from '~/assets/data.json';

const experienceData = ref<Experience[]>(experienceSection.items);
</script>

<template>
  <div id="experience">
    <SectionHeading>{{ experienceSection.title }}</SectionHeading>
    <div v-for="(experienceItem, index) in experienceData" :key="index" class="mb-8 border-l-2 border-primary pl-6 relative
         before:content-[''] before:absolute before:w-4 before:h-4 before:rounded-full
         before:bg-secondary before:-left-2 before:top-0">
      <ExperienceCard :data="experienceItem" />
    </div>
  </div>
</template>