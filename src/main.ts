import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module.js';
import cookieParser from 'cookie-parser';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(cookieParser());
  app.enableCors({
    origin:['http://localhost:5173','https://frontend-seven-sable-29.vercel.app/'],
    credentials:true
  });

  await app.listen(4900);
}

await bootstrap();
