import { Moment } from 'moment';
import { IPret } from '../pret/pret.model';

export interface ILigneCredit {
    id?: number;
    idLigneCredit?: number;
    libelle?: string;
    description?: string;
    dateCreation?: Moment;
    dateMisAjour?: Moment;
    montant?: number;
    idOwner?: number;
    nomFinancier?: string;
    ligneCredits?: IPret[];
}

export class LigneCredit implements ILigneCredit {
    constructor(
        public id?: number,
        public idLigneCredit?: number,
        public libelle?: string,
        public description?: string,
        public dateCreation?: Moment,
        public dateMisAjour?: Moment,
        public montant?: number,
        public idOwner?: number,
        public nomFinancier?: string,
        public ligneCredits?: IPret[]
    ) {}
}
