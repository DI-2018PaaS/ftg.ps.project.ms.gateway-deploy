import { Component, OnInit } from '@angular/core';
import { Financement } from 'app/models/acteur/demande/Financement.model';
import { AngularFireDatabase } from 'angularfire2/database';
import { DemandeFinancementService } from 'app/service/demandeFinancement.service';
import {SelectionModel} from '@angular/cdk/collections';
import {MatTableDataSource} from '@angular/material';
import { FormControl ,Validators} from '@angular/forms';
import { ListProduitService } from 'app/service/list-produit.service';
import { ActivatedRoute } from '@angular/router';
import { BlivraisonService } from 'app/service/blivraison.service';
import { flattenStyles } from '@angular/platform-browser/src/dom/dom_renderer';
import {SessionStorageService } from 'angular-web-storage';
import {MatSnackBar} from '@angular/material';


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
  blivraisonService : BlivraisonService;
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
  utilisateur : any;
  constructor(private activatedRoute: ActivatedRoute,public db: AngularFireDatabase,
    private  demandeFinancementService : DemandeFinancementService,
    private listProduitServ : ListProduitService, private blivraisonServ : BlivraisonService,
    private session: SessionStorageService, public snackBar: MatSnackBar) { 
      this.lv_ndour = 2000;
      this.lv_dieng = 2500;
      this.express = 4000;
      this.normal = 3000;
      this.frais = 0;
    this.utilisateur = this.session.get('utilisateur');
    this.demandeFinancementServ =  demandeFinancementService;  
    this.listProduitServ = listProduitServ;
    this.blivraisonService = blivraisonServ;
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

  ngOnInit() {}

  validerPaimement(){
    // let ref = this.demandeFinancementServ
    // .updateFinancement(this.activatedRoute.snapshot.paramMap.get('id'), {

    // })


     this.blivraisonServ.createBlivraison({
      key: "",
      numero: 0,
      acteurUserId: this.utilisateur.key,
      dateCreation: new Date().toString(),
      isValid:false,
      demandeId:this.activatedRoute.snapshot.paramMap.get('id'),
      isApprovedByAnim: false,
      isApprovedByFourniss: false,
      livreur: this.financement.livreur,
      modeLivraison: this.financement.modeLivraison,
      objet:this.finance.objet,
      acheteurNom:this.utilisateur.firstName,
      acheteurPrenom:this.utilisateur.lastName
    })
    let refSnack = this.snackBar.open('demande envoyé','merci', {
      duration: 3000
    });
  }

}
