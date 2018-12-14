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
import { Router, NavigationExtras } from '@angular/router';
import { AcheteurService } from 'app/service/acheteur.service';
import { FournisseurService } from 'app/service/fournisseur.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  
  hide: boolean = true;
  utilisateur = {} as Utilisateur;
  acheteur = {} as Acheteur;
  animateur = {} as Animateur;
  fournisseur = {} as Fournisseur;

  utilisateurRef$ : AngularFireList<Utilisateur>;
  acheteurRef$ : AngularFireList<Acheteur>;
  fournisseurRef$ : AngularFireList<Fournisseur>;
  animateurRef$ : AngularFireList<Animateur>;

  typeActeurs: ActeurType []=[
    {idActeurType: 1,libelleActeur: "Animateur"},
    {idActeurType: 2,libelleActeur:"Acheteur"},
    {idActeurType: 3,libelleActeur: "Fournisseur"}
  ];

  selectedType:string;
  selectFormControl = new FormControl('', Validators.required);
  email = new FormControl('', [Validators.required, Validators.email]);


  constructor(private registrationService: RegistrationService, private animateurService: AnimateurService, private acheteurService: AcheteurService
     , private fournisseurService: FournisseurService,private router:Router) { }

  ngOnInit() {
    this.typeActeurs;
  }
  
  createUser(){
    
    if(this.selectedType=="Animateur"){
      this.animateurService.createAnimateur({
        animateurId: 0,
        type: "animateur",
        nom: this.utilisateur.lastName,
        prenom: this.utilisateur.firstName,
        email: this.utilisateur.mail,
        telephone: this.utilisateur.phoneNumber,
        userCreated: 0,
        userLastModif: 0,
        dateCreated: null,
        dateLastModif: null
      })
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
          userActeurID: 0
        });
        let navigationExtras: NavigationExtras = {
          queryParams: {'login': this.utilisateur.username,'islogin':true },
          fragment: 'animateur'
        };
        this.utilisateur = {} as Utilisateur;
        this.animateur = {} as Animateur;
        this.router.navigate(['main-anim'],navigationExtras);
    }else if (this.selectedType=="Acheteur"){
      this.acheteurService.createAcheteur({
        acheteurId: 0,
        type:"acheteur",
        nom: this.utilisateur.lastName,
        prenom: this.utilisateur.firstName,
        email: this.utilisateur.mail,
        telephone: this.utilisateur.phoneNumber,
        userCreated: 0,
        userLastModif: 0,
        dateCreated: null,
        dateLastModif: null
      })
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
          userActeurID: 0
        });
      this.acheteur = {} as Acheteur;  
      this.utilisateur = {} as Utilisateur;
      let navigationExtras: NavigationExtras = {
        queryParams: { 'login': this.utilisateur.username,'islogin':true },
        fragment: 'acheteur'
      };
      this.router.navigate(['shopping'],navigationExtras);
    }else if(this.selectedType=="Fournisseur"){
      this.fournisseurService.createFournisseur({
        fournisseurId: 0,
        type:"fournisseur",
        nom: this.utilisateur.lastName,
        prenom: this.utilisateur.firstName,
        email: this.utilisateur.mail,
        telephone: this.utilisateur.phoneNumber,
        userCreated: 0,
        userLastModif: 0,
        dateCreated: null,
        dateLastModif: null
      })
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
          userActeurID: 0
        });
      this.fournisseur = {} as Fournisseur;
      this.utilisateur = {} as Utilisateur;

      let navigationExtras: NavigationExtras = {
        queryParams: { 'login': this.utilisateur.username,'islogin':true },
        fragment: 'fournisseur'
      };
      this.router.navigate(['main-magasin'],navigationExtras);
    }else{
      console.log("type doesn't exit");
    }
  

  }


}
