import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Prenotazione } from '../_models';
import { DettagliPrenotazione } from '../_models/DettagliPrenotazione';

@Injectable({
  providedIn: 'root'
})
export class WebservicesService {

  constructor(private http: HttpClient) { }

  getUtente() {
    return this.http.get('assets/mock/utente.json').toPromise();
  }

  getGiri() {
    return this.http.get('assets/mock/giri.json').toPromise();
  }

  getTablespaceCritici() {
    return this.http.get('assets/mock/tsCritici.json').toPromise();
  }

  getTablespaceDetails() {
    return this.http.get('assets/mock/tsDetail.json').toPromise();
  }

  getPrenotazioni() {
    return this.http.get<Prenotazione[]>('assets/mock/prenotazioni.json').toPromise();
  }

  getPrenotazione(periodo: string) {
    return this.http.get<DettagliPrenotazione>('assets/mock/prenotazione.json').toPromise();
  }
}
