import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AngularFireDatabase } from 'angularfire2/database';
import { DemandeFinancementService } from 'app/service/demandeFinancement.service';
import { Financement } from 'app/models/acteur/demande/Financement.model';
import {SelectionModel} from '@angular/cdk/collections';
import {MatTableDataSource, MatSnackBar} from '@angular/material';
import { FormControl ,Validators} from '@angular/forms';
import { ListProduitService } from 'app/service/list-produit.service';
import { Produit } from 'app/models/msmagasindomains/produit/produit.model'

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
  displayedColumns: string[] = ['select','code', 'designation', 'descriptionProduit', 'prixUnitaire','quantite'];
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
  produitList = {};
  selectedProduit = [];
  demande = {} as Financement;

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
    private router : Router, public snackBar: MatSnackBar) {
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
                  prod[0]['zoneGeographiqueId'] = t.quantite;
                  const data = this.dataSource.data;
                  data.push(prod[0]);
                  this.dataSource.data = data;
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
          this.listProduitServ.updateProduit(vl['key'],{approved:true})
        })
      })
    })
    let refSnack = this.snackBar.open('Opération effectuée','merci', {
      duration: 3000
    });

    refSnack.afterDismissed().subscribe(()=>{
      this.router.navigate(['demande'])
    })
    

  }

}
