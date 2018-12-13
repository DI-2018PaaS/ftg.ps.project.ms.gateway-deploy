import { Component, OnInit , ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { RoleService } from 'app/service/role.service';

@Component({
  selector: 'app-gestion-role',
  templateUrl: './gestion-role.component.html',
  styleUrls: ['./gestion-role.component.scss']
})
export class GestionRoleComponent implements OnInit {

  displayedColumns: string[] = ['roleName', 'roleDescription', 'roleCreatedDate', 'Details', 'Modifier', 'Supprimer'];
  dataSource = new MatTableDataSource<any>();
  roleList = [];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor( private roleService : RoleService){
    this.roleService.getRoleList().valueChanges().subscribe(res => {
      this.roleList.push(res);
      this.dataSource.data = res;
    })
  }

  ngOnInit(){
    
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  ELEMENT_DATA: CommandeElement[] = this.roleList;
}


export interface CommandeElement {
  acteurTypeID: string;
  key: string;
  roleName: string;
  roleUniqueID: string;
  roleCreatedDate: string;
  roleDescription: string;
  Details: string;
  Modifier: string;
  Supprimer: string;
}