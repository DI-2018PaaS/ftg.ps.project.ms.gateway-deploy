import { Component, OnInit } from '@angular/core';
import { FuseSidebarService } from '@fuse/components/sidebar/sidebar.service';
import { ProduitService } from 'app/service/produit.service';
import { AngularFireList } from 'angularfire2/database';
import { Produit } from 'app/models/msmagasindomains/produit/produit.model';
import { AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'app-domaine-produit',
  templateUrl: './domaine-produit.component.html',
  styleUrls: ['./domaine-produit.component.scss']
})
export class DomaineProduitComponent implements OnInit {
  public slides = [
    { title: 'The biggest sale', subtitle: '...   ...', image: 'assets/images/carousel/FineTech_PS_Elmt_Main_Advertisement_FalseContent.png' },
    { title: 'Summer collection', subtitle: 'New Arrivals On Sale', image: 'assets/images/carousel/FineTech_PS_Elmt_Main_Advertisement_FalseContent.png' },
    { title: 'The biggest sale', subtitle: 'Special for today', image: 'assets/images/carousel/FineTech_PS_Elmt_Main_Advertisement_FalseContent.png' },
    { title: 'Summer collection', subtitle: 'New Arrivals On Sale', image: 'assets/images/carousel/FineTech_PS_Elmt_Main_Advertisement_FalseContent.png' },
    { title: 'The biggest sale', subtitle: 'Special for today', image: 'assets/images/carousel/FineTech_PS_Elmt_Main_Advertisement_FalseContent.png' }
  ];

  private dbPath = 'produits-db';
  produitRef: AngularFireList<Produit> = null;
  produitList = [];
  produit = {} as Produit;
/**
   * Constructor
   *
   * 
   * @param {FuseSidebarService} _fuseSidebarService
   * 
   */
constructor(private _fuseSidebarService: FuseSidebarService,public db: AngularFireDatabase) { 

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
  }

  toggleSidebar(name): void {
    // TODO 
    this._fuseSidebarService.getSidebar(name).toggleOpen();
  }

}
