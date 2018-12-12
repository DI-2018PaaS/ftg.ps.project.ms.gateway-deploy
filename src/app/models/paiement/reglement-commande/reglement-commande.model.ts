import { Moment } from 'moment';
import { IPret } from '../pret/pret.model';
import { IDirectPaiement } from '../direct-paiement/direct-paiement.model';

export interface IReglementCommande {
    id?: number;
    idReglement?: number;
    dateReglement?: Moment;
    idBonDeCommande?: number;
    reglementCommandePrets?: IPret[];
    reglementCommandeDirectPaiements?: IDirectPaiement[];
}

export class ReglementCommande implements IReglementCommande {
    constructor(
        public id?: number,
        public idReglement?: number,
        public dateReglement?: Moment,
        public idBonDeCommande?: number,
        public reglementCommandePrets?: IPret[],
        public reglementCommandeDirectPaiements?: IDirectPaiement[]
    ) {}
}