import { Component, OnInit , ViewChild, Input } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { RoleService } from 'app/service/role.service';
import { CrudPopupComponent } from 'app/shared-front/shared/crudPopups/crudPopup/crudPopup.component';

@Component({
  selector: 'app-gestion-role',
  templateUrl: './gestion-role.component.html',
  styleUrls: ['./gestion-role.component.scss']
})
export class GestionRoleComponent implements OnInit {

  displayedColumns: string[] = ['roleName', 'roleDescription', 'roleCreatedDate', 'Modifier', 'Supprimer'];
  dataSource = new MatTableDataSource<any>();
  roleList = [];
  crudComp: CrudPopupComponent;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @Input() rowProperty: any;

  constructor( private roleService : RoleService, private parCrud: CrudPopupComponent){
    this.crudComp = this.parCrud;
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
  edit(row : any){
    this.crudComp.openUpdateRole(row);
    
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
  Modifier: string;
  Supprimer: string;
}