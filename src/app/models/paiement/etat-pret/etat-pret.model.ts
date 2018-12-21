export interface IEtatPret {
    id?: number;
    idEtat?: number;
    libelle?: string;
    description?: string;
}

export class EtatPret implements IEtatPret {
    constructor(public id?: number, public idEtat?: number, public libelle?: string, public description?: string) {}
}
