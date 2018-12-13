import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { Produit } from 'app/models/msmagasindomains/produit/produit.model';
import { AngularFireList } from 'angularfire2/database';
import { ProduitService } from 'app/service/produit.service';

@Component({
  selector: 'app-produit-list',
  templateUrl: './produit-list.component.html',
  styleUrls: ['./produit-list.component.scss']
})
export class ProduitListComponent implements OnInit {

  displayedColumns: string[] = ['NoFoProduit', 'Code', 'Designation', 'PrixUnitaire','Description', 'Details', 'Modifier', 'Supprimer'];
  //dataSource = new MatTableDataSource<FoProduitElement>(ELEMENT_DATA);

  // this.produi.getData().then(taskList => {
  //   this.datasource = taskList;
  //   this.taskList = this.datasource;// Storing data into my task list array
  //   this.sortedList = this.taskList.filter(
  //   task => task.status ==='Submitted');

  // });

  hide = true;

  produit = {} as Produit;
  produitRef$ : AngularFireList<Produit>;
  constructor(private produitService : ProduitService) { 
    console.log('Produits ',this.produitService.getProduitList());
  }


  ngOnInit() {
  }
  
}

const ELEMENT_DATA: FoProduitElement[] = [
  
  { NoFoProduit: '1', Code: 'BOU0001', Designation: '10/01/18', PrixUnitaire: '500',Description: 'addr@mail.com', Details: '', Modifier: '', Supprimer: '' },
  { NoFoProduit: '2', Code: 'MAG0002', Designation: '10/01/18', PrixUnitaire: '500',Description: 'addr@mail.com', Details: '', Modifier: '', Supprimer: '' },
  { NoFoProduit: '3', Code: 'BOU0001', Designation: '10/01/18', PrixUnitaire: '1000',Description: 'addr@mail.com', Details: '', Modifier: '', Supprimer: '' },
  { NoFoProduit: '4', Code: 'BOU0001', Designation: '10/01/18', PrixUnitaire: '1000',Description: 'addr@mail.com', Details: '', Modifier: '', Supprimer: '' },
  
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
