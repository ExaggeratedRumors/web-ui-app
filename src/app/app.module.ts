import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DarkModeComponent } from './dark-mode/dark-mode.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TempFormComponent } from './temp-form/temp-form.component';

@NgModule({
  declarations: [
    AppComponent,
    DarkModeComponent,
    TempFormComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
