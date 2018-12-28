import { Component, OnInit,ViewChild ,Input} from '@angular/core';
import { Agreement } from 'app/models/acteur/agreement/agreement.model';
import { AngularFireList } from 'angularfire2/database';
import { AgreementService } from 'app/service/agreement.service';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { AngularFireDatabase } from 'angularfire2/database';
import { query } from '@angular/core/src/render3/query';
import { CrudPopupComponent } from 'app/shared-front/shared/crudPopups/crudPopup/crudPopup.component';
import { RegistrationService } from 'app/service/registration.service';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-demande-agrement-list',
  templateUrl: './demande-agrement-list.component.html',
  styleUrls: ['./demande-agrement-list.component.scss']
})
export class DemandeAgrementListComponent implements OnInit {
  displayedColumns: string[] = ['userName','userPrenom', 'juridique','ninea','description','createdDate','status','Approuver','Rejeter'];
  dataSource = new MatTableDataSource<any>();
  private dbPath = 'agreement-db';
  agreementList = []
  agreementRef: AngularFireList<Agreement> = null;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @Input() rowProperty: any;
  crudComp: CrudPopupComponent;
  agreement = {} as Agreement;
  agreementRef$ : AngularFireList<Agreement>;

  constructor(private agreementService: AgreementService, public snackBar: MatSnackBar,private utilisateurService: RegistrationService,public db: AngularFireDatabase,private parCrud: CrudPopupComponent) {
    this.crudComp = parCrud;
    this.db.list(this.dbPath, ref => ref
    .orderByChild('destinataireID')
    .equalTo('banque'))
    .valueChanges()
    .subscribe(res => {
      this.agreementList.push(res);
      this.dataSource.data = res;
    })
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
  edit(row : any){
    this.crudComp.openListeDemandeAgreement(row);
    
  }
  ELEMENT_DATA: AgreementElement[] = this.agreementList;

  validerAgrement(row){
    this.crudComp.openUpdateDemandeAgreement(row);
  }

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
    emetteur:string;
    description: string;
    createdDate: string;
    Details:string;
    // Modifier: string;
    Supprimer: string;
}

