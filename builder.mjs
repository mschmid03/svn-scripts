import * as esbuild from "esbuild";
import { rm } from "node:fs/promises";
import { options } from "./esbuild.config.mjs";

// Release-Build: minifiziert, ohne Sourcemaps.
// Nur dist/chunks wird geleert; die alten Einzeldateien in dist/ bleiben,
// solange noch Seiten @latest bzw. ältere Tags darauf verweisen.
await rm("dist/chunks", { recursive: true, force: true });

await esbuild.build({
    ...options,
    minify: true,
    sourcemap: false,
    drop: ["debugger"],
    logLevel: "info",
});
