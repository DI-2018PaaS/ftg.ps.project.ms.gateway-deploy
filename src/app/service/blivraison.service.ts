import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { BonLivraison } from 'app/models/msmagasindomains/bon-livraison/bon-livraison.model';

/*
  Generated class for the MagasinService.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class BlivraisonService {
  private dbPath = 'blivraison-db';
 
  blivraisonRef: AngularFireList<BonLivraison> = null;

  constructor(public http: HttpClient,public db: AngularFireDatabase) {
    console.log('Hello AgreementService Service');
    this.blivraisonRef = this.db.list(this.dbPath);
  }
  createBlivraison(p: BonLivraison): void {
    console.log('creation agreement service', p);
    const key = this.db.createPushId();
    p.key = key;
    this.blivraisonRef.set(key,p)
  }
  updateBlivraison(key: string, value: any): void {
    this.blivraisonRef.update(key, value).catch(error => this.handleError(error));
  }
 
  deleteBlivraison(key: string): void {
    this.blivraisonRef.remove(key).catch(error => this.handleError(error));
  }
 
  getBlivraisonList(): AngularFireList<BonLivraison> {
    console.log(this.blivraisonRef.query.orderByChild);
    return this.blivraisonRef;
  }
 
  deleteAll(): void {
    this.blivraisonRef.remove().catch(error => this.handleError(error));
  }
 
  private handleError(error) {
    console.log(error);
  }
}
 