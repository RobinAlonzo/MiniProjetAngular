import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {ReactiveFormsModule} from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ReleveComponent } from './releve/releve.component';
import { ListeRelevesComponent } from './liste-releves/liste-releves.component';
import { NouveauReleveComponent } from './nouveau-releve/nouveau-releve.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ReleveComponent,
    ListeRelevesComponent,
    NouveauReleveComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
