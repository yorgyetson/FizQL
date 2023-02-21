import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { UserDataFragment } from 'src/graphql/graphql';

@Injectable()
export class UsersService {
  constructor(private readonly jwtService: JwtService) { }

  Validate(password: string, user_password: string) {
    return bcrypt.compareSync(password, user_password);
  }

  CreateAuthToken(user: UserDataFragment) {
    const hasuraClaims = {
      "https://hasura.io/jwt/claims": {
        'x-hasura-allowed-roles': ['user'],
        'x-hasura-default-role': 'user',
        'x-hasura-user-id': user.id,
      },
      email: user.email,
    };

    return this.jwtService.sign(
      { sub: user.id, ...hasuraClaims },
      { expiresIn: process.env.USER_AUTH_TOKEN_EXPIRATION + ' minutes' },
    );
  }

  CreateRefreshToken(user: UserDataFragment) {
    return this.jwtService.sign(
      { sub: user.id },
      { expiresIn: process.env.USER_REFRESH_TOKEN_EXPIRATION + ' minutes' },
    );
  }
}
