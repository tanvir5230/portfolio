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
      label: 'Education',
      icon: 'i-lucide-graduation-cap',
      to: '#education'
    },
    {
      label: 'Projects',
      icon: 'i-lucide-folder-open',
      to: '#projects'
    },
    {
      label: 'About',
      icon: 'i-lucide-user',
      to: '#about'
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
    <UNavigationMenu orientation="horizontal" :items="items" class="border-t border-b rounded-xl w-fit px-8 text-4xl" />
    <SocialMedia class="w-fit" />
  </div>
</template>
