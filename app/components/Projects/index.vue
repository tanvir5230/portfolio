<script setup lang="ts">
import type Project from '~/types/project.type';
import ProjectCard from './ProjectCard.vue'
import { projectSection } from '~/assets/data.json';

const projects = ref<Project[]>(projectSection.items);
const title = projectSection.title;
</script>

<template>
  <div id="projects">
    <Shared-SectionHeading>{{ title }}</Shared-SectionHeading>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <ProjectCard v-for="(project, index) in projects" :key="index" :data="project" />
    </div>
  </div>
</template>
