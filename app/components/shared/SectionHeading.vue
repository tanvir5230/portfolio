<template>
  <h2 class="text-3xl font-bold text-center mb-8">
    <slot></slot>
  </h2>
</template>

<style scoped>
h2 {
  width: fit-content;
}

h2::after {
  content: '';
  display: block;
  margin: 8px 0px;
  width: 50%;
  border-bottom: 4px solid #e5e7eb;
  border-radius: 12px;
}
</style>