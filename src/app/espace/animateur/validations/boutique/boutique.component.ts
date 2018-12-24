import { Component, OnInit,ViewChild,Input } from '@angular/core';
import { Boutique } from 'app/models/msmagasindomains/boutique/boutique.model';
import { BoutiqueService } from 'app/service/boutique.service';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { AngularFireList } from 'angularfire2/database';
import { AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'app-boutique',
  templateUrl: './boutique.component.html',
  styleUrls: ['./boutique.component.scss']
})
export class BoutiqueComponent implements OnInit {

  displayedColumns: string[] = ['nom', 'ref', 'description','no','rue', 'codep','ville','Valider'];
  dataSource = new MatTableDataSource<any>();
  private dbPath = 'boutique-db';
  boutiqueList = []
  boutiqueRef: AngularFireList<Boutique> = null;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @Input() rowProperty: any;
  boutique = {} as Boutique;
  boutiqueRef$ : AngularFireList<Boutique>;

  constructor(private boutiqueService: BoutiqueService, public db: AngularFireDatabase) {
 this.boutiqueService.getBoutiqueList().valueChanges().subscribe(res => {
      this.boutiqueList.push(res);
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
 
 
  ELEMENT_DATA: BoutiqueElement[] = this.boutiqueList;

  iSvalidate(key: string): void{
   this.boutiqueService.updateBoutique(key,{isValid:true});
  }
}

export interface BoutiqueElement {
    key: string;
    nIdProprietaire: number;
    nom: string;
    ref: string;
    description: string;
    no: String;
    rue: String;
    codep: String;
    ville: String;
    isValid:boolean;
    Valider:string;
}

