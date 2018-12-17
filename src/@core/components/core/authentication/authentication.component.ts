import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';
import { Globals } from 'app/globals/Globals.element';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { LocalStorageService, SessionStorageService } from 'angular-web-storage';


@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.scss']
})
export class AuthenticationComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute, private local: LocalStorageService, private session: SessionStorageService,private globals: Globals) { }

  username: string;
  password: string;
  islogin: boolean = false;
  islog: boolean=false;
  user: Observable<string>;
  token: Observable<string>;
  KEY: string='';
  

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
    
  
 
  login (): void {
    if (this.username === 'admin' && this.password === 'admin'){
    console.log("auth admin");
    this.islogin=true;
    this.globals.role="administrateur";
    let navigationExtras: NavigationExtras = {
      queryParams: { 'login': this.username ,'islogin':true },
      fragment: 'admin'
    };
    this.router.navigate(['main'], navigationExtras);
  }
    else if (this.username === 'banq' && this.password === 'banq') {
    console.log("auth banq");
    this.islogin=true;
    this.globals.role="banque";
    let navigationExtras: NavigationExtras = {
      queryParams: { 'login': this.username ,'islogin':true },
      fragment: 'banque'
    };
    this.router.navigate(['banque'],navigationExtras);
    }
    else if (this.username === 'acheteur' && this.password === 'acheteur') {
    console.log("auth acheteur");
    this.islogin=true;
    this.globals.role="acheteur";
    let navigationExtras: NavigationExtras = {
      queryParams: { 'login': this.username ,'islogin':true },
      fragment: 'shopping'
    };
    this.router.navigate(['shopping'], navigationExtras);
    }
	else if (this.username === 'anim' && this.password === 'anim') {
    console.log("auth anim");
    this.islogin=true;
    this.globals.role="animateur";
    let navigationExtras: NavigationExtras = {
      queryParams: { 'login': this.username ,'islogin':true },
      fragment: 'animateur'
    };
    this.router.navigate(['main-anim'], navigationExtras);
     
    }
    else if (this.username === 'fourniss' && this.password === 'fourniss') {
    console.log("auth fournisseur");
    this.islogin=true;
    this.globals.role="fournisseur";
    let navigationExtras: NavigationExtras = {
      queryParams: { 'login': this.username ,'islogin':true },
      fragment: 'fournisseur'
    };
    this.router.navigate(['main-magasin'], navigationExtras);
      
    }
	else if (this.username === 'multi' && this.password === 'multi') {
    console.log("auth multiuser");
    this.islogin=true;
      this.globals.role="multiuser";
      let navigationExtras: NavigationExtras = {
        queryParams: { 'login': this.username ,'islogin':true },
        fragment: 'multiuser'
      };
      this.router.navigate(['muser-main'], navigationExtras);
      //this.router.navigate(['main-muser-entry']);
    }
    else{
      alert('login ou mot de passe invalide');
    }
  }
  
  signUp (): void {
    this.router.navigate(['registration']);
  }

  logOut(): void {
    this.islogin = false;
    this.router.navigate(['']);
    this.session.remove(this.KEY);
  }

}
