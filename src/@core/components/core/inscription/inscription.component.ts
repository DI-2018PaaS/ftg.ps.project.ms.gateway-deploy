import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';
import { Globals } from 'app/globals/Globals.element';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { switchMap } from "rxjs/operators" 
import { SessionStorageService,SessionStorage } from 'angular-web-storage';
import { RegistrationService } from 'app/service/registration.service';
import { Utilisateur } from 'app/models/user/utilisateur/utilisateur.model';
import { AngularFireList, AngularFireDatabase, AngularFireAction } from 'angularfire2/database';
import { MatTableDataSource } from '@angular/material';
import { Util } from 'prismjs';
@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.scss']
})
export class InscriptionComponent implements OnInit {
  constructor(private router: Router, private route: ActivatedRoute, private session: SessionStorageService, 
    private registrationService: RegistrationService ,private globals: Globals, private db: AngularFireDatabase) { 
      
    }

  ngOnInit() {
    
  }
  signUp (): void {
    this.router.navigate(['registration']);
  }
}
