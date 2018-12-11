import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Agreement } from 'app/models/acteur/agreement/agreement.model';

/*
  Generated class for the MagasinService.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AgreementService {
  private dbPath = 'agreement-db';
 
  agreementRef: AngularFireList<Agreement> = null;

  constructor(public http: HttpClient,public db: AngularFireDatabase) {
    console.log('Hello AgreementService Service');
    this.agreementRef = this.db.list(this.dbPath);
  }
  createAgreement(p: Agreement): void {
    console.log('creation agreement service', p);
    this.agreementRef.push(p);
  }
  updateAgreement(key: string, value: any): void {
    this.agreementRef.update(key, value).catch(error => this.handleError(error));
  }
 
  deleteAgreement(key: string): void {
    this.agreementRef.remove(key).catch(error => this.handleError(error));
  }
 
  getAgreementList(): AngularFireList<Agreement> {
    return this.agreementRef;
  }
 
  deleteAll(): void {
    this.agreementRef.remove().catch(error => this.handleError(error));
  }
 
  private handleError(error) {
    console.log(error);
  }
}
 