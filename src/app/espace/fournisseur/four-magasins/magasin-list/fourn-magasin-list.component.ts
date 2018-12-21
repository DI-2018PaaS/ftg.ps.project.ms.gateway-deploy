import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { Magasin } from 'app/models/msmagasindomains/magasin/magasin.model';
import { AngularFireList } from 'angularfire2/database';
import { MagasinService } from 'app/service/magasin.service';
import { AngularFireDatabase } from 'angularfire2/database';
import { CrudPopupComponent } from 'app/shared-front/shared/crudPopups/crudPopup/crudPopup.component';
import {SessionStorageService } from 'angular-web-storage';
import { Utilisateur } from 'app/models/user/utilisateur/utilisateur.model';

@Component({
  selector: 'app-fomagasin-list',
  templateUrl: './fourn-magasin-list.component.html',
  styleUrls: ['./fourn-magasin-list.component.scss']
})

export class FoMagasinListComponent implements OnInit {
  displayedColumns: string[] = ['nom', 'ref', 'description','email', 'adresse','Details', 'Modifier', 'Supprimer'];
  dataSource = new MatTableDataSource<any>();
  magasinList = [];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  private dbPath = 'magasins-db';
  utilisateur = {} as Utilisateur;
  hide = true;
  crudComp: CrudPopupComponent;
  magasin = {} as Magasin;
  magasinRef$ : AngularFireList<Magasin>;

constructor(private magazinService : MagasinService, public db: AngularFireDatabase,private parCrud: CrudPopupComponent,private session: SessionStorageService)
	{
		// this.magazinService.getMagasinList().valueChanges().subscribe(res => {
    //   this.magasinList.push(res);
    //   this.dataSource.data = res;
    // })
    // console.log("magasins: ", this.magasinList)

    this.utilisateur = this.session.get("utilisateur")
    this.crudComp = parCrud;
    this.db.list(this.dbPath, ref => ref
    .orderByChild('nIdProprietaire')
    .equalTo(this.utilisateur.fkey))
    .valueChanges()
    .subscribe(res => {
      this.magasinList.push(res);
      this.dataSource.data = res;
    })
    
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

export interface FoMagasinElement {
  nom: string;
  ref: string;
  description: string;
  email: string;
  adresse: String;
  Details: string;
  Modifier: string;
  Supprimer: string;
}
