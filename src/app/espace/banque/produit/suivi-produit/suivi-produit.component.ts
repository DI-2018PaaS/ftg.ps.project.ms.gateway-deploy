import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { CrudPopupComponent } from 'app/shared-front/shared/crudPopups/crudPopup/crudPopup.component';
import {SessionStorageService } from 'angular-web-storage';
import { BlivraisonService } from 'app/service/blivraison.service';
import { AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'app-suivi-produit',
  templateUrl: './suivi-produit.component.html',
  styleUrls: ['./suivi-produit.component.scss']
})
export class SuiviProduitComponent implements OnInit {

  displayedColumns: string[] = ['objet', 'nomAcheteur', 'date', 'Details', 'paiement','valider'];
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
        .orderByChild('isValid')
        .equalTo(true))
        .valueChanges()
        .subscribe(res => {
          this.dataSource.data = res;
        });
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
  
    validate(key){
      this.blivraisonServ.updateBlivraison(key,{isValid:true})
    }
    ELEMENT_DATA: CommandeElement[] = [];
  } 
  
  export interface CommandeElement {
    NoLivraison: string;
    Emetteur: string;
    Date_Emission: string;
    Reglement: string;
    Details: string;
    paiement :string;
    Modifier: string;
    Supprimer: string;
  }
  