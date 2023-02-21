import { Injectable } from '@nestjs/common';
import { GraphQLClient } from 'graphql-request';
import { getSdk } from 'src/graphql/graphql';

@Injectable()
export class GraphqlService {
  client = new GraphQLClient(process.env.GRAPHQL_ENDPOINT, {
    headers: { 'x-hasura-admin-secret': process.env.HASURA_SECRET },
  });

  sdk = getSdk(this.client);


  // Users
  async GetUserByPK(id: string) {
    return await this.sdk.GetUserByPK({ id });
  }

  async GetUserByEmail(email: string) {
    return await this.sdk.GetUserByEmail({ email });
  }

  async GetUserByUsername(username: string) {
    return await this.sdk.GetUserByUsername({ username });
  }
}
