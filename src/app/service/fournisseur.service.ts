import { Injectable } from '@angular/core';
import { Fournisseur } from 'app/models/acteur/fournisseur/fournisseur.model';
import { AngularFireList, AngularFireDatabase } from 'angularfire2/database';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FournisseurService {
  private dbPath = 'fournisseur-db';
  refFournisseurRef: AngularFireList<Fournisseur> = null;

  constructor(public http: HttpClient,public db: AngularFireDatabase) { 
    this.refFournisseurRef=this.db.list(this.dbPath);
  }
  
  createFournisseur(f: Fournisseur){
    const key = this.db.createPushId();
    f.key = key;
    let ref  =  this.refFournisseurRef.push(f);
    ref.update({key : ref.key})
    return ref;
  } 
}
