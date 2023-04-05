import { Component, OnInit } from '@angular/core';
import { Releve} from "../model/releve";
import { ReleveService } from "../services/releve.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-liste-releves',
  templateUrl: './liste-releves.component.html',
  styleUrls: ['./liste-releves.component.scss']
})
export class ListeRelevesComponent {

  listeReleves$!: Observable<Releve[]>;

  constructor(private myRelevesService: ReleveService) { }

  ngOnInit(): void {
    this.listeReleves$ = this.myRelevesService.getReleves();
  }

}
