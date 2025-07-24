<template>
  <UCard variant="subtle">
    <template #header>
      <img
        src="https://media.licdn.com/dms/image/v2/D5603AQHl__kDEHGlbw/profile-displayphoto-crop_800_800/B56Zg18owNHcAI-/0/1753251746429?e=1756339200&v=beta&t=u-eY0r9umxi54tUDEyhZEgdccIvNlCjeW41J7haeOyM"
        alt="Tanvir Ibn Touhid" class="rounded-full w-32 h-32 mb-4 mx-auto border-4 border-primary" />
    </template>

    <h2 class="text-2xl font-bold text-center mb-2">Tanvir Ibn Touhid</h2>
    <p class="text-center text-gray-600">Software Engineer</p>
    <p class="text-center mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
      incididunt ut labore et dolore magna aliqua.</p>

    <template #footer>
      <div class="text-center">
        <UButton to="/test" variant="solid" type="button" size="xl" class="rounded-4xl px-4">
          Hire Me
        </UButton>
      </div>
    </template>
  </UCard>
</template>
