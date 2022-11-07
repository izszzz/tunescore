import {env} from "./src/env/server.mjs"
import withRoutes from "nextjs-routes/config"

/**
 * Don't be scared of the generics here.
 * All they do is to give us autocompletion when using this.
 *
 * @template {import('next').NextConfig} T
 * @param {T} config - A generic parameter that flows through to the return type
 * @constraint {{import('next').NextConfig}}
 */
function defineNextConfig(config) {
  return config
}

export default withRoutes()(
  defineNextConfig({
    reactStrictMode: true,
    swcMinify: true,
    // Next.js i18n docs: https://nextjs.org/docs/advanced-features/i18n-routing
    i18n: {
      locales: ["en", "ja"],
      defaultLocale: "ja",
    },

    webpackDevMiddleware: config => {
      config.watchOptions = {
        poll: 800,
        aggregateTimeout: 300,
      }
      return config
    },
  })
)
