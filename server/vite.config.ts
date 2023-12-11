import { defineConfig } from "vite";
import { VitePluginNode } from "vite-plugin-node";

export default defineConfig({
	envDir: "../",
	envPrefix: ["SERVER_", "CLIENT_"],

	publicDir: false,

	build: {
		emptyOutDir: true,
		outDir: "../dist",
	},

	plugins: VitePluginNode({
		appPath: "./src/main.ts",
		// not used because we use vite-node during development
		adapter: "express",
	}),
});
