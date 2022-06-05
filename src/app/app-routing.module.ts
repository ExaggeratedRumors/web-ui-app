import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DarkModeComponent } from './dark-mode/dark-mode.component';
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

const routes: Routes = [];

@NgModule({
  imports: [
    RouterModule.forRoot([
      {path: 'dark-mode', component: DarkModeComponent},
      {path: 'swimming', component: SwimmingComponent},
      {path: 'main', component: MainComponent},
      //{path: '**', component: MainComponent},
      {path: 'spawanie', component: SpawanieComponent},
      {path: 'list', component: ListComponent},
      {path: 'niemiecki', component: NiemieckiComponent},
      {path: 'c', component: CComponent},
      {path: 'java', component: JavaComponent},
      {path: 'hairdressing', component: HairdressingComponent},
      {path: 'entry-form', component: EntryFormComponent},
      {path: 'course-form', component: CourseFormComponent},
      {path: 'faq', component: FaqComponent},
      //{path: '', redirectTo: '/main', pathMatch: 'full'},
    ]),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
