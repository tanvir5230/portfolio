<script setup lang="ts">
import { profileSection } from "~/assets/data.json";
</script>

<template>
  <UCard variant="subtle" :ui="{ root: 'rounded-3xl py-4', }" class="lg:sticky top-8">
    <template #header>
      <div class="relative w-32 h-32 mb-4 mx-auto rounded-full bg-gradient-to-tr from-primary to-secondary p-[3px]">
        <img :src="profileSection.image.src" :alt="profileSection.image.alt"
          class="rounded-full w-full h-full object-cover bg-white dark:bg-neutral-950" />
      </div>
    </template>

    <h2 class="text-2xl font-bold text-center mb-2">{{ profileSection.name }}</h2>
    <p class="text-center text-gray-600">{{ profileSection.role }}</p>
    <p class="text-center mt-4">{{ profileSection.description }}</p>

    <template #footer>
      <div class="text-center">
        <UButton to="#contact" variant="solid" type="button" size="xl"
          class="rounded-4xl px-8 bg-gradient-to-r from-secondary via-primary to-primary text-white font-extrabold hover:from-primary hover:to-secondary transition-colors duration-500">
          Hire Me
        </UButton>
      </div>
    </template>
  </UCard>
</template>