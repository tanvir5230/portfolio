<template>
  <div class="space-y-8">
    <SharedSectionHeading>Contact Me</SharedSectionHeading>

    <UCard class="p-6 shadow-xl rounded-2xl">
      <UForm :state="form" @submit="handleSubmit" class="space-y-5">
        <!-- Name -->
        <UFormField label="Your Name" name="name" required>
          <UInput v-model="form.name" placeholder="Name" size="xl" class="rounded-xl w-full" />
        </UFormField>

        <!-- Email -->
        <UFormField label="Email Address" name="email" required>
          <UInput v-model="form.email" type="email" placeholder="test@gmail.com" size="xl" class="rounded-xl w-full" />
        </UFormField>

        <!-- Message -->
        <UFormField label="Message" name="message" required>
          <UTextarea v-model="form.message" placeholder="Write your message here..." autoresize size="xl"
            class="rounded-xl w-full" />
        </UFormField>

        <!-- Submit Button -->
        <div class="pt-2">
          <UButton :loading="isSubmitting" type="submit" color="primary"
            class="w-full justify-center text-base font-semibold rounded-full py-3 cursor-pointer bg-gradient-to-r from-secondary to-primary hover:from-primary hover:to-secondary transition-colors duration-500 text-white">
            <UIcon name="i-lucide-mail" /> Send Message
          </UButton>
        </div>
      </UForm>
    </UCard>
  </div>
</template>

<script setup lang="ts">
const toast = useToast()
const config = useRuntimeConfig()

const formspreeId = config.public.FORMSPREE_ID;

const isSubmitting = ref(false);
const form = ref({
  name: '',
  email: '',
  message: ''
})

async function handleSubmit() {
  try {
    isSubmitting.value = true;
    await $fetch(`https://formspree.io/f/${formspreeId}`, {
      method: 'POST',
      body: {
        name: form.value.name,
        email: form.value.email,
        message: form.value.message
      },
      headers: { Accept: 'application/json' }
    })

    toast.add({ title: 'Message sent!', description: 'Thanks for reaching out.' })

    form.value = { name: '', email: '', message: '' }
  } catch (error) {
    console.error('Error submitting form:', error);
    toast.add({ title: 'Error', description: 'There was an error sending your message. Please try again later.' });
  } finally {
    isSubmitting.value = false;
  }
}

</script>
