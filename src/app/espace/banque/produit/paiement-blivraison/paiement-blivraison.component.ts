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
import { Agreement } from 'app/models/acteur/agreement/agreement.model';
import {coerceNumberProperty} from '@angular/cdk/coercion';


export interface PeriodicElement {
  code: string;
  designation: string;
  description: string;
  prix: string;

}
@Component({
  selector: 'app-paiement-blivraison',
  templateUrl: './paiement-blivraison.component.html',
  styleUrls: ['./paiement-blivraison.component.scss']
})
export class PaiementBlivraisonComponent implements OnInit {
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
        
        this.db.list('utilisateur-db', tr =>tr
        .orderByChild("fkey")
        .equalTo(this.bonLivraison.acteurUserId))
        .valueChanges()
        .subscribe(tf => {
        console.log(tf)
      })

        this.db.list('agreement-db', tr =>tr
        .orderByChild("userID")
        .equalTo(this.bonLivraison.acteurUserId))
        .valueChanges()
        .subscribe(tf => {
        this.agreement = tf[0];
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
        this.db.list('utilisateur-db', tr =>tr
        .orderByChild("fkey")
        .equalTo(this.fournisseur.key))
        .valueChanges()
        .subscribe(tf => {        
            this.db.list("agreement-db", db => db
            .orderByChild('userID')
            .equalTo(tf[0]['key']))
            .valueChanges()
            .subscribe(res => {
              this.agreement = res[0] as Agreement;
            })
      })


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

  autoTicks = false;
  disabled = false;
  invert = false;
  max = 100;
  min = 0;
  showTicks = false;
  wari = false
  om = false
  step = 1;
  thumbLabel = false;
  value = 0;
  vertical = false;

  get tickInterval(): number | 'auto' {
    return this.showTicks ? (this.autoTicks ? 'auto' : this._tickInterval) : 0;
  }
  set tickInterval(value) {
    this._tickInterval = coerceNumberProperty(value);
  }
  private _tickInterval = 1;

}
