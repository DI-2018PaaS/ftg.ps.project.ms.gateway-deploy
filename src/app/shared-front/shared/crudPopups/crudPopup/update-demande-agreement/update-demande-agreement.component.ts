import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { Agreement } from 'app/models/acteur/agreement/agreement.model';
import { AngularFireList } from 'angularfire2/database';
import { AgreementService } from 'app/service/agreement.service';

@Component({
  selector: 'app-update-demande-agreement',
  templateUrl: './update-demande-agreement.component.html',
  styleUrls: ['./update-demande-agreement.component.scss']
})
export class UpdateDemandeAgrementDialogComponent implements OnInit {
  hide = true;
  agreement = {} as Agreement;
  agreementRef$ : AngularFireList<Agreement>;
  constructor(private agreementService : AgreementService) { }

  ngOnInit() {
  }

  onFileChanged(event) {
    const file = event.target.files[0]
  }

  dateDebValidite = new FormControl();
  niveauAgreement = new FormControl();

  updateNewAgreement (){
    console.log(this.agreement);
    this.agreementService.createAgreement({
      agreementId:0,
      numeroAgrement: '0', 
      dateAttibution: this.agreement.dateDebValidite,
      dateDebValidite: this.agreement.dateDebValidite,
      dateFinValidite: this.agreement.dateDebValidite,
      status: true,
      userCreated: 0,
      userLastModif: 0,
      dateCreated: this.agreement.dateDebValidite,
      dateLastModif: this.agreement.dateDebValidite,
      niveauAgreement: this.agreement.niveauAgreement,
      animateurID:"",
      fournisseurID:"",
      destinataireID:"",
      description:""

      
    });
    this.agreement = {} as Agreement;
     }
    
}
