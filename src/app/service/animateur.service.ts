import { Injectable } from '@angular/core';
import { Animateur } from 'app/models/acteur/animateur/animateur.model';
import { AngularFireList, AngularFireDatabase } from 'angularfire2/database';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AnimateurService {
  private dbPath = 'animateur-db';
  refServiceRef: AngularFireList<Animateur> = null;

  constructor(public http: HttpClient,public db: AngularFireDatabase) { }

  createAnimateur(m: Animateur): void{
    this.refServiceRef.push(m);}
}
