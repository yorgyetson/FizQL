import { Body, Controller, HttpStatus, Post, Req, Res } from '@nestjs/common';
import { UsersService } from './users.service';
import { Request, Response } from 'express';
import { GraphqlService } from 'src/graphql/graphql.service';
import { UserCredentialsDto } from './dto/user-credentials.dto';
import { JwtService } from '@nestjs/jwt';

@Controller('users')
export class UsersController {
  constructor(
    private usersService: UsersService,
    private graphqlService: GraphqlService,
    private readonly jwtService: JwtService,
  ) {}

  @Post('/login')
  async login(@Body() credentials: UserCredentialsDto, @Res() res: Response) {
    const { username, password } = credentials;
    const query = await this.graphqlService.GetUserByUsername(username);
    const user = query.users[0];

    if (!user) {
      return res
        .status(HttpStatus.UNAUTHORIZED)
        .json({ Error: 'Unauthorized' });
    }

    if (!user.active) {
      return res
        .status(HttpStatus.UNAUTHORIZED)
        .json({ Error: 'Unauthorized' });
    }

    const validated = this.usersService.Validate(password, user.password);

    if (!validated) {
      return res
        .status(HttpStatus.UNAUTHORIZED)
        .json({ Error: 'Unauthorized' });
    }

    const token = this.usersService.CreateAuthToken(user);
    const refreshToken = this.usersService.CreateRefreshToken(user);

    res.cookie('refreshToken', refreshToken, {
      maxAge: parseInt(process.env.USER_REFRESH_TOKEN_EXPIRATION) * 86400000,
      httpOnly: true,
      secure: process.env.DEV != 'true',
    });

    res.status(HttpStatus.OK).json({ token });
  }

  @Post('/refresh')
  async refresh(@Req() req: Request, @Res() res: Response) {
    try {
      const decoded = this.jwtService.verify(req.cookies.refreshToken);
      const query = await this.graphqlService.GetUserByPK(decoded.sub);
      const user = query.users_by_pk;

      const token = this.usersService.CreateAuthToken(user);
      // res.header('Access-Control-Allow-Credentials', 'true');

      res.status(HttpStatus.OK).json({ token });
    } catch (error) {
      res.status(HttpStatus.UNAUTHORIZED).json({ error });
    }
  }
}
