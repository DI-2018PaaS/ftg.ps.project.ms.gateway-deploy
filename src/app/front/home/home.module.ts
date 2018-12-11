import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../shared-front/shared/shared.module';
import { HomeComponent } from './home.component';
import { FuseSidebarModule } from '@fuse/components';
import { FuseDemoModule } from '@fuse/components/demo/demo.module';
import { FuseSharedModule } from '@fuse/shared.module';
import { FuseSearchBarModule } from '@fuse/components/search-bar/search-bar.module';
import {MatButtonModule} from '@angular/material/button';

export const routes = [
  { path: '', component: HomeComponent, pathMatch: 'full'  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
    FuseSidebarModule,
    FuseDemoModule,
    FuseSharedModule,
    FuseSearchBarModule,
    MatButtonModule   
  ],
  declarations: [
    HomeComponent
  ]
})
export class HomeModule { }