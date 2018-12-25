import { Injectable } from '@angular/core';
import { AngularFireList, AngularFireDatabase } from 'angularfire2/database';
import { LigneCredit } from 'app/models/paiement/ligne-credit/ligne-credit.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LigneCreditService {
  private dbPath = 'ligneCredit-db';
  refLigneCreditRef: AngularFireList<LigneCredit> = null;

  constructor(public http: HttpClient,public db: AngularFireDatabase) { 
    this.refLigneCreditRef=this.db.list(this.dbPath);
  }

  createLigneCredit(c: LigneCredit){
    const key = this.db.createPushId();
    c.key = key;
    let ref  = this.refLigneCreditRef.push(c);
    ref.update({key : ref.key})
    return ref;
  }
}
