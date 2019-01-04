import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LivraisonAcheteurComponent } from './livraison-acheteur/livraison-acheteur.component';
import { RouterModule } from '@angular/router';
import { FuseSharedModule } from '@fuse/shared.module';
import { SharedModule } from '../../../shared-front/shared/shared.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material';

export const routes = [
  { path: '', component: LivraisonAcheteurComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FuseSharedModule,
    SharedModule,
    MatFormFieldModule,
    MatInputModule
  ],
  declarations: [LivraisonAcheteurComponent]
})
export class LivraisonModule { }
