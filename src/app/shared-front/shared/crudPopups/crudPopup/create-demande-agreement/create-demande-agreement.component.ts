import { Component, OnInit } from '@angular/core';
import { SessionStorageService } from 'angular-web-storage';
import {FormControl, Validators} from '@angular/forms';
import { Agreement } from 'app/models/acteur/agreement/agreement.model';
import { AngularFireList } from 'angularfire2/database';
import { AgreementService } from 'app/service/agreement.service';




@Component({
  selector: 'app-create-demande-agreement',
  templateUrl: './create-demande-agreement.component.html',
  styleUrls: ['./create-demande-agreement.component.scss']
})
export class CreateDemandeAgrementDialogComponent implements OnInit {
  hide = true;
  username: string;
  iDTypeActeur: number;
  agreement = {} as Agreement;
  agreementRef$ : AngularFireList<Agreement>;
  constructor(private agreementService : AgreementService, private session:SessionStorageService) { }

  ngOnInit() {
   this.username=this.session.get('Key').loginUser;
   this.iDTypeActeur=this.session.get('Key').idTypeActeur;
  }

  onFileChanged(event) {
    const file = event.target.files[0]
  }

  destinataireID = new FormControl();
  niveauAgreement = new FormControl();
  description = new FormControl();
 

 
  createNewAgreement (){
    console.log(this.agreement);
    this.agreementService.createAgreement({
      agreementId:0,
      numeroAgrement: '0', 
      dateAttibution: "",
      dateDebValidite: "",
      dateFinValidite: "",
      status: true,
      userCreated: 0,
      userLastModif: 0,
      dateCreated: new Date().toString(),
      dateLastModif: "",
      niveauAgreement: 0,
      animateurID:"animateur",
      fournisseurID:"",
      destinataireID:this.agreement.destinataireID,
      description:this.agreement.description,
      statutDemande:"",
      plafond:""

    });
    this.agreement = {} as Agreement;
     }
 
}
