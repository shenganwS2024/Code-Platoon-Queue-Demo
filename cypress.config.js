import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: "http://localhost:5173/",
    supportFile: false,
  },
  viewportWidth:1024,
  viewportHeight:768,
  video:false,
});
