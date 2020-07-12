import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { AddEditBooksComponent } from './pages/home/add-edit-books/add-edit-books.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http'
import { ModalModule }  from 'ngx-bootstrap/modal'
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AddEditBooksComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    ModalModule.forRoot(),
    FormsModule
  ],
  entryComponents: [
    AddEditBooksComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
