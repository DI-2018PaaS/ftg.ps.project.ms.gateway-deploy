import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SuiviProduitComponent } from './suivi-produit/suivi-produit.component';
import { FuseSharedModule } from '@fuse/shared.module';
import { SharedModule } from '../../../shared-front/shared/shared.module';
import { RouterModule } from '@angular/router';
import { VisuBlivraisonComponent } from './visu-blivraison/visu-blivraison.component';
import { PaiementBlivraisonComponent } from './paiement-blivraison/paiement-blivraison.component';

export const routes = [
  { path: '', component: SuiviProduitComponent, pathMatch: 'full' },
  { path: 'visu-blivraison/:id', component: VisuBlivraisonComponent, pathMatch: 'full' },
  { path: 'paiement-blivraison/:id', component: PaiementBlivraisonComponent, pathMatch: 'full' }


];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FuseSharedModule,
    SharedModule,
  
  ],
  declarations: [SuiviProduitComponent, VisuBlivraisonComponent, PaiementBlivraisonComponent]
})
export class ProduitModule { }
