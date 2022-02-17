import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FilterFindIncludesComponent } from './filter-find-includes/filter-find-includes.component';
import { ReduceComponent } from './reduce/reduce-por-sexo/reduce.component';

@NgModule({
  declarations: [
    AppComponent,
    FilterFindIncludesComponent,
    ReduceComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
