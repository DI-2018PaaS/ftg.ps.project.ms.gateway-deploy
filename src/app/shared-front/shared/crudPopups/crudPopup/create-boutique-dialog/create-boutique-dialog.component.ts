import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { Boutique } from 'app/models/msmagasindomains/boutique/boutique.model';
import { AngularFireList } from 'angularfire2/database';
import { BoutiqueService } from 'app/service/boutique.service';
import { CrudPopupComponent } from 'app/shared-front/shared/crudPopups/crudPopup/crudPopup.component';
import {SessionStorageService } from 'angular-web-storage';
import { Utilisateur } from 'app/models/user/utilisateur/utilisateur.model';
import { AngularFireDatabase } from 'angularfire2/database';
import { Magasin } from 'app/models/msmagasindomains/magasin/magasin.model';
import { MagasinService } from 'app/service/magasin.service';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-create-boutique-dialog',
  templateUrl: './create-boutique-dialog.component.html',
  styleUrls: ['./create-boutique-dialog.component.scss']
})
export class CreateBoutiqueDialogComponent implements OnInit {

  private dbPath = 'magasins-db';
  utilisateur = {} as Utilisateur;
  hide = true;
  crudComp: CrudPopupComponent;
  magasinList = [];
  dataSource = new MatTableDataSource<any>();

  boutique = {} as Boutique;
  boutiqueRef$ : AngularFireList<Boutique>;
  magasin = {} as Magasin;
  magasinRef$ : AngularFireList<Magasin>;
  constructor(private boutiqueService : BoutiqueService, public db: AngularFireDatabase,private parCrud: CrudPopupComponent,private session: SessionStorageService) { }

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

  getBoutique(){
    this.utilisateur = this.session.get("utilisateur")
    this.db.list(this.dbPath, ref => ref
    .orderByChild('nIdProprietaire')
    .equalTo(this.utilisateur.fkey))
    .valueChanges()
    .subscribe(res => {
      this.magasinList.push(res);
      this.dataSource.data = res;
    })
  }

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
     nIdProprietaire: "",
     idBoutique: "",
     fidMagasin: "",
     isValid:false
    });
    this.boutique = {} as Boutique;
     }


}