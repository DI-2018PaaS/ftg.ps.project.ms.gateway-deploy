import { Moment } from 'moment';
import { IPret } from '../pret/pret.model';
import { IDirectPaiement } from '../direct-paiement/direct-paiement.model';

export interface IRemboursementCredit {
    id?: number;
    idRemboursement?: number;
    dateRemboursement?: Moment;
    idOwner?: number;
    remboursementCredit?: IPret;
    remboursementCredits?: IDirectPaiement[];
}

export class RemboursementCredit implements IRemboursementCredit {
    constructor(
        public id?: number,
        public idRemboursement?: number,
        public dateRemboursement?: Moment,
        public idOwner?: number,
        public remboursementCredit?: IPret,
        public remboursementCredits?: IDirectPaiement[]
    ) {}
}
