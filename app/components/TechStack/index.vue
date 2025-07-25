<script setup lang="ts">
import type TechStack from '~/types/techstack.type';
import TechStackCard from './TechStackCard.vue';
import { techStackSection } from '~/assets/data.json';

const techStackData = ref<TechStack[]>(techStackSection.items);
</script>

<template>
  <div class="tech-stack" id="tech-stack">
    <Shared-SectionHeading>{{ techStackSection.title }}</Shared-SectionHeading>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <TechStackCard v-for="(tech, index) in techStackData" :key="index" :data="tech"
        :data-aos="index % 2 == 0 ? 'fade-right' : 'fade-left'" />
    </div>
  </div>
</template>