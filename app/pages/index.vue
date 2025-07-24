<template>
  <UContainer class="py-8 h-screen overflow-hidden">
    <Header />
    <main class="flex gap-4 mt-8 h-screen overflow-hidden">
      <!-- Profile Card -->
      <div class="w-1/4">
        <ProfileCard />
      </div>
      <!-- Sections Container -->
      <div class="section-container w-3/4 pl-8 pb-32 overflow-hidden hover:overflow-y-auto">
        <Experience />
        <TechStack />
        <Education />
        <Projects />
        <About />
        <Contact />
      </div>
    </main>
  </UContainer>
</template>

<style scoped>
.section-container {
  scrollbar-width: 0px;
}
</style>