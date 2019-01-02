import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FuseSharedModule } from '@fuse/shared.module';
import { SharedModule } from '../../../shared-front/shared/shared.module';
import { MatBadgeModule } from '@angular/material/badge';
import { MatInputModule } from '@angular/material/input';
import { RouterModule } from '@angular/router';
import { FoLivraisonListComponent } from './livraison-list/fourn-livraison-list.component';
import { VisuBlivraisonComponent } from './visu-blivraison/visu-blivraison.component';


export const routes = [
  { path: '', component: FoLivraisonListComponent, pathMatch: 'full' },
  { path: 'visu-blivraison/:id', component: VisuBlivraisonComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [
    CommonModule,
    FuseSharedModule,
    SharedModule,
    MatBadgeModule,
    MatInputModule,
    RouterModule.forChild(routes),
  ],
  declarations: [FoLivraisonListComponent, VisuBlivraisonComponent]
})
export class LivraisonsFournisseurModule { }
