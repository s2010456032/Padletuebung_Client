import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';

import { AppComponent } from './app.component';
import { PadletListComponent } from './padlet-list/padlet-list.component';
import { PadletListItemComponent } from './padlet-list-item/padlet-list-item.component';
import { PadletDetailsComponent } from './padlet-details/padlet-details.component';
import {PadletService} from "./shared/padlet.service";
import { HomeComponent } from './home/home.component';
import {HttpClientModule} from "@angular/common/http";
import {ReactiveFormsModule} from "@angular/forms";
import { PadletFormComponent } from './padlet-form/padlet-form.component';
import {EntryFormComponent} from "./entry-form/entry-form.component";
import {EntryService} from "./shared/entry.service";
import { LoginComponent } from './login/login.component';
import {AuthenticationService} from "./shared/authentication.service";

@NgModule({
  declarations: [
    AppComponent,
    PadletListComponent,
    PadletListItemComponent,
    PadletDetailsComponent,
    HomeComponent,
    PadletFormComponent,
    EntryFormComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule, AppRoutingModule, HttpClientModule, ReactiveFormsModule
  ],
  providers: [PadletService, EntryService, AuthenticationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
