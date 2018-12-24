import { AngularFireList, AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';
import { HttpClient  } from "@angular/common/http";
import { Produit } from 'app/models/msmagasindomains/produit/produit.model';

import * as firebase from 'firebase/app';
import 'firebase/storage';  // <----
import { ListProduit } from 'app/models/acteur/demande/ListProduit.model';

/*
  Generated class for the ProduitService Service.

  See https://angular.io/guide/dependency-injection for more info on Services
  and Angular DI.
*/
@Injectable()
export class ListProduitService {
  private dbPath = 'list-produits-db';
  private basePath:string = '/uploads';

  produitRef: AngularFireList<ListProduit> = null;

  constructor(public http: HttpClient,public db: AngularFireDatabase) {
    console.log('Hello ProduitService Service');
    this.produitRef = this.db.list(this.dbPath);

  }

 
  addToList(p: ListProduit){
    const key = this.db.createPushId();
    p.key = key;
    let ref  =  this.produitRef.push(p);
    ref.update({key : ref.key})
    return ref;
  }
 
  updateProduit(key: string, value: any): void {
    this.produitRef.update(key, value).catch(error => this.handleError(error));
  }
 
  deleteProduit(key: string): void {
    this.produitRef.remove(key).catch(error => this.handleError(error));
  }
 
  getProduitList(): AngularFireList<ListProduit> {
    return this.produitRef;
  }
 
  deleteAll(): void {
    this.produitRef.remove().catch(error => this.handleError(error));
  }
 
  private handleError(error) {
    console.log(error);
  }


  pushUpload(upload: Upload) {

    var storage = firebase.storage();
    var storageRef = storage.ref();

    //let storageRef = firebase.storage().ref();
    let uploadTask = storageRef.child(`${this.basePath}/${upload.file.name}`).put(upload.file);

    uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,
      (snapshot) =>  {
        // upload in progress
        //upload.progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
      },
      (error) => {
        // upload failed
        console.log("error",error)
      },
      () => {
        // upload success
        console.log("success")
        uploadTask.snapshot.ref.getDownloadURL().then(downloadURL => {
          const imageUrl = downloadURL;
          upload.url = imageUrl
          console.log('URL:' + imageUrl);
        });
        upload.name = upload.file.name
        this.saveFileData(upload)
      }
    );
  }



  // Writes the file details to the realtime db
  private saveFileData(upload: Upload) {
    this.db.list(`${this.basePath}/`).push(upload);
  }

  // getFileUploads(numberItems): AngularFireList<Upload> {
  //   return this.db.list(this.basePath, ref =>
  //     ref.limitToLast(numberItems));
  // }

}

export class Upload {

  $key: string;
  file:File;
  name:string;
  url:string;
  //progress:number;
  createdAt: Date = new Date();

  constructor(file:File) {
    this.file = file;
  }
}