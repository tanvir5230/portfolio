<script setup lang="ts">
import type Project from '~/types/project.type'

const { data } = defineProps<{ data: Project }>()
</script>

<template>
  <div
    class="bg-gradient-to-b from-blue-950 to-red-400 text-white rounded-full h-[28rem] p-6 flex flex-col justify-between py-20">
    <!-- Title + Description -->
    <div class="text-center space-y-2 min-h-[4rem]">
      <h3 class="text-2xl font-semibold">{{ data.title }}</h3>
      <p class="text-sm opacity-90">{{ data.description }}</p>
    </div>

    <!-- Technologies Tags -->
    <div class="flex flex-wrap justify-center gap-2 min-h-[4rem] mt-4">
      <Shared-Tag v-for="(tag, index) in data.technologies.splice(0, 5)" :key="index">
        {{ tag }}
      </Shared-Tag>
    </div>

    <!-- Buttons -->
    <div class="flex items-center justify-center gap-2 mt-auto">
      <UButton :to="data.liveUrl" color="warning" class="rounded-3xl">
        View Project
      </UButton>
      <span class="text-white">|</span>
      <UButton :to="data.codeUrl" color="neutral" class="rounded-3xl">
        View Code
      </UButton>
    </div>
  </div>
</template>
