import { Component, OnInit } from '@angular/core';
import { LigneCreditService } from 'app/service/ligneCredit.service';
import { LigneCredit } from 'app/models/paiement/ligne-credit/ligne-credit.model';
import { AngularFireList } from 'angularfire2/database';
import { SessionStorageService } from 'angular-web-storage';


@Component({
  selector: 'app-create-ligne-credit-dialog',
  templateUrl: './create-ligne-credit-dialog.component.html',
  styleUrls: ['./create-ligne-credit-dialog.component.scss']
})
export class CreateLigneCreditDialogComponent implements OnInit {
  hide = true;
  ligneCredit = {} as LigneCredit;
  ligneCreditRef$ : AngularFireList<LigneCredit>;

  constructor(private ligneCreditService  : LigneCreditService,private session:SessionStorageService) { }

  ngOnInit() {
    console.log(this.session.get('utilisateur'))
  }
  
  onFileChanged(event) {
    const file = event.target.files[0]
  }

  createNewLigneCredit(){
    this.ligneCreditService.createLigneCredit({
      idLigneCredit: 0,
      libelle: this.ligneCredit.libelle,
      description: this.ligneCredit.description,
      dateCreation: null,
      dateMisAjour: null,
      montant: this.ligneCredit.montant,
      idOwner: this.session.get('utilisateur').key,
      nomFinancier: this.session.get('utilisateur').firstName,
    });
    this.ligneCredit = {} as LigneCredit;
     }
}
