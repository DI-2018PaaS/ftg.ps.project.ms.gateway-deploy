import { Component, OnInit, ViewChild, HostListener } from '@angular/core';
import { FuseSidebarService } from '@fuse/components/sidebar/sidebar.service';
import { AngularFireList } from 'angularfire2/database';
import { Produit } from 'app/models/msmagasindomains/produit/produit.model';
import { AngularFireDatabase } from 'angularfire2/database';

@Component({
    selector: 'app-produit',
    templateUrl: './produit.component.html',
    styleUrls: ['./produit.component.scss']
  })

export class ProduitsComponent {
  @ViewChild('sidenav') sidenav: any;
  public sidenavOpen: boolean = true;
  public brands = [];
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
        console.log("produitsrr: ", this.produitList)
      })

  }
  public viewCol: number = 25;

  public slides = [
    { title: 'The biggest sale', subtitle: '...   ...', image: 'assets/images/carousel/FineTech_PS_Elmt_Main_Advertisement_FalseContent.png' },
    { title: 'Summer collection', subtitle: 'New Arrivals On Sale', image: 'assets/images/carousel/FineTech_PS_Elmt_Main_Advertisement_FalseContent.png' },
    { title: 'The biggest sale', subtitle: 'Special for today', image: 'assets/images/carousel/FineTech_PS_Elmt_Main_Advertisement_FalseContent.png' },
    { title: 'Summer collection', subtitle: 'New Arrivals On Sale', image: 'assets/images/carousel/FineTech_PS_Elmt_Main_Advertisement_FalseContent.png' },
    { title: 'The biggest sale', subtitle: 'Special for today', image: 'assets/images/carousel/FineTech_PS_Elmt_Main_Advertisement_FalseContent.png' }
  ];
  
  ngOnInit() {
    if (window.innerWidth < 960) {
      this.sidenavOpen = false;
    };
    if (window.innerWidth < 1280) {
      this.viewCol = 33.3;
    };
  }
  toggleSidebar(name): void
    {
        // TODO 
        this._fuseSidebarService.getSidebar(name).toggleOpen();
    }
}