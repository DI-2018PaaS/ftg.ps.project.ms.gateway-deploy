import { FuseNavigation } from '@fuse/types';

export const animNavigation: FuseNavigation[] = [
    {
        id       : 'main-anim',
        title    : 'Home',
        translate: 'NAV.APPLICATIONS',
        type     : 'collapsable',
        icon     : 'computer',
        url      : 'main-anim'
    },
    {
        id      : 'anim-alertes',
        title   : 'Alertes',
        type    : 'collapsable',
        icon    : 'warning',
        url     : 'anim-alertes'
    },
    {
        id      : 'anim-suivi',
        title   : 'Suivi & Historique',
        type    : 'collapsable',
        icon    : 'verified_user',
        url     : 'anim-suivi'
    },
    {
        id      : 'anim-gestion',
        title   : 'Gestion',
        icon    : 'backup',
        type    : 'group',
        url     : 'anim-gestion'
    },
    {
        id      : 'agrement-animateur',
        title   : 'Demande agrément',
        icon    : 'launch',
        type    : 'group',
        url     : 'agrement-animateur'
    },
    {
        id      : 'anim-statistique',
        title   : 'Statistique & Notes',
        type    : 'group',
        icon    : 'trending_up',
        url     : 'anim-statistique'
    },
    {
        id      : 'anim-valid',
        title   : 'Validation',
        type    : 'group',
        icon    : 'check_circle_outline',
        url     : 'anim-valid'
    },


];
