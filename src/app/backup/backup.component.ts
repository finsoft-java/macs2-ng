import { Component, OnInit } from '@angular/core';
import { WebservicesService } from '../_services';
import { Prenotazione } from '../_models';
import { DettagliPrenotazione } from '../_models/DettagliPrenotazione';

@Component({
  selector: 'app-backup',
  templateUrl: './backup.component.html',
  styleUrls: ['./backup.component.css']
})
export class BackupComponent implements OnInit {

  periodoOpened = true;
  dataRifBckupGest?: string;
  listaCompleta: Prenotazione[] = [];
  selected: number = 0;
  modaleAperta = false;
  prenotazioneSelected?: Prenotazione;
  showDialog = false;
  dettagliPrenotazione?: DettagliPrenotazione;

  constructor(private webservices: WebservicesService) { }

  ngOnInit(): void {
    this.webservices.getPrenotazioni().then(
      response => {
        this.listaCompleta = response || [];
      }
    );
  }

  start() {
    // TODO
  }

  doFilter(table: any, $event: Event) {
    table.filterGlobal(($event.target as HTMLInputElement).value, 'contains')
  }

  selectRow($event: any) {
    console.log($event.data);
    this.showDialog = true;
    this.webservices.getPrenotazione($event.data.periodo).then(
      response => {
        this.dettagliPrenotazione = response;
      }
    );
  }
}
