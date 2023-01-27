import removeImports from "next-remove-imports";
import withRoutes from "nextjs-routes/config";

import nextI18NextConfig from "./next-i18next.config.js";
import { env } from "./src/env/server.mjs";

/**
 * Don't be scared of the generics here.
 * All they do is to give us autocompletion when using this.
 *
 * @template {import('next').NextConfig} T
 * @param {T} config - A generic parameter that flows through to the return type
 * @constraint {{import('next').NextConfig}}
 * @type {import('next-i18next').UserConfig}
 */
function defineNextConfig(config) {
  return withRoutes()(removeImports()(config));
}

export default defineNextConfig({
  reactStrictMode: true,
  swcMinify: true,
  output: "standalone",
  // Next.js i18n docs: https://nextjs.org/docs/advanced-features/i18n-routing
  i18n: nextI18NextConfig.i18n,
  webpackDevMiddleware: (config) => {
    config.watchOptions = {
      poll: 5000,
      aggregateTimeout: 300,
    };
    return config;
  },
  eslint: {
    dirs: ["src/"],
    ignoreDuringBuilds: true,
    ignoreBuildErrors: true,
  },
});
