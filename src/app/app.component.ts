import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'macs2';
  cognomeNome = 'VERCELLI LUCA';  // DA WEBSERVICE

  items: MenuItem[] = [
          {
              label: 'Spazio',
              icon: 'pi pi-fw pi-chart-pie',
              routerLink: 'spazio'
          },
          {
              label: 'Backup',
              icon: 'pi pi-fw pi-save',
              routerLink: 'backup'
          },
          {
              separator: true,
              style: 'width:200px' // non funziona
          },
          {
              label: 'Rettifiche',
              icon: 'pi pi-fw pi-pencil',
              url: '../u7ba0'
          }
      ];
}
