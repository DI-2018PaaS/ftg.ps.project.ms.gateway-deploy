import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GestionUtilisateurComponent } from './gestion-utilisateur/gestion-utilisateur.component';
import { GestionRoleComponent } from './gestion-role/gestion-role.component';
import { GestionAccesComponent } from './gestion-acces/gestion-acces.component';
import { FuseSharedModule } from '@fuse/shared.module';
import { SharedModule } from '../../../shared-front/shared/shared.module';
import { RouterModule } from '@angular/router';

export const routes = [
  { path: '', component: GestionAccesComponent, pathMatch: 'full' },
  { path: 'gestion-utlisateurs', component: GestionUtilisateurComponent, pathMatch: 'full', data: {
    breadcrumb:'gestion utilisateurs'
    } 
  },
  { path: 'gestion-roles', component: GestionRoleComponent, pathMatch: 'full', data: {
    breadcrumb:'gestion roles'
    }
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FuseSharedModule,
    SharedModule
  ],
  declarations: [GestionUtilisateurComponent, GestionRoleComponent, GestionAccesComponent]
})
export class GestionAccesModule { }
