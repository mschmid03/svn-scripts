import * as esbuild from "esbuild";
import { options } from "./esbuild.config.mjs";

// Lokale Entwicklung: npm run watch + npm run serve (Port 3000).
// Schreibt nach dist-dev/ (nicht eingecheckt), damit dist/ nur Release-Builds enthält.
const context = await esbuild.context({
    ...options,
    outdir: "dist-dev",
    minify: false,
    sourcemap: true,
    logLevel: "info",
});

await context.watch();
