import { Component, OnInit, Input } from '@angular/core';
import { Book } from '../book';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { BookService } from '../book.service';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css'],
})
export class BookDetailsComponent implements OnInit {
  @Input() book?: Book;

  constructor(
    private route: ActivatedRoute,
    private bookService: BookService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getBook();
  }

  getBook(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.bookService.getBook(id).subscribe((book) => (this.book = book));
    }
  }

  goBack(): void {
    this.location.back();
  }
}
