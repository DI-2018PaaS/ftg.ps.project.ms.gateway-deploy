import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';
import { Globals } from 'app/globals/Globals.element';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {SessionStorageService } from 'angular-web-storage';
import { RegistrationService } from 'app/service/registration.service';
import { Utilisateur } from 'app/models/user/utilisateur/utilisateur.model';
import { AngularFireList, AngularFireDatabase, AngularFireAction } from 'angularfire2/database';
import { MatTableDataSource } from '@angular/material';
import { Util } from 'prismjs';


@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.scss']
})
export class AuthenticationComponent implements OnInit {
  username: string;
  password: string;
  islogin: boolean = false;
  user: Observable<string>;
  token: Observable<string>;
  KEY: string='';
  utilisateur = {} as Utilisateur

  private dbPath = 'utilisateur-db';

  constructor(private router: Router, private route: ActivatedRoute, private session: SessionStorageService, 
    private registrationService: RegistrationService ,private globals: Globals, private db: AngularFireDatabase) { 
      
    }
    
  ngOnInit() {
    this.user=this.route
    .queryParamMap
    .pipe(map(params => params.get('login') || 'None'));

    this.token = this.route
    .fragment
    .pipe(map(fragment => fragment || 'None'));

    this.user.subscribe(params =>  {
      if(params!='None'){
        this.username=params;
        this.KEY=params;
        this.islogin=true;
        this.session.set(this.KEY, params);
      }
    });

  }
    
  
  profile(){
    this.router.navigate(['profile']);
  }
  signUp (): void {
    this.router.navigate(['registration']);
  }

  logOut(): void {
    this.islogin = false;
    this.router.navigate(['']);
    this.session.remove(this.KEY);
    this.session.remove('utilisateur');
  }

  signIn(): void{
    this.session.clear();
    this.db.list(this.dbPath, ref => ref.orderByChild('username').equalTo(this.username).limitToFirst(1))
    .valueChanges()
    .subscribe(res => {
      this.utilisateur=res[0] as Utilisateur;  
      this.session.set('utilisateur', res[0])
      if(this.username==this.utilisateur.username && this.password==this.utilisateur.password){
        if(this.utilisateur.userActeurID==1){
          this.islogin=true;
          let navigationExtras: NavigationExtras = {
            queryParams: { 'login': this.username ,'islogin':true },
            fragment: 'animateur'
          };
          this.router.navigate(['main-anim'], navigationExtras);
        }
        else if(this.utilisateur.userActeurID==2){
          this.islogin=true;
          let navigationExtras: NavigationExtras = {
          queryParams: { 'login': this.username ,'islogin':true },
          fragment: 'shopping'
         };
         this.router.navigate(['shopping'], navigationExtras);
        }
        else if(this.utilisateur.userActeurID==3){
          this.islogin=true;
          let navigationExtras: NavigationExtras = {
          queryParams: { 'login': this.username ,'islogin':true },
          fragment: 'fournisseur'
          };
          this.router.navigate(['main-magasin'], navigationExtras);
        }else if(this.utilisateur.userActeurID==4){
          this.islogin=true;
            let navigationExtras: NavigationExtras = {
            queryParams: { 'login': this.username ,'islogin':true },
            fragment: 'administrateur'
            };
            this.router.navigate(['main'], navigationExtras);
        }else if(this.utilisateur.userActeurID==5){
          this.islogin=true;
            let navigationExtras: NavigationExtras = {
            queryParams: { 'login': this.username ,'islogin':true },
            fragment: 'banque'
            };
            this.router.navigate(['banque'], navigationExtras);
        }
      }else{
        alert('login ou mot de passe invalide');
      }
    });
   
   
     
  }

}
