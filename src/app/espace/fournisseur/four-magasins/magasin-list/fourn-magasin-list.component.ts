import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { Magasin } from 'app/models/msmagasindomains/magasin/magasin.model';
import { AngularFireList } from 'angularfire2/database';
import { MagasinService } from 'app/service/magasin.service';
import { Key } from 'protractor';

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

  hide = true;

  magasin = {} as Magasin;
  magasinRef$ : AngularFireList<Magasin>;
constructor(private magazinService : MagasinService)
	{
		this.magazinService.getMagasinList().valueChanges().subscribe(res => {
      this.magasinList.push(res);
      this.dataSource.data = res;
    })
    console.log("magasins: ", this.magasinList)
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
