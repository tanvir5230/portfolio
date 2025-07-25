<script setup lang="ts">

</script>


<template>
  <UContainer class="h-screen custom-scrollbar flex flex-col">
    <Header class="h-16 mt-2" />
    <main class="flex-1 flex gap-4 mt-8">
      <!-- Profile Card -->
      <div class="w-1/4">
        <ProfileCard />
      </div>
      <!-- Sections Container -->
      <div class="section-container w-3/4 pl-8 pr-1 pb-8">
        <Experience />
        <br />
        <TechStack />
        <br />
        <br />
        <Projects />
        <br />
        <!-- <Education /> -->
        <br />
        <!-- <About /> -->
        <br />
        <Contact />
      </div>
    </main>
    <Footer class="h-12" />
  </UContainer>
</template>

<style scoped>
.section-container {
  scrollbar-width: 0px;
}
</style>