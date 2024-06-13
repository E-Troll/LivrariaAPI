const { Module } = require('@nestjs/common');
const { MongooseModule } = require('@nestjs/mongoose');
const { BookModule } = require('./book/book.module');
const { ConfigModule } = require('@nestjs/config');

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
    }),
    MongooseModule.forRoot(process.env.MONGODB_URI),
    BookModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
