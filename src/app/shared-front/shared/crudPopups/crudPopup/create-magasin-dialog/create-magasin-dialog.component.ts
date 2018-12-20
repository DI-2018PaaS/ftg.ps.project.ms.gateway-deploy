import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { Magasin } from 'app/models/msmagasindomains/magasin/magasin.model';
import { AngularFireList } from 'angularfire2/database';
import { MagasinService } from 'app/service/magasin.service';
import {SessionStorageService } from 'angular-web-storage';
import { Utilisateur } from 'app/models/user/utilisateur/utilisateur.model';

@Component({
  selector: 'app-create-magasin-dialog',
  templateUrl: './create-magasin-dialog.component.html',
  styleUrls: ['./create-magasin-dialog.component.scss']
})
export class CreateMagasinDialogComponent implements OnInit {
  hide = true;
  magasin = {} as Magasin;
  magasinRef$ : AngularFireList<Magasin>;
  utilisateur = {} as Utilisateur;
  constructor(private magasinService : MagasinService,private session: SessionStorageService) { 
    this.utilisateur = this.session.get("utilisateur")
        console.log("idFrouniss ",this.session.get("utilisateur"))
  }

  ngOnInit() {
  }
  
  onFileChanged(event) {
    const file = event.target.files[0]
  }
  email = new FormControl();
  nom = new FormControl();
  ref = new FormControl();
  description = new FormControl();


  // getErrorMessage() {
  //   return this.email.hasError('required') ? 'Vous devez entrer une adresse!' :
  //       this.email.hasError('email') ? 'Email invalide!' :
  //           '';
  // }

  createNewMagasin (){
     console.log(this.magasin);
      var object = this.magasinService.createMagasin({
      nom: this.magasin.nom, 
      ref: this.magasin.ref,
      description: this.magasin.description,
      email: this.magasin.email,
      adresse: this.magasin.adresse,
      nIdProprietaire: this.utilisateur.fkey,
      isValid:false,
      idMagasin: ""
     });
     this.magasin = {} as Magasin;
      }
}
