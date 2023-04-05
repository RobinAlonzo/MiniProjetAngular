import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {map, Observable} from "rxjs";
import {Releve} from "../model/releve";
import {ReleveService} from "../services/releve.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-nouveau-releve',
  templateUrl: './nouveau-releve.component.html',
  styleUrls: ['./nouveau-releve.component.scss']
})
export class NouveauReleveComponent {

  formulaire!: FormGroup;
  currentReleve$!: Observable<Releve>;

  constructor(private formBuilder: FormBuilder, private releveService: ReleveService, private router: Router) { }



  ngOnInit(): void {
    this.formulaire = this.formBuilder.group({
      nomClient: [null, [Validators.required, Validators.minLength(3)]],
      nomTechnicien: [null, [Validators.required, Validators.minLength(3)]],
      adresseClient: [null, [Validators.required, Validators.minLength(3)]],
      marque: [null, [Validators.required, Validators.minLength(1)]],
      modele: [null, [Validators.required, Validators.minLength(1)]],
      dateMiseEnService: [null, [Validators.required, Validators.minLength(6)]],
      dateIntervention: [null, [Validators.required, Validators.minLength(3)]],
      numeroSerie: [null, [Validators.required, Validators.minLength(4)]],
      description: [null, [Validators.required, Validators.minLength(1)]],
      tempsIntervention: [null, [Validators.required, Validators.minLength(1)]]
    });

    this.currentReleve$ = this.formulaire.valueChanges.pipe(map(formValue => ({
      id: 0,
      nomClient: formValue.nomClient,
      nomTechnicien: formValue.nomTechnicien,
      adresseClient: formValue.adresseClient,
      marque: formValue.marque,
      modele: formValue.modele,
      dateMiseEnService: formValue.dateMiseEnService,
      dateIntervention: formValue.dateIntervention,
      numeroSerie: formValue.numeroSerie,
      description: formValue.description,
      tempsIntervention: formValue.tempsIntervention
    })));

  }

}
