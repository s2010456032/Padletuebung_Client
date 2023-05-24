import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { PadletDetailsComponent } from
    './padlet-details/padlet-details.component';
import { PadletListComponent } from './padlet-list/padlet-list.component';
import { HomeComponent } from './home/home.component';
import {PadletFormComponent} from "./padlet-form/padlet-form.component";
import {EntryFormComponent} from "./entry-form/entry-form.component";
import {LoginComponent} from "./login/login.component";


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'padlets', component: PadletListComponent },
  { path: 'padlets/:id', component: PadletDetailsComponent },
  { path: 'admin', component: PadletFormComponent },
  { path: 'admin/:id', component: PadletFormComponent },
  { path: 'entries', component: EntryFormComponent },
  { path: 'entries/:id', component: EntryFormComponent },
  { path: 'login', component: LoginComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
