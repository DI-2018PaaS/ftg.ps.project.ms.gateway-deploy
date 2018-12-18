import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { Produit } from 'app/models/msmagasindomains/produit/produit.model';
import { AngularFireList } from 'angularfire2/database';
import { ProduitService } from 'app/service/produit.service';

@Component({
  selector: 'app-create-produit-dialog',
  templateUrl: './create-produit-dialog.component.html',
  styleUrls: ['./create-produit-dialog.component.scss']
})
export class CreateProduitDialogComponent implements OnInit {
  hide = true;

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

}
