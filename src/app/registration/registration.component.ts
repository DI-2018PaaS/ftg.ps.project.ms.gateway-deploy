import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { RegistrationService } from 'app/service/registration.service';
import { Utilisateur } from 'app/models/user/utilisateur/utilisateur.model';
import { AngularFireList } from 'angularfire2/database';
import { ActeurType } from 'app/models/acteur/acteur-type/acteur-type.model';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  
  hide: boolean = true;
  utilisateur = {} as Utilisateur;
  utilisateurRef$ : AngularFireList<Utilisateur>;
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
  selectFormControl = new FormControl('', Validators.required);
  email = new FormControl('', [Validators.required, Validators.email]);


  constructor(private registrationService: RegistrationService) { }

  ngOnInit() {
    this.typeActeurs;
  }
  
  createUser(){
    this.registrationService.createUser(
      {
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
      });
    this.utilisateur = {} as Utilisateur;
  }


}
