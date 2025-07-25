<script setup lang="ts">
import type TechStack from '~/types/techstack.type';

const { data } = defineProps<{ data: TechStack }>();
</script>

<template>
  <div class="tech-stack-card p-4 rounded-lg bg-info-100 shadow-md text-black mt-16">
    <div class="flex flex-col items-center gap-2 -translate-y-16">
      <div class="mx-auto rounded-full w-32 h-32 flex items-center justify-center bg-white">
        <UIcon :name="data.domainIcon" class="domain-icon text-black" size="80" />
      </div>
      <h3 class="text-xl text-center font-semibold">{{ data.domain }}</h3>
    </div>
    <ul class="technologies-list flex flex-wrap justify-center gap-6 -translate-y-8">
      <li v-for="tech in data.technologies" :key="tech.name"
        class="technology-item flex flex-col items-center justify-center gap-2">
        <img :src="tech.icon" :alt="tech.name" class="tech-icon" width="48" height="48" style="height: 48px;" />
        {{ tech.name }}
      </li>
    </ul>
  </div>
</template>