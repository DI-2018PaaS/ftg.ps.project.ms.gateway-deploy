import { Component, OnInit,Inject } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { Agreement } from 'app/models/acteur/agreement/agreement.model';
import { AngularFireList } from 'angularfire2/database';
import { AgreementService } from 'app/service/agreement.service';
import { MatDialogRef,MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-liste-demande-agreement',
  templateUrl: './liste-demande-agreement.component.html',
  styleUrls: ['./liste-demande-agreement.component.scss']
})
export class ListeDemandeAgrementDialogComponent implements OnInit {
  device:number = 1;
  onChange(e: Event) {
        if (e.returnValue == true) {
          this.device = 1;
        } else {
          this.device = 0;
        }
    }
  hide = true;
  agreement = {} as Agreement;
  agreementRef$ : AngularFireList<Agreement>;
  row :any;
  constructor(private agreementService : AgreementService,@Inject(MAT_DIALOG_DATA) public data:any) { 
    this.row = data.row;
    console.log(this.row.key)
  }

  ngOnInit() {
    
  }

  onFileChanged(event) {
    const file = event.target.files[0]
  }

  dateDebValidite = new FormControl();
  niveauAgreement = new FormControl();
  dateFinValidite = new FormControl();
  statutDemande = new FormControl();

  updateAgrement(){
    this.agreementService.updateAgreement(this.row.key, {
      dateDebValidite: this.agreement.dateDebValidite,
      dateFinValidite: this.agreement.dateFinValidite,
      statutDemande: this.agreement.statutDemande
    })
  }


  

 
}
