import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Globals } from 'app/globals/Globals.element';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { PARAMETERS } from '@angular/core/src/util/decorators';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.scss']
})
export class AuthenticationComponent implements OnInit {

  constructor( private router: Router, private route: ActivatedRoute,private globals: Globals) { }

  username: string;
  password: string;
  islogin: boolean = false;
  islog: string;
 

  ngOnInit() {
    this.username=this.route.snapshot.paramMap.get("login");
    this.islog=this.route.snapshot.paramMap.get('islogin');
    console.log(this.route.queryParams);
  }
 
  login (): void {
    if (this.username === 'admin' && this.password === 'admin'){
    console.log("auth admin");
    this.islogin=true;
		this.globals.role="administrateur";
      this.router.navigate(['main']);
    }
    else if (this.username === 'banq' && this.password === 'banq') {
    console.log("auth banq");
    this.islogin=true;
		this.globals.role="banque";
      this.router.navigate(['banque']);
     
    }
    else if (this.username === 'acheteur' && this.password === 'acheteur') {
    console.log("auth acheteur");
    this.islogin=true;
		this.globals.role="acheteur";
      this.router.navigate(['shopping']);
      
    }
	else if (this.username === 'anim' && this.password === 'anim') {
    console.log("auth anim");
    this.islogin=true;
		this.globals.role="animateur";
      this.router.navigate(['main-anim']);
     
    }
    else if (this.username === 'fourniss' && this.password === 'fourniss') {
    console.log("auth fournisseur");
    this.islogin=true;
		this.globals.role="fournisseur";
      this.router.navigate(['main-magasin']);
      
    }
	else if (this.username === 'multi' && this.password === 'multi') {
    console.log("auth multiuser");
    this.islogin=true;
		  this.globals.role="multiuser";
      this.router.navigate(['muser-main']);
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
  }

}
