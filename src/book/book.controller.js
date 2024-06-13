const { Controller, Get, Post, Put, Delete, Param, Body } = require('@nestjs/common');
const { BookService } = require('./book.service');
const { Book } = require('./book.schema');

@Controller('books')
export class BookController {
  constructor(private readonly bookService: BookService) {}

  @Post()
  async create(@Body() book: Book): Promise<Book> {
    return this.bookService.create(book);
  }

  @Get()
  async findAll(): Promise<Book[]> {
    return this.bookService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Book> {
    return this.bookService.findOne(id);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() book: Book): Promise<Book> {
    return this.bookService.update(id, book);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<Book> {
    return this.bookService.remove(id);
  }
}
