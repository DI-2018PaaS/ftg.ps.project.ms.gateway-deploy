import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AngularFireDatabase } from 'angularfire2/database';
import {SelectionModel} from '@angular/cdk/collections';
import {MatTableDataSource} from '@angular/material';

export interface PeriodicElement {
  code: string;
  designation: string;
  description: string;
  prix: string;
  quantite :string;

}
@Component({
  selector: 'app-visu-livraison',
  templateUrl: './visu-livraison.component.html',
  styleUrls: ['./visu-livraison.component.scss']
})
export class VisuLivraisonComponent implements OnInit {
  private produitPath = 'list-produits-db'
  private selectedProduitPath = 'produits-db'
  finance :  any;
  blivraison:any;
  produitDemande  = [];
  displayedColumns: string[] = ['code', 'designation', 'descriptionProduit', 'prixUnitaire','quantite'];
  dataSource = new MatTableDataSource<any>();
  selection = new SelectionModel<PeriodicElement>(true, []);

  constructor(private activatedRoute: ActivatedRoute,public db: AngularFireDatabase) {
    var key = this.activatedRoute.snapshot.paramMap.get('id');

    this.db.list('blivraison-db', bl =>
      bl.orderByChild('demandeId')
      .equalTo(key))
      .valueChanges()
      .subscribe (bld => {
        this.blivraison = bld[0];
        console.log(this.blivraison.objet)
      })

    this.db.list(this.produitPath, ref => ref
      .orderByChild('keyDemande')
      .equalTo(key))
      .valueChanges()
      .subscribe(result => {
        this.produitDemande = result ;
        this.produitDemande.forEach(t =>{
          this.db.list(this.selectedProduitPath, refSP => refSP
            .orderByChild('key')
            .equalTo(t.keyProd))
            .valueChanges()
            .subscribe(prod => {
              const data = this.dataSource.data;
              prod[0]['zoneGeographiqueId'] = t.quantite;
              data.push(prod[0]);
              this.dataSource.data = data;    
              console.log(this.dataSource.data)
            })
        })
      })
   }

  ngOnInit() {
  }

}
