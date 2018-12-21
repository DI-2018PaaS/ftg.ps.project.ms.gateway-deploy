import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { Produit } from 'app/models/msmagasindomains/produit/produit.model';
import { AngularFireList } from 'angularfire2/database';
import { ProduitService } from 'app/service/produit.service';

import { AngularFireStorage } from 'angularfire2/storage';

import { Upload } from 'app/service/produit.service';


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

  selectedFiles: FileList;
  currentUpload: Upload;


  constructor(private produitService : ProduitService) { }

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
     fidBoutique: ""
    });
    this.produit = {} as Produit;
     }

}
