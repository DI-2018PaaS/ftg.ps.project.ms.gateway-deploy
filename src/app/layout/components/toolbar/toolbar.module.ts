import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatButtonModule, MatIconModule, MatMenuModule, MatToolbarModule } from '@angular/material';

import { FuseSearchBarModule, FuseShortcutsModule } from '@fuse/components';
import { FuseSharedModule } from '@fuse/shared.module';
import { SharedModule } from '../../../shared-front/shared/shared.module';
import { ToolbarComponent } from 'app/layout/components/toolbar/toolbar.component';
import { CoreModule } from '../../../../@core/components/core/core.module';
import { MatBadgeModule } from '@angular/material/badge';

@NgModule({
    declarations: [
        ToolbarComponent
    ],
    imports     : [
        RouterModule,
        MatButtonModule,
        MatIconModule,
        MatMenuModule,
        MatToolbarModule,

        FuseSharedModule,
        FuseSearchBarModule,
        FuseShortcutsModule,
        SharedModule,
        CoreModule,
        MatBadgeModule
    ],
    exports     : [
        ToolbarComponent
    ]
})
export class ToolbarModule
{
}
