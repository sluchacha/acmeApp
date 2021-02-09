import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppRoutingModule, AllComponents, EntryComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToastrModule } from 'ngx-toastr';
import { ModalModule } from 'ngx-bootstrap/modal';


@NgModule({
  declarations: [
    AppComponent,
    AllComponents,
    EntryComponents
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    ModalModule.forRoot()
  ],
  providers: [],
  entryComponents: [EntryComponents],
  bootstrap: [AppComponent]
})
export class AppModule { }
