import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";

const config = defineConfig({
  projectId: "uhl041t7",
  dataset: "production",
  title: "Demitri Echols' Portfolio App",
  apiVersion: "2023-07-29",
  basePath: "/admin",
  plugins: [deskTool()],
});

export default config;
