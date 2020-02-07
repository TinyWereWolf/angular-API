import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LibraryService } from '../library.service';
import { Book } from '../book';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  constructor(private router: Router, private libraryService: LibraryService) { }

  ngOnInit() {
    this.loadAll()
  }

  books : Book[]

  loadAll() {
    console.log('List of books')
    this.libraryService.getLivre().subscribe(
      (resultat) => {
        console.log("res ", resultat)
        this.books = resultat
      })
  }

  deleteBook(book : Book) {
    {
      this.libraryService.deleteLivre(book.bookNumber).subscribe(
        results => {
          console.log(results)
          this.loadAll()

        })
    }
  }

  addBook(title : string, bookNumber: number, pages : [string]){
      this.libraryService.ajouterLivre(title, bookNumber, pages).subscribe( 
    addBook =>{
      console.log(addBook)
      this.loadAll()
      })
    }
  }