import { Component, OnInit } from '@angular/core';
import { bookRequestModal } from 'src/app/modals/Book-request-modal';
import { BooksService } from 'src/app/services/books.service';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-add-edit-books',
  templateUrl: './add-edit-books.component.html',
  styleUrls: ['./add-edit-books.component.css']
})
export class AddEditBooksComponent implements OnInit {
  book : bookRequestModal = {
    id: 0,
    title:'',
    category:'',
    description:'',
    price: '',
    rate: ''
  }
  onClose : any
  constructor(
    private bookService : BooksService,
    public bsModalRef : BsModalRef
  ) { }

  ngOnInit(): void {
  }

  onAddBook(){
    let confirmAdd = confirm("Add Book")
    if(confirmAdd){
      this.bookService.addBook(this.book).subscribe(bookAdded =>{
        console.log("Book Added ");
        this.onClose(bookAdded)
        this.bsModalRef.hide(),err=>{console.log(err);
        }
        
      })
    }
  }

  onEditBook(){
    let confirmEdit= confirm("Edit Book")
    if(confirmEdit){
      this.bookService.editBook(this.book).subscribe(bookEdit=>{
        console.log(bookEdit);
        this.onClose(bookEdit)
        this.bsModalRef.hide(),err=>{console.log(err);
        }
        
      })
    }
  }

}
