import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BoutiqueComponent } from './boutique/boutique.component';
import { ListeValidationComponent } from './liste-validation/liste-validation.component';
import { MagasinComponent } from './magasin/magasin.component';
import { ProduitComponent } from './produit/produit.component';
import { SharedModule } from '../../../shared-front/shared/shared.module';
import { FuseSharedModule } from '@fuse/shared.module';

import { MatBadgeModule } from '@angular/material/badge';
import { MatInputModule } from '@angular/material/input';
export const routes = [
  { path: '', component: ListeValidationComponent, pathMatch: 'full' },
  { path: 'boutique-list', component: BoutiqueComponent, pathMatch: 'full' },
  { path: 'produit-list', component: ProduitComponent, pathMatch: 'full' },
  { path: 'magasin-list', component: MagasinComponent, pathMatch: 'full' },

];

@NgModule({
  imports: [
    CommonModule,
    MatBadgeModule,
    MatInputModule,
    FuseSharedModule,
    SharedModule,
    RouterModule.forChild(routes),
  ],
  declarations: [BoutiqueComponent, ListeValidationComponent, MagasinComponent, ProduitComponent]
})
export class ValidationsModule { }
