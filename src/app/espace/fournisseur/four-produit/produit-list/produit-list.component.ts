import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { CrudPopupComponent } from 'app/shared-front/shared/crudPopups/crudPopup/crudPopup.component';
import { ProduitService } from 'app/service/produit.service';
import {Http, Response} from '@angular/http';

@Component({
  selector: 'app-produit-list',
  templateUrl: './produit-list.component.html',
  styleUrls: ['./produit-list.component.scss']
})
export class ProduitListComponent implements OnInit {

  data: Object;

  displayedColumns: string[] = ['NoFoProduit', 'Code', 'Designation', 'PrixUnitaire','Description', 'Details', 'Modifier', 'Supprimer'];
  dataSource = new MatTableDataSource<FoProduitElement>(ELEMENT_DATA);

  // this.produi.getData().then(taskList => {
  //   this.datasource = taskList;
  //   this.taskList = this.datasource;// Storing data into my task list array
  //   this.sortedList = this.taskList.filter(
  //   task => task.status ==='Submitted');

  // });


  crudComp: CrudPopupComponent;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(public http: Http)
	{
    this.http.request('http://api.themoviedb.org/3/movie/top_rated?api_key=API-KEY')
    .subscribe((res: Response) => {
      this.data = res.json()['status_code'];
      console.log(this.data);
    });	}

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
}

const ELEMENT_DATA: FoProduitElement[] = [

  

];

export interface FoProduitElement {
  NoFoProduit: string;
  Code: string;
  Designation: string;
  PrixUnitaire: string;
  Description: string;
  Details: string;
  Modifier: string;
  Supprimer: string;
}
