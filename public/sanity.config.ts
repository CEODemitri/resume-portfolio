import { defineConfig } from "sanity"; 
import { deskTool } from "sanity/desk";

const config = defineConfig({
	projectId: "uhl041t7",
	dataset: "production",
	title: "My Personal Website",
	apiVersion: "2023-06-30",
	basePath: "/admin",
	plugins: [deskTool()],
});


export default config;
