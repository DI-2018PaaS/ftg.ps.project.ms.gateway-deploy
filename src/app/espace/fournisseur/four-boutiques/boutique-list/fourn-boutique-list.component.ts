import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { Boutique } from 'app/models/msmagasindomains/boutique/boutique.model';
import { AngularFireList } from 'angularfire2/database';
import { BoutiqueService } from 'app/service/boutique.service';
import { AngularFireDatabase } from 'angularfire2/database';
import { CrudPopupComponent } from 'app/shared-front/shared/crudPopups/crudPopup/crudPopup.component';
import {SessionStorageService } from 'angular-web-storage';
import { Utilisateur } from 'app/models/user/utilisateur/utilisateur.model';

@Component({
  selector: 'app-foboutique-list',
  templateUrl: './fourn-boutique-list.component.html',
  styleUrls: ['./fourn-boutique-list.component.scss']
})

export class FoBoutiqueListComponent implements OnInit {
  displayedColumns: string[] = ['nom', 'ref', 'description','ville', 'Details', 'Modifier', 'Supprimer'];
  dataSource = new MatTableDataSource<any>();
  boutiqueList = [];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  hide = true;
  crudComp: CrudPopupComponent;
  boutique = {} as Boutique;
  boutiqueRef$ : AngularFireList<Boutique>;
  utilisateur = {} as Utilisateur;
  private dbPath = 'boutiques-db';

	constructor(private boutiqueService : BoutiqueService, public db: AngularFireDatabase,private parCrud: CrudPopupComponent, private session: SessionStorageService)
	{
    // this.boutiqueService.getBoutiqueList().valueChanges().subscribe(res => {
    //   this.boutiqueList.push(res);
    //   this.dataSource.data = res;
    // })

    this.utilisateur = this.session.get("utilisateur")
    this.crudComp = parCrud;
    this.db.list(this.dbPath, ref => ref
    .orderByChild('nIdProprietaire')
    .equalTo(this.utilisateur.fkey))
    .valueChanges()
    .subscribe(res => {
      this.boutiqueList.push(res);
      this.dataSource.data = res;
    })
    console.log("utilisateur: ", this.utilisateur.fkey)	
    console.log("boutiques: ", this.boutiqueList)	

  }

  ngOnInit(){

    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}

export interface FoBoutiqueElement {
  NoFoBoutique: string;
  nom: string;
  ref: string;
  description: string;
  ville: string;
  Details: string;
  Modifier: string;
  Supprimer: string;
}
