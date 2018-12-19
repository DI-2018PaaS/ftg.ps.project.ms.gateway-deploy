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
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.scss']
})
export class AuthenticationComponent implements OnInit {
  username: string;
  password: string;
  islogin: boolean = false;
  user: Observable<string>;
  idType: Observable<string>;
  token: Observable<string>;
  loginUser: string;
  KEY: string='Key';
  value : string='';
  utilisateur = {} as Utilisateur

  private dbPath = 'utilisateur-db';
  @SessionStorage() storage :string;
  
  constructor(private router: Router, private route: ActivatedRoute, private session: SessionStorageService, 
    private registrationService: RegistrationService ,private globals: Globals, private db: AngularFireDatabase) { 
      
    }
    
  ngOnInit() {

    this.user=this.route
    .queryParamMap
    .pipe(map(params => params.get('login') || 'None'))
   
    this.token = this.route
    .fragment
    .pipe(map(fragment => fragment || 'None'));

    this.user.subscribe(params => {
       if(params!='None'){
         this.username=params;
         this.loginUser=params;
         this.islogin=true;
         this.session.set(this.KEY, {'loginUser':this.loginUser,'idTypeActeur':this.value});
         this.idType=this.route.queryParamMap
         .pipe(map(params => params.get('typeActeur') || 'None'));

          this.idType.subscribe(params => {
           if(params!='None'){
             this.value=params
             this.session.set(this.KEY, {loginUser:this.loginUser,idTypeActeur:this.value})
           }
         });
      }}
    );
  }
    

  signUp (): void {
    this.router.navigate(['registration']);
  }

  logOut(): void {
    this.islogin = false;
    this.router.navigate(['']);
    this.session.remove(this.KEY);
  }

  signIn(): void{
    this.db.list(this.dbPath, ref => ref.orderByChild('username').equalTo(this.username).limitToFirst(1))
    .valueChanges()
    .subscribe(res => {
      this.utilisateur=res[0] as Utilisateur;  
      if(this.username==this.utilisateur.username && this.password==this.utilisateur.password){
        if(this.utilisateur.userActeurID==1){
          this.islogin=true;
          let navigationExtras: NavigationExtras = {
            queryParams: { 'login': this.username, 'typeActeur':1},
            fragment: 'animateur'
          };
          this.router.navigate(['main-anim'], navigationExtras);
        }
        else if(this.utilisateur.userActeurID==2){
          this.islogin=true;
          let navigationExtras: NavigationExtras = {
          queryParams: { 'login': this.username, 'typeActeur':2},
          fragment: 'shopping'
         };
         this.router.navigate(['shopping'], navigationExtras);
        }
        else if(this.utilisateur.userActeurID==3){
            this.islogin=true;
            let navigationExtras: NavigationExtras = {
            queryParams: { 'login': this.username,'typeActeur':3},
            fragment: 'fournisseur'
            };
            this.router.navigate(['main-magasin'], navigationExtras);
        }else if(this.utilisateur.userActeurID==4){
          this.islogin=true;
            let navigationExtras: NavigationExtras = {
            queryParams: { 'login': this.username, 'typeActeur':4},
            fragment: 'administrateur'
            };
            this.router.navigate(['main'], navigationExtras);
        }else if(this.utilisateur.userActeurID==5){
          this.islogin=true;
            let navigationExtras: NavigationExtras = {
            queryParams: { 'login': this.username,'typeActeur':5},
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
