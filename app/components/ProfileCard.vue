<script setup lang="ts">
import { profileSection } from "~/assets/data.json";
</script>

<template>
  <UCard variant="subtle" :ui="{ root: 'rounded-3xl py-4', }">
    <template #header>
      <img :src="profileSection.image.src" :alt="profileSection.image.alt"
        class="rounded-full w-32 h-32 mb-4 mx-auto border-4 border-primary" />
    </template>

    <h2 class="text-2xl font-bold text-center mb-2">{{ profileSection.name }}</h2>
    <p class="text-center text-gray-600">{{ profileSection.role }}</p>
    <p class="text-center mt-4">{{ profileSection.description }}</p>

    <template #footer>
      <div class="text-center">
        <UButton to="/test" variant="solid" type="button" size="xl" class="rounded-4xl px-4">
          Hire Me
        </UButton>
      </div>
    </template>
  </UCard>
</template>
