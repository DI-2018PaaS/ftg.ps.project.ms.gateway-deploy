import { Component, OnInit, ViewChild, HostListener } from '@angular/core';
import { Data, AppService } from '../../front/app.service';
import { Product } from '../../front/app.models';
import { MatDialog } from '@angular/material';
import { FuseNavigationService } from '@fuse/components/navigation/navigation.service';
import { frontNavigation } from 'app/front/navigation/frontNavigation';
import { FuseSidebarService } from '@fuse/components/sidebar/sidebar.service';
import { ProduitService } from 'app/service/produit.service';
import { AngularFireList } from 'angularfire2/database';
import { Produit } from 'app/models/msmagasindomains/produit/produit.model';
import { AngularFireDatabase } from 'angularfire2/database';
import { ListProduit } from 'app/models/acteur/demande/ListProduit.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  @ViewChild('sidenav') sidenav: any;
  public sidenavOpen: boolean = true;
  public brands = [];
  public product: Product;

  /**
     * Constructor
     *
     * 
     * @param {FuseSidebarService} _fuseSidebarService
     * 
     */

    private dbPath = 'produits-db';
    produitRef: AngularFireList<Produit> = null;
    produitList = [];
    produit = {} as Produit;

  constructor(private produitService : ProduitService, 
    public db: AngularFireDatabase,
    public appService: AppService, 
    private _fuseNavigationService: FuseNavigationService,
    private _fuseSidebarService: FuseSidebarService) {

    this.navigation = frontNavigation;

    // Register the navigation to the service
    this._fuseNavigationService.register('home', this.navigation);

    // Set the main navigation as our current navigation
    this._fuseNavigationService.setCurrentNavigation('home');


    this.db.list(this.dbPath, ref => ref
      .orderByChild('isValid')
      .equalTo(true)
      .limitToFirst(3))
      .valueChanges()
      .subscribe(res => {
        this.produitList = res;
        console.log("produits: ", this.produitList)
      })

      //this.produit = this.ListProduit as Produit


   }
  public topRatedProducts: Array<Product>;
  public viewCol: number = 25;
  navigation: any;

  public slides = [
    { title: '', subtitle: '...   ...', image: 'assets/images/carousel/FineTech_PS_Elmt_Main_Advertisement_FalseContent.png' },
    { title: '', subtitle: '.', image: 'assets/images/carousel/FineTech_PS_Elmt_Main_Advertisement_FalseContent.png' },
    { title: '', subtitle: '.', image: 'assets/images/carousel/FineTech_PS_Elmt_Main_Advertisement_FalseContent.png' },
    { title: '', subtitle: '.', image: 'assets/images/carousel/FineTech_PS_Elmt_Main_Advertisement_FalseContent.png' },
    { title: '', subtitle: '.', image: 'assets/images/carousel/FineTech_PS_Elmt_Main_Advertisement_FalseContent.png' }
  ];

  ngOnInit() {
    this.getBrands();
    this.getProducts();
    if (window.innerWidth < 960) {
      this.sidenavOpen = false;
    };
    if (window.innerWidth < 1280) {
      this.viewCol = 33.3;
    };
  }
  public getBrands() {
    this.brands = this.appService.getBrands();
  }

  public getProducts() {
    this.appService.getProducts('top-rated').subscribe(data => {
      this.topRatedProducts = data;
    });
  }

 @HostListener('window:resize')
  public onWindowResize(): void {
    (window.innerWidth < 960) ? this.sidenavOpen = false : this.sidenavOpen = true;
    (window.innerWidth < 1280) ? this.viewCol = 33.3 : this.viewCol = 25;
  }

  toggleSidebar(name): void
    {
        // TODO 
    this._fuseSidebarService.getSidebar(name).toggleOpen();
    }
}