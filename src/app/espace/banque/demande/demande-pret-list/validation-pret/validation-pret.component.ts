import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AngularFireDatabase } from 'angularfire2/database';
import { DemandeFinancementService } from 'app/service/demandeFinancement.service';
import { Financement } from 'app/models/acteur/demande/Financement.model';
import {SelectionModel} from '@angular/cdk/collections';
import {MatTableDataSource} from '@angular/material';
import { FormControl ,Validators} from '@angular/forms';
import { ListProduitService } from 'app/service/list-produit.service';


export interface PeriodicElement {
  code: string;
  designation: string;
  description: string;
  prix: string;

}

@Component({
  selector: 'app-validation-pret',
  templateUrl: './validation-pret.component.html',
  styleUrls: ['./validation-pret.component.scss']
})
export class ValidationPretComponent implements OnInit {
  displayedColumns: string[] = ['select','code', 'designation', 'descriptionProduit', 'prixUnitaire'];
  dataSource = new MatTableDataSource<any>();
  selection = new SelectionModel<PeriodicElement>(true, []);
  private dbPath = 'demandeFinancement-db';
  private produitPath = 'list-produits-db'
  private selectedProduitPath = 'produits-db'
  demandeFinancementServ : DemandeFinancementService;
  listProduitService : ListProduitService;
  statut = new FormControl();
  rto : Router;
  financement :  any;
  fkeyProd : string;
  produitDemande  = [];
  selectedProd = [];
  produitList = [];
  demande = {} as Financement;
  selectedProduit = [];

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

  constructor(private activatedRoute: ActivatedRoute, 
    public db: AngularFireDatabase,
    private  demandeFinancementService : DemandeFinancementService,
    private listProduitServ : ListProduitService,
    private router : Router) {
    this.rto = router;
    this.demandeFinancementServ =  demandeFinancementService;  
    this.listProduitServ = listProduitServ;
    var key = this.activatedRoute.snapshot.paramMap.get('id');
    this.db.list(this.dbPath, ref => ref
      .orderByChild('key')
      .equalTo(key))
      .valueChanges()
      .subscribe(res => {
        this.financement =  res[0];

        this.db.list(this.produitPath, ref => ref
          .orderByChild('keyDemande')
          .equalTo(this.financement.key))
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
                  this.produitList.push(prod);
                })
            })
          })
      })
  }
  getSelectedProducts(){
    this.dataSource.data.forEach(row => {
      if (this.selection.isSelected(row)===true){
        this.selectedProduit.push(row);
      }
    })
  }
  ngOnInit() {
  
  }

  submit(){
    this.getSelectedProducts();
    this.demandeFinancementServ
    .updateFinancement(this.activatedRoute.snapshot.paramMap.get('id')
    ,({'isValid':true}));

    this.selectedProduit.forEach(res =>{
      
      this.db.list('list-produits-db', ls => ls
      .orderByChild('keyProd')
      .equalTo(res.key))
      .valueChanges()
      .subscribe(val => {
        val.forEach(vl => {
          // this.listProduitServ.updateProduit(val.key,{approved:true})
        })
      })
    })
  }

}
