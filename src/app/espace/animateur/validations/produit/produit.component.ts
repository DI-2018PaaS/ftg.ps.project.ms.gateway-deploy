import { Component, OnInit,ViewChild,Input } from '@angular/core';
import { Produit } from 'app/models/msmagasindomains/produit/produit.model';
import { ProduitService } from 'app/service/produit.service';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { AngularFireList } from 'angularfire2/database';
import { AngularFireDatabase } from 'angularfire2/database';
@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.scss']
})
export class ProduitComponent implements OnInit {
  displayedColumns: string[] = ['code', 'designation', 'description','prixUnitaire','descriptionProduit', 'zoneGeographiqueId','Valider'];
  dataSource = new MatTableDataSource<any>();
  private dbPath = 'produit-db';
  produitList = []
  produitRef: AngularFireList<Produit> = null;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @Input() rowProperty: any;
  produit = {} as Produit;
  produitRef$ : AngularFireList<Produit>;

  constructor(private produitService: ProduitService, public db: AngularFireDatabase) {
 this.produitService.getProduitList().valueChanges().subscribe(res => {
      this.produitList.push(res);
      this.dataSource.data = res;
      console.log(this.dataSource.data);
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
 
 
  ELEMENT_DATA: ProduitElement[] = this.produitList;
}

export interface ProduitElement {
    key: string;
    code: string;
    designation: string;
    prixUnitaire: number;
    descriptionProduit: string;
    zoneGeographiqueId: number;
    isValid:boolean;
    Valider:string;
}
