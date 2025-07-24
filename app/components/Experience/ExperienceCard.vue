<template>
  <UCard>
    <template #header>
      <h2 class="text-3xl font-bold text-left mb-4">Software Engineer</h2>
      <div class="flex items-center gap-4">
        <ULink to="/components/link" class="text-left text-secondary hover:underline">
          Indetechs Software Limited
        </ULink>
        <span class="text-gray-500"> | </span>
        <span class="flex items-center gap-2 text-gray-500">
          <UIcon name="i-lucide-calendar" /> <span>2022 - Present</span>
        </span>
      </div>
    </template>
    <ul class="list-disc pl-6">
      <li class="mt-2" v-for="(item, index) in [0, 1, 2]" :key="index">
        <p class="text-slate-50">
          Developed and maintained web applications using Vue.js and Nuxt.js, enhancing user experience and performance.
        </p>
      </li>
    </ul>
  </UCard>
</template>