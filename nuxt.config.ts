// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  modules: ["@nuxt/ui"],
  plugins: ["~/plugins/aos.client.ts"],
  css: ["~/assets/css/main.css"],
  app: {
    head: {
      title: "Tanvir's Portfolio",
      meta: [
        {
          name: "description",
          content:
            "Tanvir's personal portfolio showcasing skills and projects.",
        },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
      ],
      link: [{ rel: "icon", type: "image/png", href: "/favicon.ico" }],
    },
  },
  runtimeConfig: {
    public: {
      FORMSPREE_ID: "",
      // aos configuration
      aos: {
        duration: 700,
        easing: "ease-out-cubic",
        delay: 0,
      },
    },
  },
});
