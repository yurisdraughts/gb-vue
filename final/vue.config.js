const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  pages: {
    index: {
      entry: "src/main.js",
      title: "Interior Design",
    },
  },
  css: {
    loaderOptions: {
      scss: {
        additionalData: `@use "@/assets/styles/variables" as *;`,
      },
    },
  },
});
