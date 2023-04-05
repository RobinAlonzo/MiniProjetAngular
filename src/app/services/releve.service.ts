import { Injectable } from '@angular/core';
import {Releve} from "../model/releve";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ReleveService {

  constructor(private http : HttpClient) { }

  getReleves(): Observable<Releve[]> {
    return this.http.get<Releve[]>("http://localhost:3000/RELEVES");
  }

  getReleveById(id: number): Observable<Releve> {
    const releve = this.http.get<Releve>('http://localhost:3000/RELEVES/' + id);
    if (releve === undefined) {
      throw new Error('Releve introuvable');
    }
    else {
      return releve;
    }
  }


}
