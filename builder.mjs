import * as esbuild from "esbuild";
import { sassPlugin } from "esbuild-sass-plugin";

const context = await esbuild.context({
    format: "esm",
    entryPoints: [
        "home-swiper.ts",
        "footer-swiper.ts",
        "team-swiper.ts",
        "team-image-swiper.ts",
        "team-swiper-in-swiper.ts",
        "team-swiper-in-swiper-tabs.ts",
        "timeline.ts",
        "custom.scss",
    ],
    bundle: true,
    splitting: true,
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
