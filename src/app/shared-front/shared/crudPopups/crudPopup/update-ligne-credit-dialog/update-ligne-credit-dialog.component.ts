import { Component, OnInit, Inject } from '@angular/core';
import { LigneCreditService } from 'app/service/ligneCredit.service';
import { LigneCredit } from 'app/models/paiement/ligne-credit/ligne-credit.model';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { CrudPopupComponent } from '../crudPopup.component';
import { FormGroup, FormControl } from '@angular/forms';


@Component({
  selector: 'app-update-ligne-credit-dialog',
  templateUrl: './update-ligne-credit-dialog.component.html',
  styleUrls: ['./update-ligne-credit-dialog.component.scss']
})
export class UpdateLigneCreditDialogComponent implements OnInit {
  ligneCreditForm: FormGroup;
  hide = true;
  lignecredit = {} as LigneCredit;
  row :any;
  constructor(private ligneCreditService:LigneCreditService,public dialogRef: MatDialogRef<CrudPopupComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {this.row = data.row;}

  ngOnInit() {
    this.ligneCreditForm=new FormGroup({
      libelle:new FormControl(this.row.libelle),
      description:new FormControl(this.row.description),
      montant: new FormControl(this.row.montant)
    })
  }
  
  onFileChanged(event) {
    const file = event.target.files[0]
  }

  updateLigneCredit(){
    
    this.ligneCreditService.updateLigneCredit(this.row.key,{libelle:this.row.libelle, 
      montant:this.row.montant, description:this.row.description, 
      dateMisAjour:new Date().toLocaleDateString()});
  }
 
}
