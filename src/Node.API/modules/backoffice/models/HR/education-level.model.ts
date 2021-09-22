export class EducationLevel {
    /**
     *
     */
    constructor(
        public descricao: string,
        public nomeInstituto: string,
        public dateInicio: Date,
        public dateFormatura: Date,
        public ufSiglave: UF,
    ) {
        
        
    }
}