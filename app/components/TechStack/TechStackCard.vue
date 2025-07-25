<script setup lang="ts">
import type TechStack from '~/types/techstack.type'

const { data } = defineProps<{ data: TechStack }>()
</script>

<template>
  <div class="tech-stack-card  relative mt-16 p-4 rounded-lg bg-info-100 shadow-md text-black">

    <!-- Domain Icon & Title -->
    <div class="domain-info pointer-events-none flex flex-col items-center gap-2 -translate-y-16">
      <div class="icon-wrapper w-32 h-32 bg-white rounded-full flex items-center justify-center mx-auto">
        <UIcon :name="data.domainIcon" class="text-black" size="80" />
      </div>
      <h3 class="text-xl text-center font-semibold">{{ data.domain }}</h3>
    </div>

    <!-- Technology Icons -->
    <ul class="technologies-list flex flex-wrap justify-center gap-6 -translate-y-8">
      <li v-for="tech in data.technologies" :key="tech.name"
        class="tech-item flex flex-col items-center justify-center gap-2">
        <img :src="tech.icon" :alt="tech.name" width="48" height="48" />
        <span>{{ tech.name }}</span>
      </li>
    </ul>

    <!-- Expertise Details Panel -->
    <div
      class="expertise-details absolute top-0 right-0 w-3/5 h-full bg-[#2b2829] text-white rounded-e-sm overflow-y-scroll custom-scrollbar opacity-0 translate-x-3/5">
      <div class="flex flex-col gap-3 p-4">
        <div v-for="tech in data.technologies" :key="tech.name" class="flex justify-between items-center gap-4">
          <span class="flex flex-col items-center gap-2 w-12">
            <img :src="tech.icon" :alt="tech.name" width="48" height="48" />
            <span class="text-xs text-center">{{ tech.name }}</span>
          </span>
          <div class="flex flex-col items-center gap-2 w-full">
            <span>{{ tech.expertise }}%</span>
            <USlider :default-value="tech.expertise" />
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<style scoped>
.tech-stack-card:hover .domain-info {
  transform: translate(-160px, 120px) rotate(-90deg);
  transition: transform 700ms;
}

.tech-stack-card:hover .technologies-list {
  opacity: 0;
  transition: opacity 700ms;
}

.tech-stack-card:hover .expertise-details {
  opacity: 1;
  transform: translateX(-60%);
  transition: all 0.7s ease-in-out;
}
</style>
