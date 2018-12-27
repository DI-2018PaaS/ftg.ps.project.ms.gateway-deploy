import { Component, OnInit , ViewChild} from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { banqueNavigation } from 'app/espace/banque/navigation/banqueNavigation';
import { FuseNavigationService } from '@fuse/components/navigation/navigation.service';
import { FuseSidebarService } from '@fuse/components/sidebar/sidebar.service';

@Component({
  selector: 'app-banque',
  templateUrl: './banque.component.html',
  styleUrls: ['./banque.component.scss']
})
export class BanqueComponent implements OnInit {
  navigation: any;

  ngOnInit() {
  }

  constructor(private _fuseNavigationService: FuseNavigationService,private _fuseSidebarService: FuseSidebarService) { 
    
      this.navigation = banqueNavigation;

      // Register the navigation to the service
      this._fuseNavigationService.register('banq', this.navigation);

      // Set the main navigation as our current navigation
      this._fuseNavigationService.setCurrentNavigation('banq');
    }
	toggleSidebar(name): void
    {
        this._fuseSidebarService.getSidebar(name).toggleOpen();
    }
  }
