/* eslint-disable import/no-extraneous-dependencies */
import { CodegenConfig } from '@graphql-codegen/cli';
import { endpoint } from './config/index';

const config: CodegenConfig = {
  schema: endpoint,
  documents: ['app/**/*.tsx', '!app/gql/**/*'],
  generates: {
    './app/gql/': {
      preset: 'client',
      config: {
        documentMode: 'string',
      },
    },
  },
  hooks: { afterAllFileWrite: ['prettier --write'] },
};

export default config;