import { env } from "@fullstack-todo/shared";
import fastify from "fastify";

const app = fastify({
	logger: true,
	ignoreDuplicateSlashes: true,
	ignoreTrailingSlash: true,
	caseSensitive: false,
});

(async function main() {
	const serverURL = new URL(env("SERVER_URL", "http://localhost:3001"));

	app.get("/api/test", async () => {
		return { hello: "james" };
	});

	await app.listen({
		port: parseInt(serverURL.port),
	});

	console.log(
		app.printRoutes({
			commonPrefix: false,
			includeHooks: true,
			includeMeta: true,
		})
	);
})();
