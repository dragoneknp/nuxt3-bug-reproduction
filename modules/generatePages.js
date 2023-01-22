import { defineNuxtModule } from '@nuxt/kit';

export default defineNuxtModule({
  setup(options, nuxt) {
    nuxt.hook('nitro:config', (nitroConfig) => {
      nitroConfig.prerender.routes.push(...[1, 2, 3].map((article) => `/${article}/`));
    });
  },
});
