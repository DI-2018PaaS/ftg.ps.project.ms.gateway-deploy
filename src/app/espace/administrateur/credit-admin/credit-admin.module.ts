import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LigneCreditListComponent } from './ligne-credit-list/ligne-credit-list.component';
import { FuseSharedModule } from '@fuse/shared.module';
import { SharedModule } from '../../../shared-front/shared/shared.module';
import { MatBadgeModule } from '@angular/material/badge';
import { MatInputModule } from '@angular/material/input';
import { RouterModule } from '@angular/router';

export const routes = [
  { path: '', component: LigneCreditListComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FuseSharedModule,
    SharedModule,
    MatBadgeModule,
    MatInputModule
  ],
  declarations: [LigneCreditListComponent]
})
export class CreditAdminModule { }
