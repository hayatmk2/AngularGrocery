import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { GroceryComponent } from './app.grocery';
import { FormsModule } from '@angular/forms';
import { MatToolbarModule} from '@angular/material/toolbar'
import{ MatCard, MatCardModule } from '@angular/material/card'
import { AppComponent } from './app.component';
import{ MatFormFieldModule } from '@angular/material/form-field'

@NgModule({
  declarations: [
    GroceryComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MatToolbarModule,
    MatCardModule,
    MatFormFieldModule
  ],
  providers: [],
  bootstrap: [GroceryComponent]
})
export class AppModule { }
