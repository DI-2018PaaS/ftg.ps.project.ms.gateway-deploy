import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { Boutique } from 'app/models/msmagasindomains/boutique/boutique.model';
import { AngularFireList } from 'angularfire2/database';
import { BoutiqueService } from 'app/service/boutique.service';
import {SessionStorageService } from 'angular-web-storage';

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

  boutique = {} as Boutique;
  boutiqueRef$ : AngularFireList<Boutique>;
	constructor(private boutiqueService : BoutiqueService, private session: SessionStorageService)
	{
    this.boutiqueService.getBoutiqueList().valueChanges().subscribe(res => {
      this.boutiqueList.push(res);
      this.dataSource.data = res;
    })
    console.log("boutiques: ", this.boutiqueList)	
    console.log(this.session.get("utilisateur"))
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
