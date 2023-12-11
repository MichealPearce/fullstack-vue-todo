import { defineConfig, loadEnv } from "vite";
import vue from "@vitejs/plugin-vue";
import VueRouter from "unplugin-vue-router/vite";
import Components from "unplugin-vue-components/vite";

// https://vitejs.dev/config/
export default defineConfig((env) => {
	const envars = loadEnv(env.mode, "../", ["SERVER_", "CLIENT_"]);

	const serverURL = new URL(envars.SERVER_URL ?? "http://localhost:3001");
	const clientURL = new URL(envars.CLIENT_URL ?? "http://localhost:3000");

	const serverAPIPrefix = envars.SERVER_API_PREFIX ?? "/api";

	return {
		envPrefix: "CLIENT_",
		envDir: "../",

		define: {
			__API_PREFIX__: JSON.stringify(serverAPIPrefix),
		},

		build: {
			outDir: "../dist/client",
			emptyOutDir: true,
		},

		server: {
			port: parseInt(clientURL.port),
			proxy: {
				[serverAPIPrefix]: serverURL.href,
			},
		},

		plugins: [
			VueRouter({
				dts: "./src/types/router.d.ts",
			}),
			Components({
				directoryAsNamespace: true,
				dts: "./src/types/components.d.ts",
			}),
			vue(),
		],
	};
});
