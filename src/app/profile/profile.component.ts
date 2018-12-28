import { Component, OnInit } from '@angular/core';
import { SessionStorageService } from 'angular-web-storage';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  
  user:any;
  constructor(private session : SessionStorageService) { }

  ngOnInit() {
   this.user=this.session.get('utilisateur')
  }

}
