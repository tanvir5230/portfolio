<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'

const route = useRoute()

const rawItems: NavigationMenuItem[] = [
  { label: 'Experience', icon: 'i-lucide-briefcase', to: '#experience' },
  { label: 'Tech Stack', icon: 'i-lucide-cpu', to: '#tech-stack' },
  { label: 'Projects', icon: 'i-lucide-folder-open', to: '#projects' },
  { label: 'Education', icon: 'i-lucide-graduation-cap', to: '#education' },
  { label: 'Contact', icon: 'i-lucide-mail', to: '#contact' }
]

const items = ref<NavigationMenuItem[][]>([[]])

const updateActiveItem = () => {
  const currentHash = route.hash || '#experience'
  items.value = [
    //@ts-ignore
    rawItems.map(item => ({
      ...item,
      active: item.to === currentHash
    }))
  ]
}

// initial run
updateActiveItem()

// update on hash change
watch(() => route.hash, updateActiveItem)
</script>

<template>
  <header class="flex items-center justify-between p-2 lg:gap-12 lg:px-8">
    <!-- Logo Section -->
    <div class="w-fit lg:w-1/4">
      <Shared-Logo />
    </div>

    <!-- Navigation & Social (Desktop), Social only (Mobile) -->
    <div class="flex items-center justify-end w-fit lg:w-3/4 lg:justify-between lg:text-4xl">
      <!-- Navigation (only visible on large screens) -->
      <UNavigationMenu orientation="horizontal" :items="items"
        class="hidden lg:flex border-t border-b rounded-xl px-8 text-4xl" />

      <!-- Social Media (always visible, responsive spacing) -->
      <SocialMedia class="ml-4 w-fit" />
    </div>
  </header>
</template>
