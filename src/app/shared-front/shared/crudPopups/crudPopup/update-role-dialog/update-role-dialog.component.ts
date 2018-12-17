import { Component, OnInit, Inject , ViewChild , Input , Output, EventEmitter , AfterViewInit} from '@angular/core';
import { MatDialogRef,MAT_DIALOG_DATA } from '@angular/material';
import {FormControl, Validators} from '@angular/forms';
import { Role } from 'app/models/user/role/role.model';
import { AngularFireList} from 'angularfire2/database';
import { RoleService } from 'app/service/role.service';

@Component({
  selector: 'app-update-role-dialog',
  templateUrl: './update-role-dialog.component.html',
  styleUrls: ['./update-role-dialog.component.scss']
})
export class UpdateRoleDialogComponent implements OnInit {
  hide = true;
  roleName = new FormControl();
  roleDescription = new FormControl();
  role = {} as Role;
  row :any;

  constructor(@Inject(MAT_DIALOG_DATA, ) public data:any, private roleService : RoleService) {
    this.row = data.row;
    
  }

  ngOnInit() {
    
  }
  
  onFileChanged(event) {
    const file = event.target.files[0]
  }

  updateRole(){

  }
 
}
