<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'

const items = ref<NavigationMenuItem[][]>([
  [
    {
      label: 'Experience',
      icon: 'i-lucide-briefcase',
      to: '#experience',
      active: true
    },
    {
      label: 'Tech Stack',
      icon: 'i-lucide-cpu',
      to: '#tech-stack'
    },
    {
      label: 'Projects',
      icon: 'i-lucide-folder-open',
      to: '#projects'
    },
    {
      label: 'Education',
      icon: 'i-lucide-graduation-cap',
      to: '#education'
    },
    {
      label: 'Contact',
      icon: 'i-lucide-mail',
      to: '#contact'
    }
  ]
])
</script>

<template>
  <div class="flex items-center justify-end gap-12">
    <div class="w-1/4">
      <Shared-Logo />
    </div>
    <div class="w-3/4 flex items-center justify-between">
      <UNavigationMenu orientation="horizontal" :items="items" class="border-t border-b rounded-xl px-8 text-4xl" />
      <SocialMedia class="w-fit" />
    </div>
  </div>
</template>
