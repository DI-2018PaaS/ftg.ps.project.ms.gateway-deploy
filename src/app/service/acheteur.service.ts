import { Injectable } from '@angular/core';
import { AngularFireList, AngularFireDatabase } from 'angularfire2/database';
import { Acheteur } from 'app/models/acteur/acheteur/acheteur.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AcheteurService {
  private dbPath = 'acheteur-db';
  refAcheteurRef: AngularFireList<Acheteur> = null;

  constructor(public http: HttpClient,public db: AngularFireDatabase) { 
    this.refAcheteurRef=this.db.list(this.dbPath);
  }

  createAcheteur(c: Acheteur){
    const key = this.db.createPushId();
    c.key = key;
    let ref  =  this.refAcheteurRef.push(c);
    ref.update({key : ref.key})
    return ref;
  }
}
