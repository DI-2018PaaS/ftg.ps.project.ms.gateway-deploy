import { Injectable } from "@angular/core";
import { Utilisateur } from "app/models/user/utilisateur/utilisateur.model";
import { AngularFireList, AngularFireDatabase, AngularFireObject } from 'angularfire2/database';
import { HttpClient  } from "@angular/common/http";


@Injectable()
export class RegistrationService{
    private dbPath = 'utilisateur-db';
    utilisateurRef: AngularFireList<Utilisateur> = null;
    restRef:AngularFireList<Utilisateur>;
   

    constructor(public http: HttpClient,public db: AngularFireDatabase){
      this.utilisateurRef = this.db.list(this.dbPath);
    }

createUser(u: Utilisateur){
  const key = this.db.createPushId();
    u.key = key;
    let ref  =  this.utilisateurRef.push(u);
    ref.update({key : ref.key})
    return ref;
  }
}