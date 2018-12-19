import { Component, OnInit } from '@angular/core';
import { LigneCreditService } from 'app/service/ligneCredit.service';
import { LigneCredit } from 'app/models/paiement/ligne-credit/ligne-credit.model';
import { AngularFireList } from 'angularfire2/database';


@Component({
  selector: 'app-create-ligne-credit-dialog',
  templateUrl: './create-ligne-credit-dialog.component.html',
  styleUrls: ['./create-ligne-credit-dialog.component.scss']
})
export class CreateLigneCreditDialogComponent implements OnInit {
  hide = true;
  ligneCredit = {} as LigneCredit;
  ligneCreditRef$ : AngularFireList<LigneCredit>;

  constructor(private ligneCreditService  : LigneCreditService) { }

  ngOnInit() {
  }
  
  onFileChanged(event) {
    const file = event.target.files[0]
  }

  createNewLigneCredit(){
    this.ligneCreditService.createLigneCredit({
      id: 0,
      key:"",
      idLigneCredit: "",
      libelle: this.ligneCredit.libelle,
      description: this.ligneCredit.description,
      dateCreation: new Date().toString(),
      dateMisAjour: new Date().toString(),
      montant: this.ligneCredit.montant,
      idOwner: 0,
      nomFinancier: ""
    });
    this.ligneCredit = {} as LigneCredit;
     }
 
}
