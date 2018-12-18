import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { Produit } from 'app/models/msmagasindomains/produit/produit.model';
import { AngularFireList } from 'angularfire2/database';
import { ProduitService } from 'app/service/produit.service';
import { Key } from 'protractor';
import { AngularFireDatabase } from 'angularfire2/database';
import { CrudPopupComponent } from 'app/shared-front/shared/crudPopups/crudPopup/crudPopup.component';

@Component({
  selector: 'app-produit-list',
  templateUrl: './produit-list.component.html',
  styleUrls: ['./produit-list.component.scss']
})
export class ProduitListComponent implements OnInit {

  displayedColumns: string[] = ['code', 'designation', 'prixUnitaire','descriptionProduit', 'Details', 'Modifier', 'Supprimer'];
  dataSource = new MatTableDataSource<any>();
  produitList = [];
  private dbPath = 'produit-db';
  produitRef: AngularFireList<Produit> = null;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  crudComp: CrudPopupComponent;

  hide = true;

  produit = {} as Produit;
  produitRef$ : AngularFireList<Produit>;
  constructor(private produitService : ProduitService, public db: AngularFireDatabase,private parCrud: CrudPopupComponent) { 
    this.crudComp = parCrud;
    this.produitService.getProduitList().valueChanges().subscribe(res => {
      this.produitList.push(res);
      this.dataSource.data = res;
    })
    // this.crudComp = parCrud;
    // this.db.list(this.dbPath, ref => ref
    // .orderByChild('')
    // .equalTo(''))
    // .valueChanges()
    // .subscribe(res => {
    //   this.agreementList.push(res);
    //   this.dataSource.data = res;
    // })
    console.log("produits: ", this.produitList)
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
    this.crudComp.openInfosProduit(row);
  }

}

export interface FoProduitElement {
  code: string;
  designation: string;
  prixUnitaire: string;
  descriptionProduit: string;
  Details: string;
  Modifier: string;
  Supprimer: string;
}
