import { Component, OnInit, ViewChild , Input} from '@angular/core';
import { AngularFireList } from 'angularfire2/database';
import { AgreementService } from 'app/service/agreement.service';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { AngularFireDatabase } from 'angularfire2/database';
import { query } from '@angular/core/src/render3/query';
import { CrudPopupComponent } from 'app/shared-front/shared/crudPopups/crudPopup/crudPopup.component';
import {SessionStorageService } from 'angular-web-storage';
import { DemandeFinancementService } from 'app/service/demandeFinancement.service';
import { BlivraisonService } from 'app/service/blivraison.service';
import { BonLivraison } from 'app/models/msmagasindomains/bon-livraison/bon-livraison.model';
import { analyzeAndValidateNgModules } from '@angular/compiler';


@Component({
  selector: 'app-demande-financement-acheteur',
  templateUrl: './demande-financement-acheteur.component.html',
  styleUrls: ['./demande-financement-acheteur.component.scss']
})
export class DemandeFinancementAcheteurComponent implements OnInit {
  displayedColumns: string[] = ['objet', 'date','destinataire','statut', 'Supprimer'];
  dataSource = new MatTableDataSource<any>();
  private dbPath = 'demandeFinancement-db';
  demandeFinancementList = []
  bonLivraison : any;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @Input() rowProperty: any;
  crudComp: CrudPopupComponent;


  constructor(public db: AngularFireDatabase, private session: SessionStorageService, 
    private  demandeFinancementService : DemandeFinancementService, private   blivraisonServ: BlivraisonService) {
    this.demandeFinancementService = demandeFinancementService;
     
    this.db.list(this.dbPath, ref => ref
      .orderByChild('acteurID')
      .equalTo(this.session.get('utilisateur').fkey))
      .valueChanges()
      .subscribe(res => {
        this.demandeFinancementList.push(res);
        this.dataSource.data = res;
      })
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

  ELEMENT_DATA: demandeFinancementElement[] = this.demandeFinancementList;
  validationFinal(row){

    this.db.list("blivraison-db", ref => ref
      .orderByChild('demandeId')
      .equalTo(row.key))
      .valueChanges()
      .subscribe(res => {
        this.bonLivraison =  res[0] as BonLivraison;
        this.blivraisonServ.updateBlivraison(this.bonLivraison.key,{isValid:true})
      })

  }
}

export interface demandeFinancementElement {
  objet:string;
  date: string;
  destinataire: string;
  statut:string;
  Supprimer: string;
}
