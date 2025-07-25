<script setup lang="ts">
import type Project from '~/types/project.type'

const { data } = defineProps<{ data: Project }>()
</script>

<template>
  <div
    class="bg-gradient-to-b from-blue-950 to-red-400 text-white rounded-t-full p-6 flex flex-col justify-between pt-16 pb-8">
    <!-- Title + Description -->
    <div class="text-center space-y-2 min-h-[4rem]">
      <h3 class="text-2xl font-semibold h-[4rem]">{{ data.title }}</h3>
      <p class="text-sm opacity-90 h-[4rem]">{{ data.description }}</p>
    </div>

    <!-- Technologies Tags -->
    <div class="flex flex-wrap justify-center items-start gap-2 gap-y-0 min-h-[6rem] mt-4">
      <Shared-Tag v-for="(tag, index) in data.technologies" :key="index">
        {{ tag }}
      </Shared-Tag>
    </div>

    <!-- Buttons -->
    <div v-if="data.liveUrl || data.codeUrl" class="flex items-center justify-center gap-2 mt-auto h-[3rem]">
      <UButton v-if="data.liveUrl" :to="data.liveUrl" target="_blank" color="warning" class="rounded-3xl">
        View Live
      </UButton>
      <span class="text-white" v-if="data.liveUrl && data.codeUrl">|</span>
      <UButton v-if="data.codeUrl" :to="data.codeUrl" target="_blank" color="neutral" class="rounded-3xl">
        View Code
      </UButton>
    </div>
    <div v-if="data.frontendCodeUrl || data.backendCodeUrl"
      class="flex items-center justify-center gap-2 mt-auto h-[3rem]">
      <UButton v-if="data.backendCodeUrl" :to="data.backendCodeUrl" target="_blank" color="warning" class="rounded-3xl">
        BE Code
      </UButton>
      <span class="text-white" v-if="data.frontendCodeUrl && data.backendCodeUrl">|</span>
      <UButton v-if="data.frontendCodeUrl" :to="data.frontendCodeUrl" target="_blank" color="neutral"
        class="rounded-3xl">
        FE Code
      </UButton>
    </div>
  </div>
</template>
