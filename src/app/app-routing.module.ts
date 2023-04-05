import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListeRelevesComponent } from './liste-releves/liste-releves.component';
import {ReleveComponent} from "./releve/releve.component";
import {NouveauReleveComponent} from "./nouveau-releve/nouveau-releve.component";

const routes: Routes = [
  { path: '', component: ListeRelevesComponent },
  { path: 'releve/:id', component: ReleveComponent },
  { path: 'add', component: NouveauReleveComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
