import { sassPlugin } from "esbuild-sass-plugin";

// Gemeinsame Config für builder.mjs (Release) und watcher.mjs (lokale Entwicklung)
export const options = {
    entryPoints: ["src/main.ts"],
    format: "esm",
    bundle: true,
    target: "es2020",
    outdir: "dist",
    plugins: [sassPlugin()],
};
