import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { GraphqlService } from './graphql/graphql.service';
import { UsersService } from './users/users.service';
import { UsersController } from './users/users.controller';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [ConfigModule.forRoot(), JwtModule.register({ secret: process.env.JWT_SECRET })],
  controllers: [AppController, UsersController],
  providers: [AppService, GraphqlService, UsersService],
})
export class AppModule {}
