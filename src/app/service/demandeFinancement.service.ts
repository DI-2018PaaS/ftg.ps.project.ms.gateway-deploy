import { AngularFireList, AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';
import { HttpClient  } from "@angular/common/http";
import { Financement } from 'app/models/acteur/demande/Financement.model';



/*
  Generated class for the ProduitService Service.

  See https://angular.io/guide/dependency-injection for more info on Services
  and Angular DI.
*/
@Injectable()
export class DemandeFinancementService {
  private dbPath = 'demandeFinancement-db';
  financementRef: AngularFireList<Financement> = null;

  constructor(public http: HttpClient,public db: AngularFireDatabase) {
    console.log('Hello ProduitService Service');
    this.financementRef = this.db.list(this.dbPath);

  }

 
  createFinancement(p: Financement) {
    const key = this.db.createPushId();
    p.key = key;
    let ref  =  this.financementRef.push(p);
    ref.update({key : ref.key})
    return ref;
  }
 
  updateFinancement(key: string, value: any): void {
    this.financementRef.update(key, value).catch(error => this.handleError(error));
  }
 
  getFinancementList(): AngularFireList<Financement> {
    return this.financementRef;
  }
 
  deleteAll(): void {
    this.financementRef.remove().catch(error => this.handleError(error));
  }
 
  private handleError(error) {
    console.log(error);
  }


}
