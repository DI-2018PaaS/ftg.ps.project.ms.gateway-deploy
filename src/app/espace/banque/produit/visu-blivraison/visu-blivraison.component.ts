import { Component, OnInit } from '@angular/core';
import {SessionStorageService } from 'angular-web-storage';
import { BlivraisonService } from 'app/service/blivraison.service';
import { AngularFireDatabase } from 'angularfire2/database';
import { Utilisateur } from 'app/models/user/utilisateur/utilisateur.model';
import { Router, ActivatedRoute } from '@angular/router';
import { BonLivraison } from 'app/models/msmagasindomains/bon-livraison/bon-livraison.model';
import { Fournisseur } from 'app/models/acteur/fournisseur/fournisseur.model';
import { MatTableDataSource } from '@angular/material';
import {SelectionModel} from '@angular/cdk/collections';


export interface PeriodicElement {
  code: string;
  designation: string;
  description: string;
  prix: string;

}

@Component({
  selector: 'app-visu-blivraison',
  templateUrl: './visu-blivraison.component.html',
  styleUrls: ['./visu-blivraison.component.scss']
})
export class VisuBlivraisonComponent implements OnInit {

  displayedColumns: string[] = ['code', 'designation', 'descriptionProduit', 'prixUnitaire', 'quantite'];
  dataSource = new MatTableDataSource<any>();
  selection = new SelectionModel<PeriodicElement>(true, []);
  bonLivraison = {} as BonLivraison;
  fournisseur = {} as Fournisseur;
  produitDemande  = [];
  produitList = [];
  utilisateur : any;
  livreur : any;
  agreement : any;
  totalArticle : number = 0;
  private produitPath = 'list-produits-db'
  private selectedProduitPath = 'produits-db'

  constructor(private   blivraisonServ: BlivraisonService,
    public db: AngularFireDatabase,private session: SessionStorageService, private router : Router, private activatedRoute : ActivatedRoute) { 
      
      this.router = router;
      var key = this.activatedRoute.snapshot.paramMap.get('id');
      this.utilisateur = session.get("utilisateur");

      this.db.list("blivraison-db", ref => ref
      .orderByChild('key')
      .equalTo(key))
      .valueChanges()
      .subscribe(res => {
        this.bonLivraison =  res[0] as BonLivraison;
        console.log(this.bonLivraison.acteurUserId)
        
        this.db.list('agreement-db', tr =>tr
        .orderByChild("userID")
        .equalTo(this.bonLivraison.acteurUserId))
        .valueChanges()
        .subscribe(tf => {
        this.agreement = tf[0];
        console.log(this.agreement)
      })

      this.db.list("fournisseur-db", db => db
      .orderByChild('key')
      .equalTo(this.bonLivraison.livreur))
      .valueChanges()
      .subscribe(res => {
        this.livreur = res[0] as Fournisseur;
      })

      this.db.list("fournisseur-db", ref => ref
      .orderByChild('key')
      .equalTo(this.bonLivraison.fournisseurId))
      .valueChanges()
      .subscribe(res => {
        this.fournisseur = res[0] as Fournisseur;

        this.db.list(this.produitPath, ref => ref
          .orderByChild('keyDemande')
          .equalTo(this.bonLivraison.demandeId))
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
                  this.totalArticle = this.totalArticle + prod[0]['zoneGeographiqueId'] * prod[0]['prixUnitaire'];
                  data.push(prod[0]);
                  this.dataSource.data = data;  
                })
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
  ngOnInit() {
  }

}
