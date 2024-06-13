import { Component, OnInit } from '@angular/core';
import { Book } from '../book';
import { BookService } from '../book.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book-add',
  templateUrl: './book-add.component.html',
  styleUrls: ['./book-add.component.css'],
})
export class BookAddComponent implements OnInit {
  book: Book = {
    isbn: '',
    title: '',
    author: '',
    category: '',
  };

  constructor(private bookService: BookService, private router: Router) {}

  ngOnInit(): void {}

  addBook(): void {
    this.bookService.addBook(this.book).subscribe((book) => {
      this.router.navigate(['/books']);
    });
  }
}
