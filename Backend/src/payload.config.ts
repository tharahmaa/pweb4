import path from 'path'

import { payloadCloud } from '@payloadcms/plugin-cloud'
import { mongooseAdapter } from '@payloadcms/db-mongodb'
import { webpackBundler } from '@payloadcms/bundler-webpack'
import { slateEditor } from '@payloadcms/richtext-slate'
import { buildConfig } from 'payload/config'

import Users from './collections/Users'
import Media from "./collections/Media"
import Blog from "./collections/Blog"

import Log from './collections/Log'

const serverURL = process.env.PAYLOAD_PUBLIC_SERVER_URL;
const clientURLS = JSON.parse(process.env.PAYLOAD_PUBLIC_CLIENT_URLS)

export default buildConfig({
  serverURL,
  admin: {
    user: Users.slug,
    bundler: webpackBundler(),
  },
  cors: clientURLS,
  csrf: clientURLS,
  editor: slateEditor({}),
  collections: [Users, Blog, Media, Log],
  typescript: {
    outputFile: path.resolve(__dirname, 'payload-types.ts'),
  },
  graphQL: {
    schemaOutputFile: path.resolve(__dirname, 'generated-schema.graphql'),
  },
  plugins: [payloadCloud()],
  db: mongooseAdapter({
    url: process.env.DATABASE_URI,
  }),
})
