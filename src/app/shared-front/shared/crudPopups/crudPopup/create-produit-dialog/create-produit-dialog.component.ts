import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { Produit } from 'app/models/msmagasindomains/produit/produit.model';
import { AngularFireList } from 'angularfire2/database';
import { ProduitService } from 'app/service/produit.service';
import { Upload } from 'app/service/produit.service';
import {SessionStorageService } from 'angular-web-storage';
import { Utilisateur } from 'app/models/user/utilisateur/utilisateur.model';
import { AngularFireDatabase } from 'angularfire2/database';
import { Boutique } from 'app/models/msmagasindomains/boutique/boutique.model';

//  export class AppComponent {
//    constructor(private afStorage: AngularFireStorage) { }
//    upload(event) {
//      this.afStorage.upload('/upload/to/this-path', event.target.files[0]);  
//    }
//  }
 
@Component({
  selector: 'app-create-produit-dialog',
  templateUrl: './create-produit-dialog.component.html',
  styleUrls: ['./create-produit-dialog.component.scss']
})
export class CreateProduitDialogComponent implements OnInit {

  hide = true;
  produit = {} as Produit;
  produitRef$ : AngularFireList<Produit>;
  boutique = {} as Boutique;
  selectedFiles: FileList;
  currentUpload: Upload;
  utilisateur = {} as Utilisateur;
  private dbPath = 'boutiques-db';
  boutiqueList = [];

  constructor(private produitService : ProduitService,public db: AngularFireDatabase,private session: SessionStorageService) { 
    
    this.getBoutique();


    this.utilisateur = this.session.get("utilisateur")
    console.log("idFrouniss ",this.session.get("utilisateur"))
  }

  getBoutique(){

    this.utilisateur = this.session.get("utilisateur")
    this.db.list(this.dbPath, ref => ref
    .orderByChild('nIdProprietaire')
    .equalTo(this.utilisateur.fkey))
    .valueChanges()
    .subscribe(res => {
      this.boutiqueList.push(res);
      this.boutiqueList = res;

    })
  }
  detectFiles(event) {
    this.selectedFiles = event.target.files;
    console.log("selected picture", this.selectedFiles)
}

uploadSingle() {
  let file = this.selectedFiles.item(0)
  this.currentUpload = new Upload(file);

  this.produitService.pushUpload(this.currentUpload)

}

  ngOnInit() {
  }

  onFileChanged(event) {
    const file = event.target.files[0]
  }
 
  code = new FormControl();
  designation = new FormControl();
  prixUnitaire = new FormControl();
  descriptionProduit = new FormControl();
  zoneGeographiqueId = new FormControl();
  idBoutique = new FormControl();

  createNewProduit(){
    console.log(this.produit);
    this.produitService.createProduit({
     code: this.produit.code,
     designation: this.produit.designation,
     prixUnitaire: this.produit.prixUnitaire,
     descriptionProduit: this.produit.descriptionProduit,
     zoneGeographiqueId: 0,
     isValid:false,
     image:this.currentUpload.url,
     fidBoutique: this.boutique.idBoutique,
     fidProprietaire : this.utilisateur.fkey
    });
    this.produit = {} as Produit;
     }

}
