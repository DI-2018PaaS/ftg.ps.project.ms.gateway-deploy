import { AngularFireList, AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';
import { HttpClient  } from "@angular/common/http";
import { Role } from 'app/models/user/role/role.model';
/*
  Generated class for the ServiceService Service.

  See https://angular.io/guide/dependency-injection for more info on Services
  and Angular DI.
*/
@Injectable()
export class RoleService{
  private dbPath = 'roles-db';
 
  refServiceRef: AngularFireList<Role>;

  constructor(public http: HttpClient,public db: AngularFireDatabase) {
    console.log('Hello ServiceService Service');
    this.refServiceRef = this.db.list(this.dbPath);
  }

  createRole(p: Role): void {
    this.refServiceRef.push( p );
  }
 
  updateRole(key: string, value: any): void {
    this.refServiceRef.update(key, value).catch(error => this.handleError(error));
  }
 
  deleteRole(key: string): void {
    this.refServiceRef.remove(key).catch(error => this.handleError(error));
  }
 
  getRoleList(): AngularFireList<Role> {
    return this.refServiceRef;
  }
 
  deleteAll(): void {
    this.refServiceRef.remove().catch(error => this.handleError(error));
  }
 
  private handleError(error) {
    console.log(error);
  }

}
