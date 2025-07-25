<script setup lang="ts">
import type SocialMedia from '~/types/social-media.type';
import { profileSection } from '~/assets/data.json'

const socilaMediaData = profileSection.socialLinks as SocialMedia[];
</script>

<template>
  <div class="flex items-center gap-4">
    <ULink v-for="(socialMediaItem, index) in socilaMediaData" :key="index" :to="socialMediaItem.url" target="_blank">
      <UIcon :name="socialMediaItem.icon" class="size-5" />
    </ULink>
    <ULink :to="'mailto:' + profileSection.email" target="_blank">
      <UIcon name="i-lucide-mail" class="size-5" />
    </ULink>
  </div>
</template>