import { Component, OnInit,ViewChild,Input } from '@angular/core';
import { Magasin } from 'app/models/msmagasindomains/magasin/magasin.model';
import { MagasinService } from 'app/service/magasin.service';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { AngularFireList } from 'angularfire2/database';
import { AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'app-magasin',
  templateUrl: './magasin.component.html',
  styleUrls: ['./magasin.component.scss']
})
export class MagasinComponent implements OnInit {
  displayedColumns: string[] = ['nom', 'ref', 'adresse','description','email', 'Valider'];
  dataSource = new MatTableDataSource<any>();
  private dbPath = 'magasin-db';
  magasinList = []
  produitRef: AngularFireList<Magasin> = null;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @Input() rowProperty: any;
  magasin = {} as Magasin;
  magasinRef$ : AngularFireList<Magasin>;

  constructor(private magasinService: MagasinService, public db: AngularFireDatabase) {
 this.magasinService.getMagasinList().valueChanges().subscribe(res => {
      this.magasinList.push(res);
      this.dataSource.data = res;
      console.log(this.dataSource.data);
    });
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
 
 
  ELEMENT_DATA: MagasinElement[] = this.magasinList;
}

export interface MagasinElement {
    key: string;
    nom: string;
    ref: string;
    adresse: string;
    description: string;
    email: string;
    isValid:boolean;
    Valider:string;
}
