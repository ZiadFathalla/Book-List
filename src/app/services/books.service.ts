import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { bookRequestModal } from '../modals/Book-request-modal';




@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor(private http :HttpClient ) { }

  getAllBooks(){
    return this.http.get(environment.apiUrl + '/books/')  
  }
  addBook(body : bookRequestModal){
    return this.http.post(environment.apiUrl +'/books/',body)
  }

  editBook(body:bookRequestModal){
    return this.http.put(environment.apiUrl +'/books/' + body.id,  body)
  }

  deleteBook(id : bookRequestModal){
    return this.http.delete(environment.apiUrl + '/books/' + id )
    // return this.http.delete(`${environment.apiUrl}/books/${id}` )
  }
}

