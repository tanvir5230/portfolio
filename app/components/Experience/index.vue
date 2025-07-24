<script setup lang="ts">
import SectionHeading from '../shared/SectionHeading.vue';

</script>

<template>
  <div>
    <SectionHeading>Experience</SectionHeading>
    <div v-for="(item, index) in [0, 1, 2]" :key="index" class="mb-8">
      <ExperienceCard />
    </div>
  </div>
</template>