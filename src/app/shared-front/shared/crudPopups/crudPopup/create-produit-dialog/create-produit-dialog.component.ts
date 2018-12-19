import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { Produit } from 'app/models/msmagasindomains/produit/produit.model';
import { AngularFireList } from 'angularfire2/database';
import { ProduitService } from 'app/service/produit.service';

import { AngularFireStorage } from 'angularfire2/storage';

@Component({
  selector: 'app-root',
  template: `
   <label for="file">File:</label>
   <input type="file" (change)="upload($event)" accept=".png,.jpg" />
  `
 })
 export class AppComponent {
   constructor(private afStorage: AngularFireStorage) { }
   upload(event) {
     this.afStorage.upload('/upload/to/this-path', event.target.files[0]);  
   }
 }
 
@Component({
  selector: 'app-create-produit-dialog',
  templateUrl: './create-produit-dialog.component.html',
  styleUrls: ['./create-produit-dialog.component.scss']
})
export class CreateProduitDialogComponent implements OnInit {
  hide = true;
  url = '';

  produit = {} as Produit;
  produitRef$ : AngularFireList<Produit>;
  constructor(private produitService : ProduitService) { }

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
     isValid:false
    });
    this.produit = {} as Produit;
     }

     onSelectFile(event) {
      if (event.target.files && event.target.files[0]) {
        var reader = new FileReader();
  
        reader.readAsDataURL(event.target.files[0]); // read file as data url
  
        reader.onload = (event) => { // called once readAsDataURL is completed
          // this.url = event.target.result;
        }
      }
    }

}
