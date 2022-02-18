import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FilterFindIncludesComponent } from './filter-find-includes/filter-find-includes.component';
import { ReduceSexComponent } from './reduce/reduce-por-sexo/reduce-sexo.component';
import { ReduceIdadeComponent } from './reduce/reduce-idade/reduce-idade.component';

@NgModule({
  declarations: [
    AppComponent,
    FilterFindIncludesComponent,
    ReduceSexComponent,
    ReduceIdadeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
