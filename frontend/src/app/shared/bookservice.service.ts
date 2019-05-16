import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class Bookservice {




  constructor(private http : HttpClient) { }

  getMyBooks() {
    return this.http.get("/users/1/books");
  }

  deleteBook(idBook: number): any {
    return this.http.delete("/books/" + idBook);
  }

  saveBook(book: any): any {
    return this.http.post("/users/1/books", book);
  }

  getBooksAvailable(): any {
    return this.http.get("/users/1/books/status/FREE");
  }

}
