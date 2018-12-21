import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthenticationComponent } from './authentication/authentication.component';
import { FormsModule } from '@angular/forms';
import { MatButtonModule, MatIconModule, MatMenuModule, MatToolbarModule, MatCardModule, MatFormFieldModule, MatInputModule } from '@angular/material';
import { FuseSharedModule } from '@fuse/shared.module';
import { InscriptionComponent } from './inscription/inscription.component';


@NgModule({
  imports: [
    CommonModule,
    //BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatToolbarModule,
    FuseSharedModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule
    ],
  declarations: [AuthenticationComponent, InscriptionComponent],
  exports: [AuthenticationComponent,InscriptionComponent]
})
export class CoreModule { }
