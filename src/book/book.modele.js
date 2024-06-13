const { Module } = require('@nestjs/common');
const { BookService } = require('./book.service');
const { BookController } = require('./book.controller');
const { BookSchema } = require('./book.schema');
const { MongooseModule } = require('@nestjs/mongoose');

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Book', schema: BookSchema }]),
  ],
  controllers: [BookController],
  providers: [BookService],
})
export class BookModule {}
