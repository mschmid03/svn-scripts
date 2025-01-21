import * as esbuild from "esbuild";
import { sassPlugin } from "esbuild-sass-plugin";

const context = await esbuild.context({
  entryPoints: ["index.ts", "custom.scss"],
  bundle: true,
  minify: false,
  sourcemap: true,
  outdir: "dist",
  plugins: [sassPlugin()],
});
// Enable watch mode
await context.watch();

// // Enable serve mode
// await context.serve();
//
// // Dispose of the context
// await context.dispose();
