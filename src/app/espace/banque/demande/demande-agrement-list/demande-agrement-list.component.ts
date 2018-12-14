import { Component, OnInit } from '@angular/core';
import { Agreement } from 'app/models/acteur/agreement/agreement.model';
import { AngularFireList } from 'angularfire2/database';
import { AgreementService } from 'app/service/agreement.service';

@Component({
  selector: 'app-demande-agrement-list',
  templateUrl: './demande-agrement-list.component.html',
  styleUrls: ['./demande-agrement-list.component.scss']
})
export class DemandeAgrementListComponent implements OnInit {
  agreement = {} as Agreement;
  agreementRef$ : AngularFireList<Agreement>;
  constructor(private agreementService: AgreementService) {
    console.log(this.agreementService.getAgreementList())
   }

  ngOnInit() {
    
  }

}
