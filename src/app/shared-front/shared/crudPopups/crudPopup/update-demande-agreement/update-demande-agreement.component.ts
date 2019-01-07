import { Component, OnInit, Inject } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { Agreement } from 'app/models/acteur/agreement/agreement.model';
import { AngularFireList } from 'angularfire2/database';
import { AgreementService } from 'app/service/agreement.service';
import { RegistrationService } from 'app/service/registration.service';
import {MatSnackBar} from '@angular/material';
import { MAT_DIALOG_DATA } from '@angular/material';
import { Utilisateur } from 'app/models/user/utilisateur/utilisateur.model';

@Component({
  selector: 'app-update-demande-agreement',
  templateUrl: './update-demande-agreement.component.html',
  styleUrls: ['./update-demande-agreement.component.scss']
})
export class UpdateDemandeAgrementDialogComponent implements OnInit {
  hide = true;
  agreement = {} as Agreement;
  agreementRef$ : AngularFireList<Agreement>;
  row :any;
  utilisateurServ :RegistrationService;
  utilisateurRef: AngularFireList<Utilisateur> = null;

  constructor(@Inject(MAT_DIALOG_DATA) public data:any,private agreementService : AgreementService,public snackBar: MatSnackBar,private utilisateurService: RegistrationService) { 
    this.row = data.row;
    this.utilisateurServ = utilisateurService;
    

  }

  ngOnInit() {
  }

  onFileChanged(event) {
    const file = event.target.files[0]
  }

  dateDebValidite = new FormControl();
  niveauAgreement = new FormControl();

  updateNewAgreement (){
    this.agreement = {} as Agreement;
  }
   
  approuverDemande(key: string,userID: string): void{
    this.agreementService.updateAgreement(key,{status:"approuver", niveauAgreement: this.agreement.niveauAgreement});
    this.utilisateurServ.isAgreeUtilisateur(userID,{isagreer:"true"});

      // let refSnack = this.snackBar.open('Agrément avalidé avec succès','merci', {
      //   duration: 3000
      // });
      
  }   
}
