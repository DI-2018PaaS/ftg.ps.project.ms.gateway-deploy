import { Component, OnInit,ViewChild } from '@angular/core';
import { Agreement } from 'app/models/acteur/agreement/agreement.model';
import { AngularFireList } from 'angularfire2/database';
import { AgreementService } from 'app/service/agreement.service';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-demande-agrement-list',
  templateUrl: './demande-agrement-list.component.html',
  styleUrls: ['./demande-agrement-list.component.scss']
})
export class DemandeAgrementListComponent implements OnInit {
  displayedColumns: string[] = ['numeroAgrement', 'status', 'niveauAgreement', 'dateAttibution','Modifier', 'Supprimer'];
  dataSource = new MatTableDataSource<any>();
  agreementList = []
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  
  agreement = {} as Agreement;
  agreementRef$ : AngularFireList<Agreement>;
  constructor(private agreementService: AgreementService) {
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
  ELEMENT_DATA: AgreementElement[] = this.agreementList;
}
export interface AgreementElement {
    agreementId: string;
    key: string;
    numeroAgrement: string;
    dateAttibution: string;
    status: true;
    niveauAgreement: number;
    Modifier: string;
    Supprimer: string;
}

