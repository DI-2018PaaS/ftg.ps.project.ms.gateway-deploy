import { IRemboursementCredit } from '../remboursement-credit/remboursement-credit.model';
import { IReglementCommande } from '../reglement-commande/reglement-commande.model';

export interface IDirectPaiement {
    id?: number;
    idModePaiement?: number;
    libelle?: string;
    description?: string;
    remboursementCredit?: IRemboursementCredit;
    reglementCommande?: IReglementCommande;
}

export class DirectPaiement implements IDirectPaiement {
    constructor(
        public id?: number,
        public idModePaiement?: number,
        public libelle?: string,
        public description?: string,
        public remboursementCredit?: IRemboursementCredit,
        public reglementCommande?: IReglementCommande
    ) {}
}