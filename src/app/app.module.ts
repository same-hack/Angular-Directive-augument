import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PreventDoubleClickDirective } from './directive/prevent-double-click.directive';

@NgModule({
  declarations: [
    AppComponent,
    PreventDoubleClickDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
