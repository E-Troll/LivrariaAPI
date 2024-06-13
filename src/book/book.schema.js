const { Prop, Schema, SchemaFactory } = require('@nestjs/mongoose');
const { Document } = require('mongoose');

@Schema()
export class Book extends Document {
  @Prop({ required: true })
  isbn: string;

  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  author: string;

  @Prop({ required: true })
  category: string;
}

export const BookSchema = SchemaFactory.createForClass(Book);
