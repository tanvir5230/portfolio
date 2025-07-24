<script setup lang="ts">
import type TechStack from '~/types/techstack.type';
import TechStackCard from './TechStackCard.vue';

const techStackData = ref<TechStack[]>([
  {
    domain: 'Frontend',
    domainIcon: 'i-lucide-airplay',
    technologies: [
      { name: 'Vue.js', icon: '/icons/vue.png' },
      { name: 'React', icon: '/icons/react.png' },
    ],
    description: 'Technologies used for building user interfaces.'
  },
  {
    domain: 'Backend',
    domainIcon: 'i-lucide-server',
    technologies: [
      { name: 'Node.js', icon: '/icons/node.png' },
    ],
    description: 'Technologies used for server-side development.'
  }
]);
</script>

<template>
  <div class="tech-stack">
    <Shared-SectionHeading>Technology Expertise</Shared-SectionHeading>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <TechStackCard v-for="(tech, index) in techStackData" :key="index" :data="tech" />
    </div>
  </div>
</template>