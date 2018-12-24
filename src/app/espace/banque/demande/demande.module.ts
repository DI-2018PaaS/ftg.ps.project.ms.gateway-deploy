import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemandeComponent } from './demande/demande.component';
import { FuseSharedModule } from '@fuse/shared.module';
import { SharedModule } from '../../../shared-front/shared/shared.module';
import { RouterModule } from '@angular/router';
import { DemandePretListComponent } from './demande-pret-list/demande-pret-list.component';
import { DemandeLcreditListComponent } from './demande-lcredit-list/demande-lcredit-list.component';
import { DemandeLdepotListComponent } from './demande-ldepot-list/demande-ldepot-list.component';
import { DemandeAgrementListComponent } from './demande-agrement-list/demande-agrement-list.component';
import { ValidationPretComponent } from './demande-pret-list/validation-pret/validation-pret.component';

export const routes = [
  { path: '', component: DemandeComponent, pathMatch: 'full' },
  { path: 'demande-pret-list', component: DemandePretListComponent, pathMatch: 'full' },
  { path: 'demande-ligne-credit-list', component: DemandeLcreditListComponent, pathMatch: 'full' },
  { path: 'demande-ligne-depot-list', component: DemandeLdepotListComponent, pathMatch: 'full' },
  { path: 'demande-agrement-list', component: DemandeAgrementListComponent, pathMatch: 'full' },
  { path: 'validation-Pret/:id', component: ValidationPretComponent, children:[
        
      ] 
    }
  ];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FuseSharedModule,
    SharedModule,
    
  ],
  declarations: [DemandeComponent, DemandePretListComponent, DemandeLcreditListComponent, DemandeLdepotListComponent, DemandeAgrementListComponent, ValidationPretComponent]
})
export class DemandeModule { }
