import { Injectable } from '@angular/core';
import { Fournisseur } from 'app/models/acteur/fournisseur/fournisseur.model';
import { AngularFireList, AngularFireDatabase } from 'angularfire2/database';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FournisseurService {
  private dbPath = 'fournisseur-db';
  refServiceRef: AngularFireList<Fournisseur> = null;

  constructor(public http: HttpClient,public db: AngularFireDatabase) { }
  
  createFournisseur(f: Fournisseur): void{
    this.refServiceRef.push(f);}

}
