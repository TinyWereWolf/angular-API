import { Injectable } from '@angular/core';
import {HttpHeaders, HttpClient} from '@angular/common/http';
import {Book} from './book'
import { Observable } from 'rxjs';
import { Title } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class LibraryService {

  bookUrl = "http://localhost:5000/livres/"

  constructor(
   private  http: HttpClient) { }

  getLivre() : Observable<Book[]> {
    return this.http.get<Book[]>(this.bookUrl)
    }

  ajouterLivre(title:string, bookNumber:number, pages:[string]): Observable<Book>{
    return this.http.post<Book>(this.bookUrl, {"title": title, "bookNumber": bookNumber, "pages": pages})
  }

  deleteLivre(bookNumber:number): Observable<Book> {
    return this.http.delete<Book>(this.bookUrl + bookNumber)
  }

  update(title:string, bookNumber:number, pages:[string]): Observable<Book> {
    return this.http.put<Book>(this.bookUrl, { "title": title, "bookNumber": bookNumber, "pages": pages})
  }

  
}