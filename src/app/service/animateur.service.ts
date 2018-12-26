import { Injectable } from '@angular/core';
import { Animateur } from 'app/models/acteur/animateur/animateur.model';
import { AngularFireList, AngularFireDatabase } from 'angularfire2/database';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AnimateurService {
  private dbPath = 'animateur-db';
  refAnimateurRef: AngularFireList<Animateur> = null;

  constructor(public http: HttpClient,public db: AngularFireDatabase) { 
    this.refAnimateurRef = this.db.list(this.dbPath);
  }

  createAnimateur(m: Animateur) {
    const key = this.db.createPushId();
    m.key = key;
    let ref  =  this.refAnimateurRef.push(m);
    ref.update({key : ref.key})
    return ref;
  }
}
