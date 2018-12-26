import { Component, OnInit, ViewChild} from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { CrudPopupComponent } from 'app/shared-front/shared/crudPopups/crudPopup/crudPopup.component';
import { LigneCreditService } from 'app/service/ligneCredit.service';


@Component({
  selector: 'app-ligne-credit-list',
  templateUrl: './ligne-credit-list.component.html',
  styleUrls: ['./ligne-credit-list.component.scss']
})
export class LigneCreditListComponent implements OnInit {
  displayedColumns: string[] = ['Libellé', 'Montant_Initial', 'Nom_Financier','Date_Creation', 'Date_MiseAjour','Description', 'Modifier', 'Supprimer'];
  dataSource = new MatTableDataSource<any>();
  crudComp: CrudPopupComponent;
  ligneCreditList = []
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private parCrud: CrudPopupComponent,private ligneCreditService:LigneCreditService){
    this.crudComp = this.parCrud;
  }

  ngOnInit() {
    this.ligneCreditService.getListLigneCredit().valueChanges().subscribe(res => {
      this.ligneCreditList.push(res);
      this.dataSource.data = res;
    });
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  ELEMENT_DATA: LigneCreditListElement[] = this.ligneCreditList;

  deleteLigneCredit(key:string):void{
    this.ligneCreditService.deleteLigneCredit(key);
  }
}


export interface LigneCreditListElement {
  key:string;
  idLigneCredit: number;
  libelle: string;
  description: string;
  dateCreation: string;
  dateMisAjour: string;
  montant: number;
  idOwner: string;
  nomFinancier:string;
  Modifier: string;
  Supprimer: string;
}
