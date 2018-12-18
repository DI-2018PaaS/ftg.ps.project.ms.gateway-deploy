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

createUser(u: Utilisateur): void{
  
  this.utilisateurRef.push(u);
  console.log("user create"+ ":" + this.utilisateurRef);
}
}