import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const documentBuilder = new DocumentBuilder()
    .setTitle('Tweet Services 1.0 API Rest')
    .setDescription('The Tweet API')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, documentBuilder);
  SwaggerModule.setup('docs', app, document);

  await app.listen(3000);
}
bootstrap();
