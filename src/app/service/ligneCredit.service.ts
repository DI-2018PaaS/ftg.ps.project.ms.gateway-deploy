import { Injectable } from '@angular/core';
import { AngularFireList, AngularFireDatabase } from 'angularfire2/database';
import { LigneCredit } from 'app/models/paiement/ligne-credit/ligne-credit.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LigneCreditService {
  private dbPath = 'ligneCredit-db';
  refAcheteurRef: AngularFireList<LigneCredit> = null;

  constructor(public http: HttpClient,public db: AngularFireDatabase) { 
    this.refAcheteurRef=this.db.list(this.dbPath);
  }

  createLigneCredit(c: LigneCredit): void{
    const key = this.db.createPushId();
    c.key = key;
    this.refAcheteurRef.set(key,c)
  }
}
