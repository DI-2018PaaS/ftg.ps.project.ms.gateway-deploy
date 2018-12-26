import { Component, OnInit,Inject } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { Produit } from 'app/models/msmagasindomains/produit/produit.model';
import { AngularFireList } from 'angularfire2/database';
import { ProduitService } from 'app/service/produit.service';
import { MatDialogRef,MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-update-produit-dialog',
  templateUrl: './update-produit-dialog.component.html',
  styleUrls: ['./update-produit-dialog.component.scss']
})
export class UpdateProduitDialogComponent implements OnInit {
  device:number = 1;
  onChange(e: Event) {
        if (e.returnValue == true) {
          this.device = 1;
        } else {
          this.device = 0;
        }
    }
  hide = true;
  produit = {} as Produit;
  produitRef$ : AngularFireList<Produit>;
  row :any;
  constructor(private produitService : ProduitService,@Inject(MAT_DIALOG_DATA) public data:any) { 
    this.row = data.row;
    console.log("row ",this.row)
  }
  ngOnInit() {
  }
  
  onFileChanged(event) {
    const file = event.target.files[0]
  }
 
  updateProduit(){
    this.produitService.updateProduit(this.row.key, {
      dateDebValidite: this.produit.isValid
    })
  }

}
