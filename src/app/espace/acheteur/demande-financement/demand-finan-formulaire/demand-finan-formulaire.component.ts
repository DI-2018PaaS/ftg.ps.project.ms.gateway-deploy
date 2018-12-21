import { Component, OnInit } from '@angular/core';
import {SelectionModel} from '@angular/cdk/collections';
import {MatTableDataSource} from '@angular/material';
import { FormControl } from '@angular/forms';
import { Produit } from 'app/models/msmagasindomains/produit/produit.model';
import { AngularFireList } from 'angularfire2/database';
import { ProduitService } from 'app/service/produit.service';
import { Key } from 'protractor';
import { AngularFireDatabase } from 'angularfire2/database';
import { Fournisseur } from 'app/models/acteur/fournisseur/fournisseur.model';
import { FournisseurService } from 'app/service/fournisseur.service';
import { Utilisateur } from 'app/models/user/utilisateur/utilisateur.model';
import {SessionStorageService } from 'angular-web-storage';

export interface PeriodicElement {
  code: string;
  designation: string;
  description: string;
  prix: string;

}


@Component({
  selector: 'app-demand-finan-formulaire',
  templateUrl: './demand-finan-formulaire.component.html',
  styleUrls: ['./demand-finan-formulaire.component.scss']
})


export class DemandFinanFormulaireComponent implements OnInit {
  
  displayedColumns: string[] = ['select','code', 'designation', 'descriptionProduit', 'prixUnitaire'];
  dataSource = new MatTableDataSource<any>();
  selection = new SelectionModel<PeriodicElement>(true, []);
  produitService : ProduitService;
  fournisseurService : FournisseurService;
  produit = {} as Produit;
  fournisseur = {} as Fournisseur;
  produitList = [];
  listFournisseur = [];
  key = new FormControl();
  utilisateur = {} as Utilisateur;
  private dbPath = 'produits-db';



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
  constructor(
      private produitServ: ProduitService,
      public db: AngularFireDatabase,
      fournisseurServ : FournisseurService,
      private session: SessionStorageService) { 
    this.produitService = produitServ;
    this.fournisseurService = fournisseurServ;
  }

  ngOnInit() {

    this.fournisseurService.getFournisseurList().valueChanges().subscribe(res => {
      this.listFournisseur.push(res);
      this.listFournisseur = res;
    })

    this.utilisateur =  this.session.get('utilisateur');

  }

  getListProduit(){
    console.log(this.fournisseur.key)

    this.db.list(this.dbPath, ref => ref
      .orderByChild('fidProprietaire')
      .equalTo(this.fournisseur.key))
      .valueChanges()
      .subscribe(res => {
        this.produitList.push(res);
        this.dataSource.data = res;
      })
  }

}
