import * as esbuild from "esbuild";
import { rm } from "node:fs/promises";
import { options } from "./esbuild.config.mjs";

// Release-Build: minifiziert, ohne Sourcemaps.
// dist/chunks stammt aus der Variante mit dynamischem import() und wird entfernt;
// die alten Einzeldateien in dist/ bleiben, solange noch Seiten @latest darauf verweisen.
await rm("dist/chunks", { recursive: true, force: true });

await esbuild.build({
    ...options,
    minify: true,
    sourcemap: false,
    drop: ["debugger"],
    logLevel: "info",
});
