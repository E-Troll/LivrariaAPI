const { Injectable, Inject } = require('@nestjs/common');
const { Model } = require('mongoose');
const { InjectModel } = require('@nestjs/mongoose');
const { Book, BookSchema } = require('./book.schema');

@Injectable()
export class BookService {
  constructor(@InjectModel(Book.name) private bookModel: Model<Book>) {}

  async create(book: Book): Promise<Book> {
    const createdBook = new this.bookModel(book);
    return createdBook.save();
  }

  async findAll(): Promise<Book[]> {
    return this.bookModel.find().exec();
  }

  async findOne(id: string): Promise<Book> {
    return this.bookModel.findById(id).exec();
  }

  async update(id: string, book: Book): Promise<Book> {
    return this.bookModel.findByIdAndUpdate(id, book, { new: true }).exec();
  }

  async remove(id: string): Promise<Book> {
    return this.bookModel.findByIdAndRemove(id).exec();
  }
}
