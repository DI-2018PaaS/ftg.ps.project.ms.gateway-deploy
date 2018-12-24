import { Component, OnInit } from '@angular/core';
import { Financement } from 'app/models/acteur/demande/Financement.model';
import { AngularFireDatabase } from 'angularfire2/database';
import { DemandeFinancementService } from 'app/service/demandeFinancement.service';
import {SelectionModel} from '@angular/cdk/collections';
import {MatTableDataSource} from '@angular/material';
import { FormControl ,Validators} from '@angular/forms';
import { ListProduitService } from 'app/service/list-produit.service';
import { ActivatedRoute } from '@angular/router';

export interface PeriodicElement {
  code: string;
  designation: string;
  description: string;
  prix: string;

}

@Component({
  selector: 'app-details-paiement',
  templateUrl: './details-paiement.component.html',
  styleUrls: ['./details-paiement.component.scss']
})


export class DetailsPaiementComponent implements OnInit {
  displayedColumns: string[] = ['code', 'designation', 'descriptionProduit', 'prixUnitaire'];
  dataSource = new MatTableDataSource<any>();
  selection = new SelectionModel<PeriodicElement>(true, []);
  private dbPath = 'demandeFinancement-db';
  private produitPath = 'list-produits-db'
  private selectedProduitPath = 'produits-db'
  demandeFinancementServ : DemandeFinancementService;
  listProduitService : ListProduitService;
  finance :  any;
  financement = {} as Financement;
  modeLivraison = new FormControl();
  livreur = new FormControl();
  produitDemande  = [];
  produitList = [];
  lv_dieng : number;
  lv_ndour : number;
  express : number;
  normal : number;
  frais : number;
  constructor(private activatedRoute: ActivatedRoute,public db: AngularFireDatabase,
    private  demandeFinancementService : DemandeFinancementService,
    private listProduitServ : ListProduitService) { 
    
    this.demandeFinancementServ =  demandeFinancementService;  
    this.listProduitServ = listProduitServ;
    var key = this.activatedRoute.snapshot.paramMap.get('id');
    this.db.list(this.dbPath, ref => ref
      .orderByChild('key')
      .equalTo(key))
      .valueChanges()
      .subscribe(res => {
        this.finance =  res[0];

        this.db.list(this.produitPath, ref => ref
          .orderByChild('keyDemande')
          .equalTo(this.finance.key))
          .valueChanges()
          .subscribe(result => {
            this.produitDemande = result ;
            this.produitDemande.forEach(t =>{
              this.db.list(this.selectedProduitPath, refSP => refSP
                .orderByChild('key')
                .equalTo(t.keyProd))
                .valueChanges()
                .subscribe(prod =>{
                  this.dataSource.data = prod;
                })
            })
          })
      })
  }

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
        this.selection.clear() :
        this.dataSource.data.forEach(row => this.selection.select(row));
  }

  onChangeLv(value){
    if(value ==="lv_ndour"){
    }
  }

  onChangeMl(value){
    if(value ==="express"){
      console.log(this.lv_ndour =+this.frais)
    }
  }

  ngOnInit() {
    this.express = 10000;
    this.normal  = 7000;
    this.lv_dieng = 2000;
    this.lv_ndour = 2500;
  }

}
