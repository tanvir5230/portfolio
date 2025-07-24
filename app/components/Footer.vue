<script setup lang="ts">
import { profileSection } from '~/assets/data.json';
const year = new Date().getFullYear();
</script>

<template>
  <footer>
    <div class="footer-content text-center py-4">
      <p class="text-sm text-white"><span>&copy;</span> {{ year }} {{ profileSection.name }}. All rights reserved.</p>
    </div>
  </footer>
</template>