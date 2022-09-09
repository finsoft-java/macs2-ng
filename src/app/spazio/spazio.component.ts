import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { WebservicesService } from '../_services';

@Component({
  selector: 'app-spazio',
  templateUrl: './spazio.component.html',
  styleUrls: ['./spazio.component.css']
})
export class SpazioComponent implements OnInit {

  dataAggiornamento = "2022-09-06 16:00:09"; // DA WEBSERVICE
  periodo : "ALL" | "SEGN" | "GEST" = "ALL";
  options = [
    { value: 'ALL', label: 'Tutti' },
    { value: 'SEGN', label: 'Segnaletico' },
    { value: 'GEST', label: 'Gestionale' }
  ];

  gaugeChartRawData: any = null;
  gaugeChartData: any = null;
  gaugeChartOptions: any = null;
  giriChartRawData: any = null;
  giriChartData: any = null;
  giriChartOptions: any = null;
  detailsChartRawData: any = null;
  detailsChartData: any = null;
  detailsChartOptions: any = null;


  constructor(private webservices: WebservicesService) { }

  ngOnInit(): void {
    this.aggiornaStatistiche();
  }

  aggiornaStatistiche() {
    this.webservices.getGiri().then(
      response => {
        this.giriChartRawData = response;
        this.creaGiriChart();
      }
    );
    this.webservices.getTablespaceCritici().then(
      response => {
        this.gaugeChartRawData = response;
        this.creaGaugeChart();
      }
    );
    this.webservices.getTablespaceDetails().then(
      response => {
        this.detailsChartRawData = response;
        this.creaDetailChart();
      }
    );
  }

  creaGiriChart() {

    this.giriChartOptions = {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: 'chartArea',
        },
        title: {
          display: true,
          text: 'Numero giri eseguibili per Tablespace'
        }
      },
      scales: {
        x: {
            stacked: true
        },
        y: {
            stacked: true
        }
      }
    };

    this.giriChartData = {
      labels: this.giriChartRawData.labels,
      datasets: [
        {
          label: 'Tablespace dati / numero giri',
          data: this.giriChartRawData.numGiriDati,
          backgroundColor: '#4bb2c5',
          borderWidth: 0,
          borderSkipped: false,
        },
        {
          label: 'Tablespace indici / numero giri',
          data: this.giriChartRawData.numGiriIndici,
          backgroundColor: '#eaa228',
          borderWidth: 0,
          borderSkipped: false,
        }
      ]
    };
  }

  creaGaugeChart() {
    const pct = this.gaugeChartRawData.pct;

    this.gaugeChartOptions = {
      rotation: 270, // start angle in degrees
      circumference: 180, // sweep angle in degrees
      responsive: true,
      maintainAspectRatio: false,
      cutout: 0,
      plugins: {
        legend: {
          display: false
        },
        tooltip: {
          yAlign: "bottom",
          displayColors: false,
          callbacks: {
            label: function (tooltipItem: any) {
              return tooltipItem.label;
            },
          },
        },
        title: {
          display: true,
          text: 'Tablespace critici'
        }
      },
    };

    this.gaugeChartData = {
      datasets: [{
        data: [5, 5, 5, 5],
        backgroundColor: ["#cc6666", "#e7e658", "#93b75f", "#66cc66"],
        circumference: 180,
        rotation: 270,
      }, {
        data: [10,1,88],
        backgroundColor: ["#ffffff00", "#666666", "#ffffff00"],
        borderWidth: 0,
        circumference: 180,
        rotation: 270,
        weight:2
      }]
    };

  }

  creaDetailChart() {

    this.detailsChartData = {
      labels: this.detailsChartRawData.labels,
      datasets: [
        {
          label: 'Tablespace dati / occupato',
          data: this.detailsChartRawData.datiOccupati,
          backgroundColor: '#579575',
          borderWidth: 0,
          borderSkipped: false,
        },
        {
          label: 'Tablespace dati / libero',
          data: this.detailsChartRawData.datiLiberi,
          backgroundColor: '#4bb2c5',
          borderWidth: 0,
          borderSkipped: false,
        },
        {
          label: 'Tablespace indici / occupato',
          data: this.detailsChartRawData.indiciOccupati,
          backgroundColor: '#c5b47f',
          borderWidth: 0,
          borderSkipped: false,
        },
        {
          label: 'Tablespace indici / libero',
          data: this.detailsChartRawData.indiciLiberi,
          backgroundColor: '#e4a334',
          borderWidth: 0,
          borderSkipped: false,
        }
      ]
    };

    this.detailsChartOptions = {
      responsive: true,
      //maintainAspectRatio: false,
      plugins: {
        legend: {
          position: 'chartArea',
        },
        title: {
          display: true,
          text: 'Spazio occupato / libero'
        }
      },
      scales: {
        x: {
            stacked: true
        },
        y: {
            stacked: true,
            title: {
              display: true,
              text: 'Dimensione (Mb)'
            }
        }
      }
    };
  }
}
