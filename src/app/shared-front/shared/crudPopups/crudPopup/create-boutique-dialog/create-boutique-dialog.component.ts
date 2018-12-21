import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { Boutique } from 'app/models/msmagasindomains/boutique/boutique.model';
import { AngularFireList } from 'angularfire2/database';
import { BoutiqueService } from 'app/service/boutique.service';
//import { FoMagasinListComponent } from 'app/espace/fournisseur//four-magasins/magasin-list/fourn-magasin-list.component';
import { CrudPopupComponent } from 'app/shared-front/shared/crudPopups/crudPopup/crudPopup.component';
import {SessionStorageService } from 'angular-web-storage';
import { Utilisateur } from 'app/models/user/utilisateur/utilisateur.model';
import { AngularFireDatabase } from 'angularfire2/database';
import { Magasin } from 'app/models/msmagasindomains/magasin/magasin.model';

@Component({
  selector: 'app-create-boutique-dialog',
  templateUrl: './create-boutique-dialog.component.html',
  styleUrls: ['./create-boutique-dialog.component.scss']
})
export class CreateBoutiqueDialogComponent implements OnInit {
  hide = true;
  boutique = {} as Boutique;
  boutiqueRef$ : AngularFireList<Boutique>;

  private dbPath = 'magasins-db';
  utilisateur = {} as Utilisateur;
  magasin = {} as Magasin;
  magasinList = [];
  
  constructor(private boutiqueService : BoutiqueService, public db: AngularFireDatabase,private session: SessionStorageService) { 

    this.getMagasin();

  }

  getMagasin(){

    this.utilisateur = this.session.get("utilisateur")
    this.db.list(this.dbPath, ref => ref
    .orderByChild('nIdProprietaire')
    .equalTo(this.utilisateur.fkey))
    .valueChanges()
    .subscribe(res => {
      this.magasinList.push(res);
    })

    //this.magasin.nom = this.magasinList[0].value;
   // Object.assign({}, this.magasinList)
    console.log("magasinsddddd: ", this.magasinList.indexOf(0))
  }

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

  // getListeBoutique(){
  //   this.utilisateur = this.session.get("utilisateur")
  //   this.crudComp = parCrud;
  //   this.db.list(this.dbPath, ref => ref
  //   .orderByChild('nIdProprietaire')
  //   .equalTo(this.utilisateur.fkey))
  //   .valueChanges()
  //   .subscribe(res => {
  //     FoMagasinListComponent.magasinList.push(res);
  //     this.dataSource.data = res;
  //   })
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
     nIdProprietaire: "",
     idBoutique: "",
     fidMagasin: "",
     isValid:false
    });
    this.boutique = {} as Boutique;
     }


}