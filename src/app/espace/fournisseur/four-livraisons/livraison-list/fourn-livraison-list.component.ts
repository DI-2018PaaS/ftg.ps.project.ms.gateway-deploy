import { Component, OnInit, ViewChild } from '@angular/core';
import { CrudPopupComponent } from 'app/shared-front/shared/crudPopups/crudPopup/crudPopup.component';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import {SessionStorageService } from 'angular-web-storage';
import { BlivraisonService } from 'app/service/blivraison.service';
import { AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'app-folivraison-list',
  templateUrl: './fourn-livraison-list.component.html',
  styleUrls: ['./fourn-livraison-list.component.scss']
})

export class FoLivraisonListComponent implements OnInit {
  displayedColumns: string[] = ['objet', 'nomAcheteur', 'date', 'Details', 'valider'];
  dataSource = new MatTableDataSource<any>();
 
  crudComp: CrudPopupComponent;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  blivraisonService : BlivraisonService;

constructor(private parCrud: CrudPopupComponent,
  private   blivraisonServ: BlivraisonService,
  public db: AngularFireDatabase)
	{
    this.crudComp=this.parCrud;
    this.blivraisonService = blivraisonServ; 
    this.db.list("blivraison-db", ref => ref
      .orderByChild('isApprovedByFourniss')
      .equalTo(false))
      .valueChanges()
      .subscribe(res => {
        console.log(res)
        this.dataSource.data = res;
      });
	}
  ngOnInit(){

    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  validate(key){
    this.blivraisonServ.updateBlivraison(key,{isApprovedByFourniss:true})
  }
  ELEMENT_DATA: CommandeElement[] = [];
}


export interface CommandeElement {
NoLivraison: string;
Emetteur: string;
Date_Emission: string;
Reglement: string;
Details: string;
Modifier: string;
Supprimer: string;
}

