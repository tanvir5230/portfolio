<script setup lang="ts">
import type Experience from '~/types/experience.type';

const { data } = defineProps<{ data: Experience }>()
</script>

<template>
  <UCard variant="subtle" :ui="{ body: 'p-2 sm:px-6 sm:pt-2' }" class="rounded-2xl">
    <template #header>
      <h2 class="text-2xl font-bold text-left mb-4">{{ data.designation }}</h2>
      <div class="flex items-center gap-4">
        <ULink :to="data.company.url" target="_blank" class="text-left text-secondary hover:underline">
          {{ data.company.name }}
        </ULink>
        <span class="text-gray-500"> | </span>
        <span class="flex items-center gap-2 text-gray-500">
          <UIcon name="i-lucide-calendar" /> <span>{{ data.duration }}</span>
        </span>
      </div>
    </template>
    <ul class="list-disc pl-6">
      <li class="mt-2" v-for="(descriptionItem, index) in data.descriptionList" :key="index">
        <p class="text-slate-50">
          {{ descriptionItem }}
        </p>
      </li>
    </ul>
  </UCard>
</template>