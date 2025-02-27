export default defineNuxtConfig({
  modules: ['../src/module'],
  primevue: {
    usePrimeVue: true,
    options: {
      // ripple, inputStyle etc.
      ripple: true,
      pt: {
        panel: {
          header: 'my-panel-header'
        }
      }
    },
    components: {
      prefix: '',
      include: ['Panel', 'Button'],
      exclude: undefined
    },
    directives: {
      prefix: '',
      include: undefined,
      exclude: '*'
    },
    composables: {
      prefix: '',
      include: undefined,
      exclude: undefined
    }
  },
  devtools: { enabled: true },
  css: ['primevue/resources/themes/lara-light-indigo/theme.css']
});
