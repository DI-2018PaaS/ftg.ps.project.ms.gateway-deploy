import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { Boutique } from 'app/models/msmagasindomains/boutique/boutique.model';
import { AngularFireList } from 'angularfire2/database';
import { BoutiqueService } from 'app/service/boutique.service';

@Component({
  selector: 'app-create-boutique-dialog',
  templateUrl: './create-boutique-dialog.component.html',
  styleUrls: ['./create-boutique-dialog.component.scss']
})
export class CreateBoutiqueDialogComponent implements OnInit {
  hide = true;
  boutique = {} as Boutique;
  boutiqueRef$ : AngularFireList<Boutique>;
  constructor(private boutiqueService : BoutiqueService) { }

  ngOnInit() {
  }
  
  onFileChanged(event) {
    const file = event.target.files[0]
  }

  adresse = new FormControl();
  ref = new FormControl();
  description = new FormControl();
  nom = new FormControl();
  no = new FormControl();
  rue = new FormControl();
  codep = new FormControl();
  ville = new FormControl();

  // email = new FormControl('', [Validators.required, Validators.email]);
  // getErrorMessage() {
  //   return this.email.hasError('required') ? 'Vous devez entrer une adresse!' :
  //       this.email.hasError('email') ? 'Email invalide!' :
  //           '';
  // }


  createNewBoutique (){
    console.log(this.boutique);
    this.boutiqueService.createBoutique({
     nom: this.boutique.nom,
     ref: this.boutique.ref,
     description: this.boutique.description,
     no: this.boutique.no,
     rue: this.boutique.no,
     codep: this.boutique.codep,
     ville: this.boutique.ville,
     nIdProprietaire: 0
    });
    this.boutique = {} as Boutique;
     }


}