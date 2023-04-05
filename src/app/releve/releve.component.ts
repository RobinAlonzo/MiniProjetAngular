import {Component, Input} from '@angular/core';
import { Releve } from "../model/releve";
import {ReleveService} from "../services/releve.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-releve',
  templateUrl: './releve.component.html',
  styleUrls: ['./releve.component.scss']
})
export class ReleveComponent {

  @Input() unReleve!: Releve;
  leReleve!: Releve;
  id!: string;

  constructor(private releveService: ReleveService, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    if (this.id !== undefined) {
      this.releveService.getReleveById(+this.id).subscribe(releve => this.leReleve = releve);
    }else {
      this.leReleve = this.unReleve;
    }
  }
}
