import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { CrudPopupComponent } from 'app/shared-front/shared/crudPopups/crudPopup/crudPopup.component';
import { Agreement } from 'app/models/acteur/agreement/agreement.model';
import { AngularFireList } from 'angularfire2/database';
import { AgreementService } from 'app/service/agreement.service';
import { AngularFireDatabase } from 'angularfire2/database';
import { RegistrationService } from 'app/service/registration.service';
import {MatSnackBar} from '@angular/material';
import * as Lodash from 'lodash';

@Component({
  selector: 'app-demande-agremment',
  templateUrl: './demande-agremment.component.html',
  styleUrls: ['./demande-agremment.component.scss']
})
export class DemandeAgremmentComponent implements OnInit {

  displayedColumns: string[] = ['userName','userPrenom','juridique','ninea','description','dateCreated', 'status','Approuver','Rejeter'];
  dataSource = new MatTableDataSource<any>();
  agreementList = []
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  crudComp: CrudPopupComponent;
  private dbPath = 'agreement-db';

  agreement = {} as Agreement;
  agreementRef$ : AngularFireList<Agreement>;

  constructor(private agreementService: AgreementService,public snackBar: MatSnackBar,private utilisateurService: RegistrationService, private parCrud: CrudPopupComponent, public db: AngularFireDatabase) {
    console.log(this.agreementService.getAgreementList())
    this.crudComp = this.parCrud;
    // this.agreementService.getAgreementList().valueChanges().subscribe(res => {
    //   this.agreementList.push(res);
    //   this.dataSource.data = res;
    // })
    
    this.db.list(this.dbPath, ref => ref
      .orderByChild('destinataireID')
      .equalTo("animateur"))
      .valueChanges()
      .subscribe(res => {
        this.agreementList.push(res);
        this.dataSource.data = res;
      })

      console.log(this.agreementList.filter(item => item.Statut === "") )

   }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort; 
  }
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  ajoutDemandeAgrement(){
    this.crudComp.openCreateDemandeAgreement();
  }
  ELEMENT_DATA: AgreementElement[] = this.agreementList;

  approuverDemande(key: string,userID: string): void{
    this.agreementService.updateAgreement(key,{status:"approuver"});
    this.utilisateurService.isAgreeUtilisateur(userID,{isagreer:"true"});
    let refSnack = this.snackBar.open('Agrément avalidé avec succès','merci', {
      duration: 3000
    });
    refSnack.afterDismissed().subscribe(()=>{
    }) 
   }

   rejeterDemande(key: string,userID: string): void{
    this.agreementService.updateAgreement(key,{status:"rejeter"});
    this.utilisateurService.isAgreeUtilisateur(userID,{isagreer:"rejeter"});
    let refSnack = this.snackBar.open('Agrément rejeté','merci', {
      duration: 3000
    });
    refSnack.afterDismissed().subscribe(()=>{
    }) 
   }

}

export interface AgreementElement {
    description: string;
    destinataireID: string;
    dateCreated: string;
    
}