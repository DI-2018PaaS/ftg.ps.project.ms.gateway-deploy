import { Component, OnInit } from '@angular/core';
import { AngularFireList} from 'angularfire2/database';
import { RoleService } from 'app/service/role.service';
import { Role } from 'app/models/user/role/role.model';
import {FormControl, Validators} from '@angular/forms';
import * as moment from 'moment';

@Component({
  selector: 'app-create-role-dialog',
  templateUrl: './create-role-dialog.component.html',
  styleUrls: ['./create-role-dialog.component.scss']
})
export class CreateRoleDialogComponent implements OnInit {
  hide = true;
  role = {} as Role;
  roleRef$ : AngularFireList<RoleService>;
  id ="";

  roleName = new FormControl();
  roleDescription = new FormControl();
  acteurTypeID = new FormControl();


  constructor(private roleService : RoleService) { 
  }

  ngOnInit() {
    
  }
  
  onFileChanged(event) {
    const file = event.target.files[0]
  }
  createNewRole (){
   
    this.roleService.createRole({
      key: "",
      roleUniqueID: this.roleService.makeid(),
      roleName: this.role.roleName,
      roleDescription : this.role.roleDescription,
      roleCreatedDate: moment().toString(),
      acteurTypeID: this.role.acteurTypeID
    });
    this.role = {} as Role;
     }
}
