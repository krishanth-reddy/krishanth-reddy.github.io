import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";
import { defineConfig } from "astro/config";

const LIVE_URL = "https://krishanth-reddy.github.io/";
// https://astro.build/config
export default defineConfig({
  site: "https://krishanth-reddy.github.io/",
  integrations: [react(), tailwind(), icon()],
});
