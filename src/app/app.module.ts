import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- ngModel lives here
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule  // <-- import FormsModule before binding with  [(ngModule)]
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
