import { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  //   schema: 'https://hasura-ve-service-hqsdz3yhoa-wm.a.run.app/v1/graphql',
  schema: [
    {
      'https://hasura-ve-service-hqsdz3yhoa-wm.a.run.app/v1/graphql': {
        headers: {
          'x-hasura-admin-secret': 'MyTopSecretAdminKey',
        },
      },
    },
  ],
  // config: {
  //   asyncQuery: true,
  //   clientPath: './src/graphql/apolloClient',
  //   dedupeFragments: true,
  // },
  documents: ['src/**/*.gql'],
  generates: {
    './src/graphql/graphql.ts': {
      plugins: [
        'typescript',
        'typescript-operations',
        'typescript-graphql-request',
      ],
    },
  },
};

export default config;
