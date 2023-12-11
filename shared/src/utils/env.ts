const envars = import.meta.env;

export function env(name: string): string | undefined;
export function env(name: string, fallback: string): string;
export function env(name: string, fallback?: string): string | undefined {
	if (name in envars) {
		return envars[name];
	}

	return fallback;
}

export function demandEnv(name: string): string {
	const value = env(name);

	if (value === undefined) {
		throw new Error(`Missing environment variable ${name}`);
	}

	return value;
}
