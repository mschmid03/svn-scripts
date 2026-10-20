import { sassPlugin } from "esbuild-sass-plugin";

// Gemeinsame Config für builder.mjs (Release) und watcher.mjs (lokale Entwicklung)
export const options = {
    entryPoints: ["src/main.ts"],
    format: "esm",
    bundle: true,
    splitting: true,
    target: "es2020",
    outdir: "dist",
    chunkNames: "chunks/[name]-[hash]",
    plugins: [sassPlugin()],
};
