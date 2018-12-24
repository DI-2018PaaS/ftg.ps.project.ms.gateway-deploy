import { Component, OnInit } from '@angular/core';
import { Financement } from 'app/models/acteur/demande/Financement.model';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-details-paiement',
  templateUrl: './details-paiement.component.html',
  styleUrls: ['./details-paiement.component.scss']
})
export class DetailsPaiementComponent implements OnInit {

  financement = {} as Financement;
  modeLivraison = new FormControl();
  livreur = new FormControl();
  constructor() { }

  ngOnInit() {
  }

}
