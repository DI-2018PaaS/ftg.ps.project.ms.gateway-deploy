import { Component, OnInit, ViewChild, HostListener } from '@angular/core';
import { ProduitService } from 'app/service/produit.service';
import { AngularFireList } from 'angularfire2/database';
import { Produit } from 'app/models/msmagasindomains/produit/produit.model';
import { AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'app-domaine',
  templateUrl: './domaine.component.html',
  styleUrls: ['./domaine.component.scss']
})
export class DomaineComponent implements OnInit {
  @ViewChild('sidenav') sidenav: any;
  public sidenavOpen: boolean = true;
  public viewCol: number = 25;
  panelOpenState = true;
  private dbPath = 'produits-db';
  produitRef: AngularFireList<Produit> = null;
  produitList = [];
  produit = {} as Produit;

  constructor(public db: AngularFireDatabase) { 
    this.db.list(this.dbPath, ref => ref
      .orderByChild('isValid')
      .equalTo(true))
      .valueChanges()
      .subscribe(res => {
        this.produitList = res;
        console.log("produits: ", this.produitList)
      })
  }

  ngOnInit() {
    if (window.innerWidth < 960) {
      this.sidenavOpen = false;
    };
    if (window.innerWidth < 1280) {
      this.viewCol = 33.3;
    };
  }

  @HostListener('window:resize')
  public onWindowResize(): void {
    (window.innerWidth < 960) ? this.sidenavOpen = false : this.sidenavOpen = true;
    (window.innerWidth < 1280) ? this.viewCol = 33.3 : this.viewCol = 25;
  }
  
  toggleSidebar(name): void
    {
        // TODO this._fuseSidebarService.getSidebar(name).toggleOpen();
    }

}
