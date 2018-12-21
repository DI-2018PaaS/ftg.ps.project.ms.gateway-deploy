import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgreementComponent } from './agreement/agreement.component';
import { FuseSharedModule } from '@fuse/shared.module';
import { SharedModule } from '../../../shared-front/shared/shared.module';
import { RouterModule } from '@angular/router';

export const routes = [
  { path: '', component: AgreementComponent, pathMatch: 'full' },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FuseSharedModule,
    SharedModule
  ],
  declarations: [AgreementComponent]
})
export class AgreementModule { }
