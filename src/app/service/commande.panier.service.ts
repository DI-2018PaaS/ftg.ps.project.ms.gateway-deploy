import { AngularFireList, AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';
import { HttpClient  } from "@angular/common/http";

import * as firebase from 'firebase/app';
import 'firebase/storage';
import { CommandeProduit } from 'app/models/msmagasindomains/panier/commande-produit.model';


@Injectable()
export class CommandePanierService 
{
  private dbPath = 'paniers-db';

  commandeProduitRef: AngularFireList<CommandeProduit> = null;

  constructor(public http: HttpClient,public db: AngularFireDatabase) {
    console.log('Hello CommandeProduitService Service');
    this.commandeProduitRef = this.db.list(this.dbPath);

  }

  createCommandeProduit(p:  CommandeProduit): void {
    const key = this.db.createPushId();
    p.key = key;
    p.isValid= false;
    this.commandeProduitRef.set(key,p)
  }
 
  updateCommandeProduit(key: string, value: any): void {
    this.commandeProduitRef.update(key, value).catch(error => this.handleError(error));
  }
 
  deleteCommandeProduit(key: string): void {
    this.commandeProduitRef.remove(key).catch(error => this.handleError(error));
  }
 
  get CommandeProduitList(): AngularFireList< CommandeProduit> {
    return this.commandeProduitRef;
  }
 
  deleteAll(): void {
    this.commandeProduitRef.remove().catch(error => this.handleError(error));
  }
 
  private handleError(error) {
    console.log(error);
  }
}