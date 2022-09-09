export interface DettagliPrenotazione {
    id: number;
    periodo: string;
    partizioniPrenotate: number;
    pctAvanzamento: number;
    tmsPrenotazione: string;
    utente: string;
    note: string;
    startElab: string;
    fineElab: string;
    fileBackup: string;
    sizeFileBackup: string;
    tmsPrenotSvecch: string;
    utentePrenotSvecch: string;
    statoSvecch: string;
    elencoPartizioni: {
        codPartCol: string,
        input: boolean,
        output: boolean,
        mapping: boolean,
    }[];
}
