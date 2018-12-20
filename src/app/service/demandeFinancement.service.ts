import { AngularFireList, AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';
import { HttpClient  } from "@angular/common/http";
import { DemandeFinancement } from 'app/models/acteur/demande/DemandeFinancement.model';



/*
  Generated class for the ProduitService Service.

  See https://angular.io/guide/dependency-injection for more info on Services
  and Angular DI.
*/
@Injectable()
export class DemandeFinancementService {
  private dbPath = 'demandeFinancement-db';
  produitRef: AngularFireList<DemandeFinancement> = null;

  constructor(public http: HttpClient,public db: AngularFireDatabase) {
    console.log('Hello ProduitService Service');
    this.produitRef = this.db.list(this.dbPath);

  }

 
  createProduit(p: DemandeFinancement): void {
    const key = this.db.createPushId();
    p.key = key;
    this.produitRef.set(key,p)
  }
 
  updateProduit(key: string, value: any): void {
    this.produitRef.update(key, value).catch(error => this.handleError(error));
  }
 
  deleteProduit(key: string): void {
    this.produitRef.remove(key).catch(error => this.handleError(error));
  }
 
  getProduitList(): AngularFireList<DemandeFinancement> {
    return this.produitRef;
  }
 
  deleteAll(): void {
    this.produitRef.remove().catch(error => this.handleError(error));
  }
 
  private handleError(error) {
    console.log(error);
  }


}
