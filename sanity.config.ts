import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import schemas from "./sanity/schemas";

const config = defineConfig({
  projectId: "uhl041t7",
  dataset: "production",
  title: "Demitri Echols' Portfolio App",
  apiVersion: "2023-07-09",
  basePath: "/admin",
  plugins: [deskTool()],
  schema: { types: schemas },
});

export default config;
