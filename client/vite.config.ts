import { defineConfig, loadEnv } from "vite";
import vue from "@vitejs/plugin-vue";
import VueRouter from "unplugin-vue-router/vite";
import Components from "unplugin-vue-components/vite";

// https://vitejs.dev/config/
export default defineConfig((env) => {
	const envars = loadEnv(env.mode, "../", ["CLIENT_", "SERVER_"]);

	const clientURL = new URL(envars.CLIENT_URL ?? "http://localhost:3000");
	const serverURL = new URL(envars.SERVER_URL ?? "http://localhost:3001");

	const apiPrefix = envars.SERVER_API_PREFIX ?? "/api";

	return {
		envDir: "../",
		envPrefix: "CLIENT_",

		define: {
			__API_PREFIX__: JSON.stringify(apiPrefix),
		},

		build: {
			emptyOutDir: true,
			outDir: "../dist/client",
		},

		css: {
			preprocessorOptions: {
				scss: {
					additionalData: '@import "sassy";',
					includePaths: ["src/styles"],
				},
			},
		},

		server: {
			port: parseInt(clientURL.port),
			proxy: {
				[apiPrefix]: serverURL.href,
			},
		},

		plugins: [
			Components({
				dts: "./src/types/components.d.ts",
				directoryAsNamespace: true,
			}),
			VueRouter({
				dts: "./src/types/router.d.ts",
			}),
			vue(),
		],
	};
});
