import { Moment } from 'moment';
// import { ILigneCredit } from '../ligne-credit/ligne-credit.model';
import { IEtatPret } from '../etat-pret/etat-pret.model';
import { IReglementCommande } from '../reglement-commande/reglement-commande.model';
export class TypePret{
    key?: string;
    idTypePret: number;
    libelle: string;
    description: string;
}

export interface IPret {
    id?: number;
    numPret?: number;
    dateCreation?: Moment;
    dateMisAjour?: Moment;
    capitalRestant?: number;
    dateDernierRemb?: Moment;
    idOwner?: number;
    // ligneCredit?: ILigneCredit;
    pret?: IEtatPret;
    reglementCommande?: IReglementCommande;
}

export class Pret implements IPret {
    constructor(
        public id?: number,
        public numPret?: number,
        public dateCreation?: Moment,
        public dateMisAjour?: Moment,
        public capitalRestant?: number,
        public dateDernierRemb?: Moment,
        public idOwner?: number,
        // public ligneCredit?: ILigneCredit,
        public pret?: IEtatPret,
        public reglementCommande?: IReglementCommande
    ) {}
}