import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DarkModeComponent } from './dark-mode/dark-mode.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SwimmingComponent } from './swimming/swimming.component';
import { MainComponent } from './main/main.component';
import { SpawanieComponent } from './spawanie/spawanie.component';
import { NiemieckiComponent } from './niemiecki/niemiecki.component';
import { CComponent } from './c/c.component';
import { ListComponent } from './list/list.component';
import { JavaComponent } from './java/java.component';
import { HairdressingComponent } from './hairdressing/hairdressing.component';
import { EntryFormComponent } from './entry-form/entry-form.component';
import { CourseFormComponent } from './course-form/course-form.component';
import { FaqComponent } from './faq/faq.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    DarkModeComponent,
    SwimmingComponent,
    MainComponent,
    SpawanieComponent,
    ListComponent,
    NiemieckiComponent,
    CComponent,
    JavaComponent,
    HairdressingComponent,
    EntryFormComponent,
    CourseFormComponent,
    FaqComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
