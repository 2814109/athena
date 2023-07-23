
import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: "http://127.0.0.1:8888/query",
  ignoreNoDocuments: true,
  documents: ["graphqls/**/*.graphql"],
  generates: {
    "./src/__generated__/": {
      preset: "client",
      config: {
        documentMode: 'string',
        avoidOptionals: true,
        constEnums: true,
        withHooks: true,
        withComponent: false,
        futureProofEnums: true

      },
    }
  },
  hooks: { afterAllFileWrite: ['prettier --write'] },

};

export default config;
