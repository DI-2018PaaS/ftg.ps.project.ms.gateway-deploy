import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { CrudPopupComponent } from 'app/shared-front/shared/crudPopups/crudPopup/crudPopup.component';
import { Agreement } from 'app/models/acteur/agreement/agreement.model';
import { AngularFireList } from 'angularfire2/database';
import { AgreementService } from 'app/service/agreement.service';

@Component({
  selector: 'app-demande-agremment',
  templateUrl: './demande-agremment.component.html',
  styleUrls: ['./demande-agremment.component.scss']
})
export class DemandeAgremmentComponent implements OnInit {

  displayedColumns: string[] = ['description', 'destinataireID','dateCreated', 'Supprimer'];
  dataSource = new MatTableDataSource<any>();
  agreementList = []
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  crudComp: CrudPopupComponent;

  agreement = {} as Agreement;
  agreementRef$ : AngularFireList<Agreement>;
  constructor(private agreementService: AgreementService, private parCrud: CrudPopupComponent) {
    console.log(this.agreementService.getAgreementList())
    this.crudComp = this.parCrud;
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
  ajoutDemandeAgrement(){
    this.crudComp.openCreateDemandeAgreement();

}
  ELEMENT_DATA: AgreementElement[] = this.agreementList;
}
export interface AgreementElement {
    description: string;
    destinataireID: string;
    dateCreated: string;
    
}