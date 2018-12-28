import { Component} from '@angular/core';
import { FuseNavigationService } from '@fuse/components/navigation/navigation.service';
import { fournissNavigation } from './navigation/fourniss-navigation';
import { Globals } from 'app/globals/Globals.element';
import { Router } from '@angular/router';
import { acheteurNavigation } from '../acheteur/navigation/acheteurNavigation';
import { banqueNavigation } from '../banque/navigation/banqueNavigation';
import { animNavigation } from '../animateur/navigation/anim-navigation';
import { adminNavigation } from '../administrateur/navigation/admin-navigation';
import { CrudPopupComponent } from 'app/shared-front/shared/crudPopups/crudPopup/crudPopup.component';
import { SessionStorageService } from 'angular-web-storage';
import { Utilisateur } from 'app/models/user/utilisateur/utilisateur.model';
import { MatSnackBar} from '@angular/material';
import { FuseSidebarService } from '@fuse/components/sidebar/sidebar.service';


@Component({
    selector: 'app-fourniss',
    templateUrl: './fourniss.component.html',
    styleUrls: ['./fourniss.component.scss']
})
export class FournisseurComponent {  
    navigation: any;
	crudComp: CrudPopupComponent;
    role:string;
    utilisateur = {} as Utilisateur;
    isagreer: boolean
    buttonDisabled: boolean = false;
	roles = [
        { Name: 'Acheteur', value: '1',routing:'/shopping'},
        { Name: 'Banque', value: '2',routing:'/banque'},
        { Name: 'Fournisseur', value: '3',routing:'/main-magasin'},
        { Name: 'Animateur', value: '4',routing:'/main-anim'},
        { Name: 'Administrateur', value: '5',routing:'/main'}
        ];
    constructor(private _fuseNavigationService: FuseNavigationService,private _fuseSidebarService: FuseSidebarService, public snackBar: MatSnackBar,
        private globals: Globals,private router: Router,private parCrud: CrudPopupComponent,  private session: SessionStorageService){
        this.navigation = fournissNavigation;
		this.role=this.globals.role;
        this.crudComp=this.parCrud;
        // Register the navigation to the service
        this._fuseNavigationService.register('fourniss', this.navigation);

        // Set the main navigation as our current navigation
        this._fuseNavigationService.setCurrentNavigation('fourniss');
        console.log("FournisseurComponent role:"+this.role);

        this.utilisateur = this.session.get("utilisateur")
        console.log("isagreer: ", this.utilisateur.isagreer)	

        if (this.utilisateur.isagreer == "true"){
            this.isagreer = true
            this.buttonDisabled = true;        
        }else{
            this.isagreer = false
            this.buttonDisabled = false;
        }

    }
   
    ngOnInit() { }
	 
    changeNavigation(value):void
    {
        console.log("FournisseurComponent changeNavigation :"+value);
        if(value=="1")
        {
            this.navigation = acheteurNavigation;
			this._fuseNavigationService.register('fourniss-ach', this.navigation);
			this._fuseNavigationService.setCurrentNavigation('fourniss-ach');
            this.router.navigate(['shopping']);
        }
        else if (value=="2")
        {
            this.navigation = banqueNavigation;
			this._fuseNavigationService.register('fourniss-banq', this.navigation);
			this._fuseNavigationService.setCurrentNavigation('fourniss-banq');
            this.router.navigate(['banque']);
        }
        else if (value=="3")
        {
            this.navigation = fournissNavigation;
			this._fuseNavigationService.register('fourniss-four', this.navigation);
			this._fuseNavigationService.setCurrentNavigation('fourniss-four');
            this.router.navigate(['main-magasin']);
        }
        else if (value=="4")
        {
            this.navigation = animNavigation;
			this._fuseNavigationService.register('fourniss-anim', this.navigation);
			this._fuseNavigationService.setCurrentNavigation('fourniss-anim');
            this.router.navigate(['main-anim']);
        }
        else if (value=="5")
        {
            this.navigation = adminNavigation;
			this._fuseNavigationService.register('fourniss-admin', this.navigation);
			this._fuseNavigationService.setCurrentNavigation('fourniss-admin');
            this.router.navigate(['']);
        }
    }
    ajoutDemandeAgrement(){
        this.crudComp.openCreateDemandeAgreement();
    }

    openCreateBoutique(){
        if (this.isagreer == true){
            this.crudComp.openCreateBoutique();
        }else{
            let refSnack = this.snackBar.open('Vous netes pas autorisé a faire cette action','merci', {
                duration: 3000
              });
          
              refSnack.afterDismissed().subscribe(()=>{
                this.crudComp.openCreateDemandeAgreement()
              })        
            }
    }

    openCreateProduit(){
        if (this.isagreer == true){
            this.crudComp.openCreateProduit();
        }else{
            let refSnack = this.snackBar.open('Vous netes pas autorisé a faire cette action','merci', {
                duration: 3000
              });
          
              refSnack.afterDismissed().subscribe(()=>{
                this.crudComp.openCreateDemandeAgreement()
              })        
            }
    }

    openCreateMagasin(){
        if (this.isagreer == true){
            this.crudComp.openCreateMagasin();
        }else{
            let refSnack = this.snackBar.open('Vous netes pas autorisé a faire cette action','merci', {
                duration: 3000
              });
          
              refSnack.afterDismissed().subscribe(()=>{
                this.crudComp.openCreateDemandeAgreement()
              })        
            }
    }

    toggleSidebar(name): void
    {
        // TODO 
    this._fuseSidebarService.getSidebar(name).toggleOpen();
    }
}

