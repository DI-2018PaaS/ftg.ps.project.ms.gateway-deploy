import { Component, OnInit,ViewChild ,Input} from '@angular/core';
import { Agreement } from 'app/models/acteur/agreement/agreement.model';
import { AngularFireList } from 'angularfire2/database';
import { AgreementService } from 'app/service/agreement.service';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { CrudPopupComponent } from 'app/shared-front/shared/crudPopups/crudPopup/crudPopup.component';

@Component({
  selector: 'app-demande-agrement-list',
  templateUrl: './demande-agrement-list.component.html',
  styleUrls: ['./demande-agrement-list.component.scss']
})
export class DemandeAgrementListComponent implements OnInit {
  displayedColumns: string[] = ['numeroAgrement', 'status', 'niveauAgreement', 'dateAttibution','Details','Modifier', 'Supprimer'];
  dataSource = new MatTableDataSource<any>();
  agreementList = []
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @Input() rowProperty: any;
  crudComp: CrudPopupComponent;
  agreement = {} as Agreement;
  agreementRef$ : AngularFireList<Agreement>;
  constructor(private agreementService: AgreementService,private parCrud: CrudPopupComponent) {
    this.crudComp = this.parCrud;
    console.log(this.agreementService.getAgreementList())
    this.agreementService.getAgreementList().valueChanges().subscribe(res => {
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
}

export interface AgreementElement {
    agreementId: string;
    key: string;
    numeroAgrement: string;
    dateAttibution: string;
    status: true;
    niveauAgreement: number;
    Details:string;
    Modifier: string;
    Supprimer: string;
}

