import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { RegistrationService } from 'app/service/registration.service';
import { Utilisateur } from 'app/models/user/utilisateur/utilisateur.model';
import { AngularFireList } from 'angularfire2/database';
import { ActeurType } from 'app/models/acteur/acteur-type/acteur-type.model';
import { Acheteur } from 'app/models/acteur/acheteur/acheteur.model';
import { Animateur } from 'app/models/acteur/animateur/animateur.model';
import { Fournisseur } from 'app/models/acteur/fournisseur/fournisseur.model';
import { AnimateurService } from 'app/service/animateur.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  
  hide: boolean = true;
  utilisateur = {} as Utilisateur;
  acheuteur = {} as Acheteur;
  animateur = {} as Animateur;
  fournisseur = {} as Fournisseur;

  utilisateurRef$ : AngularFireList<Utilisateur>;
  acheteurRef$ : AngularFireList<Acheteur>;
  fournisseurRef$ : AngularFireList<Fournisseur>;
  animateurRef$ : AngularFireList<Animateur>;

  user: Utilisateur={
    username: this.utilisateur.username,
    utilUniqueid: 0,
    lastName: this.utilisateur.lastName,
    firstName: this.utilisateur.firstName,
    mail: this.utilisateur.mail,
    phoneNumber: this.utilisateur.phoneNumber,
    password: this.utilisateur.password,
    creationDateUser: null,
    lastConnectionDate: null,
    userActeurID: this.utilisateur.userActeurID,
  }

  typeActeurs: ActeurType []=[
    {idActeurType: 1,libelleActeur: "Animateur"},
    {idActeurType: 2,libelleActeur:"Acheteur"},
    {idActeurType: 3,libelleActeur: "Fournisseur"}
  ];
  selectedType : ActeurType["idActeurType"];
  selectFormControl = new FormControl('', Validators.required);
  email = new FormControl('', [Validators.required, Validators.email]);


  constructor(private registrationService: RegistrationService, private animateurService: AnimateurService) { }

  ngOnInit() {
    this.typeActeurs;
  }
  
  createUser(){
    
    if(this.selectedType == 1){
      this.animateurService.createAnimateur({
        animateurId: 0,
        type: this.animateur.type,
        nom: this.animateur.nom,
        prenom: this.animateur.prenom,
        email: this.animateur.email,
        telephone: this.animateur.telephone,
        userCreated: 0,
        userLastModif: 0,
        dateCreated: null,
        dateLastModif: null
      })
      this.registrationService.createUser(
        {
          username: this.utilisateur.username,
          utilUniqueid: 0,
          lastName: this.animateur.nom,
          firstName: this.animateur.prenom,
          mail: this.animateur.email,
          phoneNumber: this.animateur.telephone,
          password: this.utilisateur.password,
          creationDateUser: null,
          lastConnectionDate: null,
          userActeurID: this.animateur.animateurId
        });
    }
  

    this.utilisateur = {} as Utilisateur;
    this.animateur = {} as Animateur;
  }


}
