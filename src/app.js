const { NestFactory } = require('@nestjs/core');
const { AppModule } = require('./app.module');
const { ConfigService } = require('@nestjs/config');

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);
  const port = configService.get('PORT') || 3000;
  await app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
  });
}

bootstrap();
