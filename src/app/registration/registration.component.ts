import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { RegistrationService } from 'app/service/registration.service';
import { Utilisateur } from 'app/models/user/utilisateur/utilisateur.model';
import { AngularFireList,AngularFireDatabase } from 'angularfire2/database';
import { ActeurType } from 'app/models/acteur/acteur-type/acteur-type.model';
import { Acheteur } from 'app/models/acteur/acheteur/acheteur.model';
import { Animateur } from 'app/models/acteur/animateur/animateur.model';
import { Fournisseur } from 'app/models/acteur/fournisseur/fournisseur.model';
import { AnimateurService } from 'app/service/animateur.service';
import { Router, NavigationExtras } from '@angular/router';
import { AcheteurService } from 'app/service/acheteur.service';
import { FournisseurService } from 'app/service/fournisseur.service';
import { RoleService } from 'app/service/role.service';
import {SessionStorageService } from 'angular-web-storage';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  private dbPath = 'utilisateur-db';

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
    {idActeurType: 2,libelleActeur: "Acheteur"},
    {idActeurType: 3,libelleActeur: "Fournisseur"}
  ];

  selectedType:string;
  selectFormControl = new FormControl('', Validators.required);
  email = new FormControl('', [Validators.required, Validators.email]);


  constructor(private registrationService: RegistrationService, private session: SessionStorageService, private animateurService: AnimateurService, private acheteurService: AcheteurService
     , private fournisseurService: FournisseurService, private serviceRole: RoleService,private router:Router, private db: AngularFireDatabase) { }

  ngOnInit() {
    this.typeActeurs;
  }
  
  createUser(){
    
    if(this.selectedType=="Animateur"){
       var AFK =  this.animateurService.createAnimateur({
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
          userActeurID: this.typeActeurs[0].idActeurType,
          fkey: AFK.key,
          isagreer: "false"
        });

        let navigationExtras: NavigationExtras = {
          queryParams: { 'login': this.utilisateur.username,'typeActeur':this.typeActeurs[0].idActeurType},
          fragment: 'animateur'
        };
        this.utilisateur = {} as Utilisateur;
        this.animateur = {} as Animateur;
        this.router.navigate(['main-anim'],navigationExtras);
    }else if (this.selectedType=="Acheteur"){
      var ACFK =  this.acheteurService.createAcheteur({
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
          userActeurID: this.typeActeurs[1].idActeurType,
          fkey:ACFK.key,
          isagreer: "false"

        });
      
      let navigationExtras: NavigationExtras = {
        queryParams: { 'login': this.utilisateur.username,'typeActeur':this.typeActeurs[1].idActeurType},
        fragment: 'acheteur'
      };
      this.acheteur = {} as Acheteur;  
      this.utilisateur = {} as Utilisateur;
      this.router.navigate(['shopping'],navigationExtras);
    }else if(this.selectedType=="Fournisseur"){
      var FFK =  this.fournisseurService.createFournisseur({
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
          userActeurID: this.typeActeurs[2].idActeurType,
          fkey:FFK.key,
          isagreer: "false"
        });
      
        this.db.list(this.dbPath, ref => ref.orderByChild('username').equalTo(this.utilisateur.username).limitToFirst(1))
        .valueChanges()
        .subscribe(res => {
          this.session.set('utilisateur', res[0])            
          let navigationExtras: NavigationExtras = {
            queryParams: { 'login': this.utilisateur.username,'typeActeur':this.typeActeurs[2].idActeurType},
            fragment: 'fournisseur'
          };
          this.fournisseur = {} as Fournisseur;
          this.utilisateur = {} as Utilisateur;
          this.router.navigate(['main-magasin'],navigationExtras);
        });

    }else{
      console.log("type doesn't exit");
    }

  }

}
