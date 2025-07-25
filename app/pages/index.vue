<script setup lang="ts">

</script>


<template>
  <UContainer class="h-screen custom-scrollbar flex flex-col">
    <Header class="h-16 mt-2" />
    <main class="flex-1 lg:flex lg:gap-4 lg:mt-8 mt-2">
      <!-- Profile Card -->
      <aside class="w-full lg:w-1/4">
        <ProfileCard />
      </aside>
      <!-- Sections Container -->
      <div class="section-container w-full mt-8 lg:mt-0 lg:w-3/4 lg:pl-8 lg:pr-1 pb-8">
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