import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cookieParser from 'cookie-parser';

async function bootstrap() {
  var corsOptions = {
    origin: true,
    credentials: true,
  };

  const app = await NestFactory.create(AppModule);
  app.enableCors(corsOptions);
  app.use(cookieParser());
  await app.listen(3001);
}
bootstrap();
