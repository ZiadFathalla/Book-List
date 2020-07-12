import { Component, OnInit } from '@angular/core';
import { BooksService } from 'src/app/services/books.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { AddEditBooksComponent } from './add-edit-books/add-edit-books.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  bsModalRef: BsModalRef;
  books: any = []
  constructor(
    private bookservice: BooksService ,
    private modalService: BsModalService
    ) { }

  ngOnInit(): void {
    this.onFetchAllData()


  }
  onFetchAllData() {
    this.bookservice.getAllBooks().subscribe(Allbooks => {
      this.books = Allbooks
      console.log(this.books)
    })

  }
  onAdd() {
    this.bsModalRef = this.modalService.show(AddEditBooksComponent);
    this.bsModalRef.content.onClose = (added) =>{
      if(added){
        this.onFetchAllData()
      }
    }
    console.log("Entered");
  }
  onEditBook(book:any) {
    console.log(book);
    this.bsModalRef = this.modalService.show(AddEditBooksComponent,{initialState : {book}})
    this.bsModalRef.content.onClose = (updated) =>{
      if(updated){
        this.onFetchAllData()
      }
    }
  }
  onDelBook(bookid: any) {

    let confirmDelete = confirm('Are You Sure')
    if (confirmDelete) {
      this.bookservice.deleteBook(bookid).subscribe(deleted => {
        this.onFetchAllData()
      })
    } else {
      console.log(confirmDelete)
    }

  }

}
