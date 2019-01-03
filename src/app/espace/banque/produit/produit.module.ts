import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SuiviProduitComponent } from './suivi-produit/suivi-produit.component';
import { FuseSharedModule } from '@fuse/shared.module';
import { SharedModule } from '../../../shared-front/shared/shared.module';
import { RouterModule } from '@angular/router';
import { VisuBlivraisonComponent } from './visu-blivraison/visu-blivraison.component';

export const routes = [
  { path: '', component: SuiviProduitComponent, pathMatch: 'full' },
  { path: 'visu-blivraison/:id', component: VisuBlivraisonComponent, pathMatch: 'full' }

];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FuseSharedModule,
    SharedModule,
  
  ],
  declarations: [SuiviProduitComponent, VisuBlivraisonComponent]
})
export class ProduitModule { }
